// НЕ ДЛЯ ИСПОЛЬЗОВАНИЯ В JS ФОРМАТЕ

import { IUserTodos, IUserTodosRemastered, IUserPhotos } from './types';

const sleep = (ms: number): Promise<number>  => {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
};

/**
    URL link of my API
 */
export const urlTodos: string = `https://jsonplaceholder.typicode.com/todos`;
let __DATA_TODOS__: IUserTodos[];

export const urlPhotos: string = `https://jsonplaceholder.typicode.com/photos`;
let __DATA_PHOTOS__: IUserPhotos[];

/**
    @example
    export async function fetchAsyncTodos() {
        try {
            console.log('Fetching is started');
            await sleep(1000);
            const res = await fetch(urlAPI);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        } finally {
            console.log('Finally');
        }
    }
 */

export async function fetchAsyncTodos() {
    try {
        console.log('Fetching TODOS is started');
        await sleep(1000);
        const res = await fetch(urlTodos);
        __DATA_TODOS__ = await res.json();
    } catch (err) {
        console.error(err);
    } finally {
        console.log('Finally');
    }
}

/**
    @example
    export async function fetchAsyncPhotos() {
        try {
            console.log('Fetching PHOTOS is started');
            await sleep(3000);
            const res = await fetch(urlPhotos);
            __DATA_PHOTOS__ = await res.json();
        } catch (err) {
            console.log(err);
        } finally {
            console.log('Finally');
        }
    }
 */

export async function fetchAsyncPhotos() {
    try {
        console.log('Fetching PHOTOS is started');
        await sleep(5000);
        const res = await fetch(urlPhotos);
        __DATA_PHOTOS__ = await res.json();
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Finally');
    }
}

export function getFullUrlPhotos() {
    let tempArray: string[] = [];
    const thoseArrayUrls: Array<string[]> = [];
    let _alb = 0;

    // Бесконечный цикл
    for(let i: number = 0; i < __DATA_PHOTOS__.length - 5; i++) {
        if(i % 50 === 0) {
            thoseArrayUrls.push(tempArray);
            tempArray = [];
        }
        const el = __DATA_PHOTOS__[i] as IUserPhotos;
        tempArray.push(el.thumbnailUrl);
    }

    return thoseArrayUrls;
}


export function reloadImageOnPage(i?: number) {
    const _image = document.querySelector('img[fromServer=""]') as HTMLImageElement;
    const fitnessImage = _image.parentElement?.parentElement as HTMLElement;

    let el;

    if(i && i > 0 && i < 5000) {
        el = __DATA_PHOTOS__[i] as IUserPhotos;
    } else {
        el = __DATA_PHOTOS__[3000] as IUserPhotos;
    }

    _image.parentElement?.remove();


    fitnessImage.insertAdjacentHTML('beforeend', `<img src=${el.url} alt=${_image.alt} fromServer="true" "/>`);
}

export function getTitlesFromServerTodos() {
    const _titles: string[] = [];

    __DATA_TODOS__.forEach(el => {
        _titles.push(el.title);
    })

    return _titles;
}

export function getDataFromServerTodos() {
    const _objectRem: IUserTodosRemastered[] = [];
    
    __DATA_TODOS__.forEach(el => {
        const tempObj: IUserTodosRemastered = {};
        tempObj[el.userId] = el.completed;

        _objectRem.push(tempObj)
    })
    
    return _objectRem;
}

