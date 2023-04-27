const addDays = (date, days = 1) => {
    const newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    console.log(newDate);
}

const date = new Date('2002-04-30');

addDays(date, 3);