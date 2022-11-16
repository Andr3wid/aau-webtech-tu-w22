function measurePerformance(func) {
    const before = new Date().getTime();
    console.log(`Before ${before}`);

    func();

    const after = new Date().getTime();
    console.log(`After: ${after}`);

    return after - before;
}

function longRunningFunc() {
    for (let i = 0; i <= 10000; i++) {
        console.log(i);
    }

    return 0;
}

const passedTimeInMillis = measurePerformance(longRunningFunc);
console.log(passedTimeInMillis);

// higher order functions
const repeatedHello = () => { console.log('hello') };
// setInterval(repeatedHello, 3000);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 100, 1000, -5];

const numbersBelow100 = numbers.filter(num => {
    return num < 100;
});

console.log(numbersBelow100);

const doubledNumbers = numbers.map(num => {
    return num * 2;
});
console.log(doubledNumbers);

// closures & currying
const greeter = (name) => {
    const intermediateText = ' my mood is ';

    return (mood) => {
        return `My name is ${name} and ${intermediateText} ${mood}`;
    };
};

const unCurriedGreeter = (name, mood) => {
    const intermediateText = ' my mood is ';
    return `My name is ${name} and ${intermediateText} ${mood}`;
}

// f(a,b,c,d) ==> f(a)(b)(c)(d)

let returnedFunc = greeter('Andy');

let happyAndy = returnedFunc('happy');
let sadAndy = returnedFunc('sad');

console.log(happyAndy);
console.log(sadAndy);

// callbacks
// function longRunningBackgroundOperation(finishCallback) {
    // setTimeout(() => {
        // console.log('I am finished');
        // finishCallback();
    // }, 5000);
// }

// const onFinish = (callback) => {
    // console.log('I get called after finishing');
    // callback();
// };

// longRunningBackgroundOperation(onFinish);

// Promises
function longRunningPromiseFunc() {
    return new Promise((resolve, reject) => {
        console.log('I am inside the Promise');
        const rand = new Date().getTime();

        if(rand % 2 === 0) {
            resolve(rand);
        } else {
            reject('Not an even number', rand);
        }
    });
}

longRunningPromiseFunc()
.then(value => {
    console.log('I get executed after Promise resolves', value);
    return value / 2;
})
.then(anotherValue => {
    console.log('The halfed value is ' + anotherValue);
})
.catch(err => {
    console.log('An error occured in our Promise', err);
})
.finally(() => {
    console.log('I am doing some cleanup work');
});
