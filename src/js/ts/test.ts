const isValid: boolean = true;
const isTrue: boolean = false;


let num: number = 123;
let double: number = 4.2345523;
let bigNumber: number = 3e5;

const arrNumbers: Array<number> = [12, 21, 11, 24, 32,];
const arrBools: Array<boolean> = [true, false, true, true];
const arrBoolsInNumbers: Array<number> = [];
const arrStrings: Array<string> = ['asd', 'ads']

for(let i: number = 0; i < arrBools.length; i++) {
    if(arrBools[i]) {
        arrBoolsInNumbers.push(1);
    } else {
        arrBoolsInNumbers.push(0);
    }  
}

type contactType =  [string, number];

const contact: [string, number] = ['asd', 213];
const contact2: Array<Array<number>> = [[], [], []];

//export const contact3: [...Array<contactType>] = [['asd', 123], ['asd', 123]]

let different: any = [];
different.push(1);
// console.log(different);

interface com {

}

different = 'dfs'
// console.log(different);

// const button = document.querySelector('.log')
// button.addEventListener('click', ev => {
//     ev.preventDefault();
//     button.classList.toggle('._ACTIVE')
// }, {})
// const myFunc = (num): number => {
//     return num;
// }

function myFunc(num: number): number {
    return num;
}

function sayName(name: string | null): void {
    console.log((typeof name === 'string') ? name : 'You haven\'t name');
}

// console.log(myFunc(123))

// sayName('Ilya');
// sayName(null);

type _Instruction = {
    size: {
        height: number,
        width: number,
        square?(): number,
    }
}

//const dom = document.querySelector('.sd')

interface testOnTypes {
    main: number;
    other?: number;
}

// VERY INTERESTING SITUATION
const arrowFunction = (obj: testOnTypes): void => {
    console.log(obj.main);
    let no = obj.other === undefined ? 0 : obj.other;
    // no = 123
    // no = 'sd'
    // console.log(no);
    console.log(no);
    
}

arrowFunction({main: 34, other: NaN});

class info {
    readonly height: number;
    readonly width: number;
    public square(): number {
        return this.height * this.width;
    }
    
    constructor(constructor: _Instruction, className?: string) {
        // if(infoClassNameValidator(className)) {

        // }
        this.height = constructor.size.height;
        this.width = constructor.size.width;
    }
} 

const newinfo = new info({
    size: {
        height: 520,
        width: 32,
    }
});

const newinfo2 = new info({
    size: {
        height: 1920,
        width: 1080,
    }
})

function watcher(h: number, w: number): void {
    console.log('height = ', h);
    console.log('width = ', w);
} 

// watcher(newinfo.height, newinfo.width);
// watcher(newinfo2.height, newinfo2.width);



type func = {
    'admin': string, 
    'login': string | number,
    pass: number,
    data?: {
        time: string,
        'date'?: number,
    }
}

const newFunc: func = {
    pass: 123,
    login: 'sadsad',
    admin: 'i\'m',
    data: {
        time: '05340982',
        date: 14124,
    }
}

interface _Account {
    readonly ID: number | string;
    information: {
        login: string;
        pass: string;
        dateRegistration?: Date;
    }
    readonly isValidAccount: boolean;
}

const acc1: _Account = {
    ID: '505',
    information: {
        login: 'sur',
        pass: '234',
    },
    isValidAccount: true,
}

const acc2: _Account = {
    ID: '506',
    information: {
        login: 'surp',
        pass: '234',
        dateRegistration: new Date(),
    },
    isValidAccount: null,
}


// Интерфейс лучше использовать для создания каких-то объектов и инструкций 

interface _Account__V_1_0_0 extends _Account {
    name?: string;
    lastName?: string,
}

interface _AccountHer extends _Account__V_1_0_0 {
    name: string;
    lastName: string;
}

const acc3: _Account__V_1_0_0 = {
    ID: '506',
    information: {
        login: 'surpsdf',
        pass: '234ddfs',
    },
    isValidAccount: false,
}

const acc4: _Account__V_1_0_0 = {
    ID: '506as',
    information: {
        login: 'surpsdfs',
        pass: '234ddf1s',
    },
    isValidAccount: false,
    name: 'danila',
    lastName: 'NaN'
}

const acc5: _AccountHer = {
    ID: '506',
    information: {
        login: 'surpsdf',
        pass: '234ddfs',
    },
    isValidAccount: false,
    name: 'ponyal',
    lastName: 'перезаписывается просто на необходимое',
}

const base: Array<_AccountHer> = [];

acc5.name = 'asd';
// console.log(acc5.name);

for(let i: number = 0; i < 500; i++) {
    const acc: _AccountHer = {
        ID: `${i}`,
        information: {
            login: 'surpri6e Clone!',
            pass: `${i * 156 / (i - (i / 2) * 1055 / 67)}`,
        },
        isValidAccount: false,
        name: 'empty',
        lastName: 'clones',
    }

    base.push(acc);
}


interface forClass {
    readonly name: string,
    readonly lastName: string,
    getName?: () => string,
    setLastName(lastName: string): void,
};

