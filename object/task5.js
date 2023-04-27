function getWinner(applicants, winnerObject) {
    let numberOfApplicants = Object.keys(winnerApplicants).length;
    const randomWInnderKey = Object.keys(winnerApplicants)[getRandomNumberInRange(0, numberOfApplicants)];

    return { ...winnerObject, ...winnerApplicants[randomWInnderKey] }
}

function getRandomNumberInRange(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}

const todaysWinner = {
    prize: '$10,000',
}

const winnerApplicants = {
    '001': {
        name: 'Max',
        age: 25
    },
    '201': {
        name: 'Svetlana',
        age: 20
    },
    '304': {
        name: 'Catherine',
        age: 35
    },
}



const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); // { prize: '$10,000', name: 'Maxim', age: 25 }
