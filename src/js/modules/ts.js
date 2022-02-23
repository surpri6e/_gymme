//! tsc -w Позволяет редактировать и компилировать файлы в прямом эфире.
//! tsc -t Позволяет по какому формату будет компилироваться ts файл.
//! tsc --outDir Позволяет задать папку для хранения, скомпилированных js файлов.
//? Комманда правильной компиляции => tsc -t ES6 --outDir ./src/js/modules -w ./src/js/ts/ts.ts
// import * as types from "./types.js";
import { fetchAsyncTodos, fetchAsyncPhotos } from './server.js';
import { getTitlesFromServerTodos, getDataFromServerTodos, reloadImageOnPage, getFullUrlPhotos } from './server.js';
import { isTouch } from './isTouch.js';
export const __URL__ = 'https://surpri6e.000webhostapp.com/';
/**
    Базовая функция, которую необходимо вызвать один раз в исходном коде главного JS файла.
    В данной функции вызваны, как и другие необходимые для корректной работы функции, так и прописан
    свой собственный функционал.
    Аргументов на вход не принимает.

    @version 1.0.0
    @license MIT
 */
export function mainDocumentSettings() {
    // console.error('mainDocumentSetting() is activated.');
    // window.open('https://sursy.000webhostapp.com', '.blank');
    eventsDocument();
    Promise.all([fetchAsyncTodos(), fetchAsyncPhotos()])
        .then(() => {
        console.log(getTitlesFromServerTodos());
    })
        .then(() => {
        console.log(getDataFromServerTodos());
    })
        .then(() => {
        reloadImageOnPage(177);
    })
        .then(() => {
        console.log(getFullUrlPhotos());
    });
    if (isTouch.any()) {
        document.body.classList.add('_Touch');
    }
    else {
        document.body.classList.add('_Pc');
    }
}
/**
    Дочерняя функция mainDocumentSettings().
    Содержит в себе все события и прослушивания, содержашиеся на странице.
    Аргументов на вход не принимает.
 */
export function eventsDocument() {
    activeHeaderMenuLink();
}
function activeHeaderMenuLink() {
    let headerMenuLinks = document.querySelectorAll('.menu__link');
    const activeHeaderMenuLink = 'menu__link--active';
    const mainHeaderMenuLink = headerMenuLinks[0];
    headerMenuLinks.forEach((el) => {
        let textInLink = (el.textContent) ? el.textContent.toLowerCase() : '';
        el.id = textInLink;
        el.href = `#${el.id}`;
    });
    if (location.href === __URL__ || location.href === __URL__ + '#') {
        mainHeaderMenuLink.classList.add(activeHeaderMenuLink);
        return;
    }
    const hashURL = `#${location.href.split('#')[1]}`;
    headerMenuLinks.forEach((el) => {
        if (hashURL === `#${el.id}`) {
            el.classList.add(activeHeaderMenuLink);
        }
    });
    return;
}
