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

const contact3: [...Array<contactType>] = [['asd', 123], ['asd', 123]]

let different: any = [];
different.push(1);
console.log(different);

interface com {

}

different = 'dfs'
console.log(different);


// const myFunc = (num): number => {
//     return num;
// }

function myFunc(num: number): number {
    return num;
}

function sayName(name: string | null): void {
    console.log((typeof name === 'string') ? name : 'You haven\'t name');
}

console.log(myFunc(123))

sayName('Ilya');
sayName(null);

type _Instruction = {
    size: {
        height: number,
        width: number,
        square?(): number,
    }
}

class info {
    readonly height: number;
    readonly width: number;
    constructor(constur: _Instruction) {
        this.height = constur.size.height;
        this.width = constur.size.width;
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

watcher(newinfo.height, newinfo.width);
watcher(newinfo2.height, newinfo2.width);



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
console.log(acc5.name);

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

console.log(socialBlock1.Vk);
console.log(socialBlock2[7]);

enum socialBlock3 {
    Vk = 'VK',
    Insta = 'INSTAGRAM',
    Facebook = 'FACEBOOK',
    Twitter = 'TWITTER',
}

console.log(socialBlock3.Facebook);
console.log(socialBlock3['FACEBOOK']);





