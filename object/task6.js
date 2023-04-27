const giveTalonsInOrder = (patiens, orders) => {
    let newArray = [];
    for (let number of orders) {
        const arraNewElement = patiens.find(e => {
            return e.id === number;
        })
        newArray.push(arraNewElement);
    }
    return newArray;
}

const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Maxim" },
    { id: 2, name: "Nicholas" },
    { id: 3, name: "Angelina" },
    { id: 4, name: "Vitaly" },
];

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);
/* Returns an array
[
    { id: 4, name: 'Vitaly' },
    { id: 2, name: 'Nicholas' },
    { id: 1, name: 'Maxim' },
    { id: 3, name: 'Angelina' }
]
*/
