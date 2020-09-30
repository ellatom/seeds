const toDoItemList = require('./toDoItemList');

describe('toDo', () => {

    describe('addItem', () => {
        it('should add item', () => {//positive flow item added

            let item = { id: "5", text: "go shopping", markedDone: true };
            const result = toDoItemList.addItem(item);
            const expected = true;
            expect(result).toEqual(expected);
        });
        it('should increase map size by 1 after item added', () => {//positive flow check the size of map is changed

            let lengthBefore=toDoItemList.getMap().size;
            let item = { id: "9", text: "go golf", markedDone: true };
            toDoItemList.addItem(item);
            const expectedLength = toDoItemList.getMap().size;
            expect(lengthBefore).toBe(expectedLength-1);
        });
        it('shouldnt add invalid item', () => {//negative flow non boolean value was added to markedDone

            let item = { id: "6", text: "go bla bla", markedDone: 3 };
            const result = toDoItemList.addItem(item);
            const expected = false;
            expect(result).toEqual(expected);
        });

        it('shouldnt add empty text item', () => {//negative flow text is empty item shouldnt be added

            let item = { id: "6", text: "", markedDone: 3 };
            const result = toDoItemList.addItem(item);
            const expected = false;
            expect(result).toEqual(expected);
        });
        describe('markAsDone', () => {
            it('should markAsDone item', () => {//positive flow marked as done
                let item = { id: "2", text: "go a", markedDone: false };
                const result = toDoItemList.markAsDone(item);
                const expected = true;
                expect(result).toEqual(expected);
            });

            it('should item already done shouldnt be marked again as done', () => {//negative flow mark again something which already marked shouldnt happen
                let item = { id: "2", text: "go a", markedDone: true };
                const result = toDoItemList.markAsDone(item);
                const expected = false;
                expect(result).toEqual(expected);
            });
        });

        describe('deleteItem', () => {
            it('should delete item', () => {//positive flow
                let item = { id: "2", text: "go a", markedDone: true };
                const result = toDoItemList.deleteItem(item);
                const expected = true;
                expect(result).toEqual(expected);
            });
            it('should decrease map size by 1 after item delete', () => {//positive flow check the size of map is changed

                let lengthBefore=toDoItemList.getMap().size;
                let item = { id: "2", text: "go a", markedDone: true };
                toDoItemList.deleteItem(item);
                const expectedLength = toDoItemList.getMap().size;
                expect(lengthBefore).toBe(expectedLength+1);
            });
            it('shouldnt delete item if not exist', () => {//negative flow item not exists and try to delete it
                let item = { id: "1500", text: "go a", markedDone: true };
                const result = toDoItemList.deleteItem(item);
                const expected = false;
                expect(result).toEqual(expected);
            });
        });

        describe('unmarkAsDone', () => {
            it('should unmarkAsDone item', () => {//positive flow marked as done
                let item = { id: "2", text: "go a", markedDone: true };
                const result = toDoItemList.unmarkAsDone(item);
                const expected = true;
                expect(result).toEqual(expected);
            });

            it('should item already undone shouldnt be marked again as undone', () => {//negative flow unmark again something which already unmarked shouldnt happen
                let item = { id: "2", text: "go a", markedDone: false };
                const result = toDoItemList.markAsDone(item);
                const expected = true;
                expect(result).toEqual(expected);
            });
        });

        // describe('return All Items Desc By Mark', () => {
        //     it('shouldnt return All Items Desc By Marked true in the bottom=Desc', () => {//negative flow
        //         let item = { id: "1500", text: "go a", markedDone: true };
        //         const result = toDoItemList.returnAllItemsDescByMark(toDoItemList.getMap());
                
        //         console.log("result:" + result);

        //         const expected = false;

        //         expect(result).toEqual(expected);
        //     });
        // });

    });
});

