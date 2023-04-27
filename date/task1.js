function getDateFormat(date, separator = '.') {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const formattedDate = `${day}${separator}${month}${separator}${year}`;

    return formattedDate;
}

const date = new Date('2002 04 30 ');

const formatted = getDateFormat(date, "-");
console.log(formatted);

