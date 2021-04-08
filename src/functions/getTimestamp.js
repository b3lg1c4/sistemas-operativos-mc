const getTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return { day: getDay(date), time: getTime(date) };


};

const getDay = (date) => {
    const day = getNumberDay(date);
    const month = getNumberMonth(date);
    const year = getNumberYear(date);
    return (`${day}/${month}/${year}`);
};

const getTime = (date) => {
    const hour = getNumberHour(date);
    const minutes = getNumberMinutes(date);
    return `${hour}:${minutes}`;
};

const getNumberDay = (date) => {
    if (date.getDate().toString().length === 1) {
        return `0${date.getDate()}`
    } else {
        return date.getDate();
    };
};

const getNumberMonth = (date) => {

    const month = date.getMonth() + 1;

    if (month.toString().length === 1) {
        return `0${month}`
    } else {
        return month;
    };
};

const getNumberYear = (date) => {
    return date.getFullYear();
};

const getNumberHour = (date) => {
    if (date.getHours().toString().length === 1) {
        return `0${date.getHours()}`
    } else {
        return date.getHours();
    };

};

const getNumberMinutes = (date) => {
    if (date.getMinutes().toString().length === 1) {
        return `0${date.getMinutes()}`
    } else {
        return date.getMinutes();
    };

};


export { getTimestamp };