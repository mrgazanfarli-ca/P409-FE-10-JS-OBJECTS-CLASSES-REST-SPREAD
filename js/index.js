const a = 'This is string';

const EViewMode = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
}

const me = {
    name: 'Gazanfar',
    surname: 'Gazanfarli',
    age: 73,
    gender: 1,
    [EViewMode.PRIMARY]: 'blue',
}

console.log(me['name']);
console.log(me.surname);

const properties = ['name', 'surname', 'age', 'gender'];

properties.forEach((p) => {
    console.log(me[p]);
});

console.log(me.location);

Object.keys(me).forEach(key => {
    console.log(me[key]);
});

const b = {
    first: 'Birinci',
    second: 'Ikinci',
    third: 'Ucuncu',
}

const c = Object.create({ kind: 'animal' });

console.log(c);

const d = Object.assign(me, b);

Object.defineProperty(d, 'test', { value: 'Test val', writable: false });

console.log(Object.entries(d));

console.log(d);

console.log(Object.getOwnPropertyNames(d));

const anar = { name: 'Anar' };
const anarAgain = { name: 'Anar' };

console.log(JSON.stringify(anar) === JSON.stringify(anarAgain), ' Anar equality');

console.log(Object.is(anar, anarAgain));

const famil = {
    name: 'Famil',
    surname: 'Musayev',
    class: {
        name: 'P409',
        course: 'Software development',
    },
}

const stringifiedFamil = JSON.stringify(famil);
console.log(stringifiedFamil, ' as string');

const normalFamil = JSON.parse(stringifiedFamil);
console.log(normalFamil, ' as object');

const func = () => { };
const func1 = () => { };

console.log(typeof null);

console.log(null === null, ' null comparison');

const obj = {
    name: 'Name',
    surname: 'Surname',
    test: undefined,
};

delete obj.name;

console.log(d, ' our d object');

// const username = d.name;
// const surname = d.surname;
// const age = d.age;

// const {
//     name,
//     surname,
//     age,
// } = d ?? {};

// array destruction
const arr = [1, 2, 3, 5, 7, 13, 37, 73, 47];

const [first, second, third, ...rest] = arr;
console.log(rest, ' the rest');

const {
    name,
    surname,
    ...qalani
} = d;

console.log(qalani);

const maxNum = Math.max(...arr);

const widerArr = [91, ...arr, 131, 159];

const copyOfD = { ...d };

// console.log(copyOfD);

// console.log(maxNum);

console.log(x); // undefined - HOISTING

var x = 4;

// console.log(x); // 4

const map = new Map();

map.set('name', 'Grammarly');
map.set('surname', 'Mustafayev');
map.delete('name');

map.forEach((val) => {
    console.log(val, ' from foreach');
});

// console.log(map);

funcA();

function funcA() {
    console.log('this is a function');
}

class Driveable {
    constructor(power) {
        this.power = power;
    }
}

class Car extends Driveable {
    constructor(make, model, power) {
        super(power);

        this.make = make;
        this.model = model;
    }
}

const mercedes = new Car('Mercedes', 'GLE 450', '3600 kWt');
const bmw = new Car('BMW', 'i8', '3600kWt');
console.log(bmw);

class Human {
    speak() {
        return this;
    }

    static eat() {
        return this;
    }
}

const objToCopy = {
    name: 'Filankes',
    surname: 'Filankesov',
}

const makeObjCopy = (givenObject) => {
    const res = {};

    Object.keys(givenObject).forEach((key) => {
        res[key] = givenObject[key];
    });

    return res;
};

const copyOfObj = makeObjCopy(objToCopy);

console.log(copyOfObj);
