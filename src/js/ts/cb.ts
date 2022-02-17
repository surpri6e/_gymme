import { IPersonForServerRequest as objectPerson, TServerStatus} from './types';

function caller(num: number, cb: (n1: number, n2: number) => number): number {
    return cb(5, 6) + num
}

const number1 = caller(45, (n1: number, n2: number): number => {
    return n1 + n2;
})

const number2 = caller(65, (n1: number, n2: number): number => {
    return n1 - n2;
})

const number3 = caller(87, (n1: number, n2: number): number => {
    return n1 * n2;
})

// console.log(number1);
// console.log(number2);
// console.log(number3);


/**
 * 
 * Сборщик значений объекта на новые аргументы 
 * 
 * @param obj Старый объект, в котором нужно поменять значения 
 * @param vals Эти самые значения, хранящиеся в массиве в строковом типе
 * @param cb Коллбек функция, которая даёт последущую логику работы функции
 * 
 * @default normadfgdfgdfg dfgdgdfg dfg
 * 
 * @version 1.0.0
 * @license MIT
 * @example 
 * 
 * {
 *  name: newName,
 *  age: newAge,
 *  job: newJob,
 *  oldValues: cb(obj),
 * }
 * aasdasd
 * asdsadas
 * 
 * 
 */
function bindly(obj: objectPerson, vals: Array<string>, cb: (obj: objectPerson) => Array<string>): objectPerson {
    let newName: string = vals[0];
    let newAge: number = parseInt(vals[1], 10);
    let newJob: string = vals[2];

    return {
        name: newName,
        age: newAge,
        job: newJob,
        oldValues: cb(obj),
    }
}





// const byBindly1 = bindly({
//         name: 'Daniel',
//         age: 27,
//         job: 'Javascript',
//     }, ['John', '45', 'C++'],
//     (obj: object): Array<string> => {
//         let arrResult: Array<string> = [];
//         let objectVals: Array<string> = Object.values(obj) // Array<string | number>
//         if(objectVals.length > 0) {
//             for(let i: number = 0; i < objectVals.length; i++) {
//                 if(typeof objectVals[i] === 'string') {
//                     arrResult.push(objectVals[i])
//                 } else {
//                     arrResult.push(`${objectVals[i]}`)
//                 }
//             };
//         } else {
//             return ['Empty', '0', 'Empty'];
//         }
//         return arrResult;
//     }
// );

// function callback(obj: object): Array<string> {
//     let arrResult: Array<string> = [];
//     let objectVals: Array<string> = Object.values(obj)
//     if(objectVals.length > 0) {
//         for(let i: number = 0; i < objectVals.length; i++) {
//             if(typeof objectVals[i] === 'string') {
//                 arrResult.push(objectVals[i])
//             } else {
//                 arrResult.push(`${objectVals[i]}`)
//             }
//         };
//     } else {
//         return ['Empty', '0', 'Empty'];
//     }
//     return arrResult;
// }

// const o = {
//     name: 'Daniel',
//     age: 27,
//     job: 'Javascript',
// }

// const byBindly2 = bindly({
//     name: 'Daniel',
//     age: 27,
//     job: 'Javascript',
// }, ['John', '45', 'C++'],
//     callback(o)
// )

// console.log(byBindly1);


// console.log('Server request...');

// setTimeout(() => {
//     console.log('Server accessed.');
//     console.log('Get data according to settings data.');

//     setTimeout(() => {
//         const GetData = bindly({
//                 name: 'Daniel',
//                 age: 27,
//                 job: 'Javascript',
//             }, ['John', '45', 'C++'],
//             (object: objectPerson): string[] => {
//                 let arrResult: Array<string> = [];
//                 let objectVals: Array<string> = Object.values(object)
//                 if(objectVals.length > 0) {
//                     for(let i: number = 0; i < objectVals.length; i++) {
//                         if(typeof objectVals[i] === 'string') {
//                             arrResult.push(objectVals[i])
//                         } else {
//                             arrResult.push(`${objectVals[i]}`)
//                         }
//                     };
//                 } else {
//                     return ['Empty', '0', 'Empty'];
//                 }
//                 return arrResult;
//             }
//         );

//         console.log('Data received.');

//         setTimeout(() => {
//             GetData.server = 'active';
//             console.log(GetData);
//         }, 1500)

//     }, 3000);
// }, 1000);


console.log('Server request...');


// /**
//  * Пиздец
//  */
// const serverRequest = new Promise((res: (arg: objectPerson) => void, rej) => {
//     setTimeout(() => {
//         console.log('Server accessed.');
//         console.log('Get data according to settings data.');

//         let GetData /*: objectPerson*/ = bindly({
//                 name: 'Piter',
//                 age: 22,
//                 job: 'TypeScript',
//             }, ['John', '45', 'C++'],
//             (object: objectPerson): string[] => {
//                 let arrResult: Array<string> = [];
//                 let objectVals: Array<string> = Object.values(object)
//                 if(objectVals.length > 0) {
//                     for(let i: number = 0; i < objectVals.length; i++) {
//                         if(typeof objectVals[i] === 'string') {
//                             arrResult.push(objectVals[i])
//                         } else {
//                             arrResult.push(`${objectVals[i]}`)
//                         }
//                     };
//                 } else {
//                     return ['Empty', '0', 'Empty'];
//                 }
//                 return arrResult;
//             }
//         );
//         res(GetData);
//     }, 2000);
// });

// serverRequest
//     .then(function(data): Promise<objectPerson> {
//         console.log('Data received.');

//         return new Promise((res: (arg: objectPerson) => void, rej: (arg: number | string) => void) => {
//             setTimeout(() => {
//                 data.server = 'active';
//                 data.status = 'normal';

//                 res(data)
//                 //rej('sdf')
//             }, 1500)
//         });

//     })
//     .then(function(data): objectPerson {
//         data.server = 'no';
//         return data;
//     })
//     .then(function(data): void {
//         console.log(data);
//     })
//     .catch((err: string | number): void => {
//         if(typeof err === 'string') {
//             console.error(err);
//         } else {
//             console.error('Что-то пошло не так ' + err);
//         }
//     })
//     .finally((): void => {
//         console.log('Finally');
//     })

// // создать функцию инкрментации и добавить res() в ветвелние, посмотреть выполнит он следующую функцию или будет ждать.

// const sleep = (ms: number) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms)
//     })
// }

// sleep(300).then(() => console.log('Nope'));


// Promise.all([sleep(20), sleep(40)])
//     .then(() => {
//         console.log('After all promises');
//     })

// Promise.race([sleep(20), sleep(40)])
//     .then(() => {
//         console.log('Race promises');
//     })


/** PropertyDescriptors in JS */
const User = Object.create({
    //__id: 570,
}, {
    name: {
        value: 'Daniel',
        enumerable: true,
    },
    age: {
        value: 14,
    }
})

for(let k in User) {
    console.log(`Key: ${k},
                 Val: ${User[k]}`);
}

// console.log(User);

// const string: string = JSON.stringify(User);

// console.log(string);



const sleep = (ms: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    })
}


const urlAPI: string = `https://jsonplaceholder.typicode.com/todos/1` 

function fetchTodos() {
    console.log('Fetching is started');
    return sleep(2000)
        .then(() => {
            fetch(urlAPI).then(res => res.json())
        })
}

fetchTodos()
    .then(data => {
        console.log(`Data: ${data}`);
    })
    .catch(err => {
        console.error(err);
    })