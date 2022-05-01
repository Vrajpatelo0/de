

function chooseRandomQuestions(arrLength, numberOfQuestions){
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    var arr = [];
    while(arr.length < numberOfQuestions){
        var r = random(0, arrLength)
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    return s
}