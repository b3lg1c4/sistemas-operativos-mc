const shuffle = (array, returnedElements = array.length, returnType) => {

    let shuffledArray = [...array];
    let temp;
    let counter = shuffledArray.length;
    let randomIndex;

    while (counter !== 0) {
        randomIndex = Math.floor(Math.random() * counter);
        counter -= 1;

        temp = shuffledArray[counter];
        shuffledArray[counter] = shuffledArray[randomIndex];
        shuffledArray[randomIndex] = temp;
    };

    if (returnedElements === array.length) return shuffledArray;
    if (returnedElements === 1) return getOneRandomElement(shuffledArray, returnType);
    return getGroupOfRandomElements(returnedElements, shuffledArray);

};

const getOneRandomElement = (shuffledArray, returnType) => {

    const randomIndex = Math.floor(Math.random() * shuffledArray.length);

    if (returnType === "simple") return shuffledArray[randomIndex];
    return [shuffledArray[randomIndex]]; 
};


const getGroupOfRandomElements = (returnedElements, array) => {

    let group = [];
    for (let index = 0; index < returnedElements; index++) {
        group.push(array[index]);

    };

    return group;
};

export { shuffle };