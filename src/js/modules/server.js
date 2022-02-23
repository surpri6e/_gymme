// НЕ ДЛЯ ИСПОЛЬЗОВАНИЯ В JS ФОРМАТЕ
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
};
/**
    URL link of my API
 */
export const urlTodos = `https://jsonplaceholder.typicode.com/todos`;
let __DATA_TODOS__;
export const urlPhotos = `https://jsonplaceholder.typicode.com/photos`;
let __DATA_PHOTOS__;
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
export function fetchAsyncTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Fetching TODOS is started');
            yield sleep(1000);
            const res = yield fetch(urlTodos);
            __DATA_TODOS__ = yield res.json();
        }
        catch (err) {
            console.error(err);
        }
        finally {
            console.log('Finally');
        }
    });
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
export function fetchAsyncPhotos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Fetching PHOTOS is started');
            yield sleep(5000);
            const res = yield fetch(urlPhotos);
            __DATA_PHOTOS__ = yield res.json();
        }
        catch (err) {
            console.log(err);
        }
        finally {
            console.log('Finally');
        }
    });
}
export function getFullUrlPhotos() {
    const thoseArrayUrls = [];
    return thoseArrayUrls;
}
export function reloadImageOnPage(i) {
    var _a, _b;
    const _image = document.querySelector('img[fromServer=""]');
    const fitnessImage = (_a = _image.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    let el;
    if (i && i > 0 && i < 5000) {
        el = __DATA_PHOTOS__[i];
    }
    else {
        el = __DATA_PHOTOS__[3000];
    }
    (_b = _image.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    fitnessImage.insertAdjacentHTML('beforeend', `<img src=${el.url} alt=${_image.alt} fromServer="true" "/>`);
}
export function getTitlesFromServerTodos() {
    const _titles = [];
    __DATA_TODOS__.forEach(el => {
        _titles.push(el.title);
    });
    return _titles;
}
export function getDataFromServerTodos() {
    const _objectRem = [];
    __DATA_TODOS__.forEach(el => {
        const tempObj = {};
        tempObj[el.userId] = el.completed;
        _objectRem.push(tempObj);
    });
    return _objectRem;
}
