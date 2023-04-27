function getDaysBeforeBirthday(nextBirthdayDate) {
    const myBirthDay = new Date(nextBirthdayDate);

    const currentDate = new Date();

    const finalBirthDay = new Date(currentDate.getFullYear(), myBirthDay.getMonth(), myBirthDay.getDate())

    const result = Math.abs(finalBirthDay.getTime() - currentDate.getTime());
    const FinalRes = Math.round(result / (1000 * 60 * 60 * 24));

    console.log(FinalRes);
    return FinalRes;

}

//I wrote the function but non need to use it
function convertMsToDays(ms) {
    const msPerDay = 1000 * 60 * 60 * 24;
    const days = Math.round(ms / msPerDay);
    return days;
}

getDaysBeforeBirthday('2002-04-30');
