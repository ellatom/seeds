const toDoItemList = require('./toDoItemList');

describe('toDo', () => {

    describe('addItem', () => {
        it('should add item', () => {//positive flow item added

            let item = { id: "5", text: "go shopping", markedDone: true };
            const result = toDoItemList.addItem(item);
            console.log("result:" + result);

            const expected = true;

            expect(result).toEqual(expected);
        });
        it('shouldnt add invalid item', () => {//negative flow non boolean value was added to markedDone

            let item = { id: "6", text: "go bla bla", markedDone: 3 };
            const result = toDoItemList.addItem(item);
            console.log("result:" + result);
            const expected = false;

            expect(result).toEqual(expected);
        });

        it('shouldnt add empty text item', () => {//negative flow text is empty item shouldnt be added

            let item = { id: "6", text: "", markedDone: 3 };
            const result = toDoItemList.addItem(item);
            console.log("result:" + result);
            const expected = false;

            expect(result).toEqual(expected);
        });
        describe('markAsDone', () => {
            it('should markAsDone item', () => {//positive flow marked as done
                let item = { id: "2", text: "go a", markedDone: false };
                const result = toDoItemList.markAsDone(item);
                console.log("result:" + result);

                const expected = true;

                expect(result).toEqual(expected);
            });

            it('should item already done shouldnt be marked again as done', () => {//negative flow mark again something which already marked shouldnt happen
                let item = { id: "2", text: "go a", markedDone: true };
                const result = toDoItemList.markAsDone(item);
                console.log("result:" + result);

                const expected = false;

                expect(result).toEqual(expected);
            });
        });

        describe('deleteItem', () => {
            it('should delete item', () => {//positive flow
                let item = { id: "2", text: "go a", markedDone: true };
                const result = toDoItemList.deleteItem(item);
                console.log("result:" + result);

                const expected = true;

                expect(result).toEqual(expected);
            });

            it('shouldnt delete item if not exist', () => {//negative flow item not exists and try to delete it
                let item = { id: "1500", text: "go a", markedDone: true };
                const result = toDoItemList.deleteItem(item);
                console.log("result:" + result);

                const expected = false;

                expect(result).toEqual(expected);
            });
        });
//         describe('return All Items Desc By Mark', () => {
//             it('shouldnt return All Items Desc By Mark', () => {//positive flow
//                 let item = { id: "1500", text: "go a", markedDone: true };
//                 const result = toDoItemList.deleteItem(item);
//                 console.log("result:" + result);

//                 const expected = false;

//                 expect(result).toEqual(expected);
//             });
//         });

    });
});

