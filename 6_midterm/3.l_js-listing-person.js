class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
}

function parsePersonArrayToOptionArray(personObjects) {
    let el;
    return personObjects.map((person, personIdx) => {
        el = document.createElement('option');
        el.setAttribute('value', personIdx);
        el.innerText = person.name;
        return el;
    });
}

let personObjects = [];
personObjects.push(new Person('Hugo', 22));
personObjects.push(new Person('Susi', 25));

let personDropdown = document.querySelector('#persons');
parsePersonArrayToOptionArray(personObjects).forEach(personElement => {
    personDropdown.appendChild(personElement);
});

document.querySelector('input[name="intr-btn"]').addEventListener('click', personObjects[personDropdown.value].introduce);