class people implements forClass {
    name: string;
    lastName: string = 'empty';
    constructor(name: string) {
        this.name = name;
    }
    setLastName(lastName: string): void {
        this.lastName = lastName;
    }
    getName(): string {
        return this.name;
    };
}

const person1 = new people('asd');
//console.log(base);
// масисв аккаунтов

interface key {
    [key: string]: string;
}

enum socialBlock1 {
    Vk,
    Insta,
    Facebook,
    Twitter,
}

enum socialBlock2 {
    Vk = 5,
    Insta,
    Facebook,
    Twitter,
}

// использование enum на практике 

// console.log(socialBlock1.Vk);
// console.log(socialBlock2[7]);

enum socialBlock3 {
    Vk = 'VK',
    Insta = 'INSTAGRAM',
    Facebook = 'FACEBOOK',
    Twitter = 'TWITTER',
}

// console.log(socialBlock3.Facebook);
// console.log(socialBlock3['FACEBOOK']);

type isReg = 'process' | 'registration';

const reg: isReg = 'process'


const NewInfo = new info({
    size: {
        height: 50,
        width: 50,
    }
})

NewInfo.square()

interface beforeReg {
    isValid: boolean
    id: number | undefined
}

interface afterReg {
    isValid: boolean
    login: string
    pass: string | undefined 
}

function registration(validator: boolean): beforeReg;
function registration(validator: boolean, id: number): beforeReg;
function registration(validator: boolean, login: string): afterReg;
function registration(validator: boolean, login: string, pass: string): afterReg;

function registration(validator: boolean, logOrId?: string | number, pass?: string) {
    if(!validator) {
        if(typeof logOrId === 'number') {
            return {isValid: false, id: logOrId};
        }

        return {isValid: false, id: 0};
    }

    if(validator) {
        if(logOrId !== '') {
            if(pass && pass !== '') {
                return {isValid: true, login: logOrId, pass: pass};
            }
        
            return {isValid: true, login: logOrId};
        }
    }
}
class Flowers {
    typeOfFlower: string;
    readonly isSmall: boolean;

    constructor(isSmall: boolean, type: string = 'Empty') {
        this.isSmall = isSmall;
        this.typeOfFlower = type;
    }

    getInfo(): void {
        console.log(`Type: [${this.typeOfFlower}], Small: [${this.isSmall}]`);
    }

    setTypeOfFlower(newType: string): void {
        this.typeOfFlower = newType;
    }
}

const flower1 = new Flowers(true);
const flower2 = new Flowers(false, 'gg');
console.log(flower1);
console.log(flower2);

flower1.setTypeOfFlower('tulips')
flower2.getInfo();
console.log(flower1);


abstract class src {
    abstract file: string;
    abstract getDir(): void;
}

class test {
    protected readonly asd: string;
}

class source extends src {
    file: string = './src';
    getDir(): void {
        console.log(this.file);
    }
}

function surpri6e(sur: string | number): string | number {
    if(typeof sur === 'number') {
        return sur.toFixed(3);
    }

    return sur.length
}

function surpri6e2(sur: string | number) {
    if(typeof sur === 'string') {
        return sur.length
    }

    return sur.toFixed(3);
}


class guard1 {
    fuck: string;
    you: boolean;
}

class guard2 {
    fuck: string;
    me: number;
}

function fucker(f: guard1 | guard2) {
    if(f instanceof guard1) {
        return f.you;
    }

    return f.me
}

type boll = 'yes' | 'no';

function myBoll(ev: boll) {}

myBoll('yes');
myBoll('no');


const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6];
const arrayStrings: Array<string> = ['1', '2', '3'];

const arrayAlias: Array<number | string> = ['sd', 3, 3, 'fg'];

function reverse<F>(arr: F[]): F[] {
    return arr.reverse();
}

console.log(reverse(arrayNumbers));
console.log(reverse(arrayStrings));
console.log(reverse(arrayAlias));

/**
 * @example
 * 
 * export interface Person {
    name: string;
    age: number;
}
 */
export interface Person {
    name: string;
    age: number;
}

// const test25: Person = {

// }

type personType = keyof Person

// const p1: personType = '234'
const p3: personType = 'age';
const p2: personType = 'name';

type User = {
    log: string;
    reg: boolean;
    _id: number;
}

type UserWithoutAnything1 = Exclude<keyof User, '_id'>

const u1: UserWithoutAnything1 = 'log';
// const u2: UserWithoutAnything = '_id';

type UserWithoutAnything2 = Pick<User, '_id' | 'reg'>

const u3: UserWithoutAnything2 = {
    reg: true,
    _id : 505,
}

//! DOM 

export const event = (): void => {
    const btn: Element = document.querySelector('.header__logo');
    let headerBtns = document.querySelectorAll('.menu__link');
    btn.addEventListener('click', ev => {
        ev.preventDefault();
        for(let i: number = 0; i < headerBtns.length; i++) {
            headerBtns[i].classList.toggle('TS__orange');
        }
    }, {})
}