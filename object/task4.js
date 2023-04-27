function getKiller(suspectInfo, deadPeople) {
    for (let suspect in suspectInfo) {

        let seenDeadPeople = true;
        for (let deadPerson of deadPeople) {
            if (!suspectInfo[suspect].includes(deadPerson)) {
                seenDeadPeople = false;
                break;
            }
        }
        if (seenDeadPeople) {
            console.log(suspect);
            return suspect;
        }
    }
    return 'Killer not found';
}


getKiller(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle'],
    }, ['Lucas', 'Bill']
); // Killer James

getKiller(
    {
        'Brad': [],
        'Megan': ['Ben', 'Kevin'],
        'Finn': [],
    },
    ['Ben']
); // Killer Megan

