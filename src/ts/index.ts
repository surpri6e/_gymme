
import * as types from './types.js'
import { reloadImageOnPage, urlAPI } from './server.js';
import { isTouch } from './isTouch.js';
import { XHRServerRequest } from 'server-requests/lib/index.js';

let __photos__: types.IUserPhotos[];
/** 
    Базовая функция, которую необходимо вызвать один раз в исходном коде главного JS файла.
    В данной функции вызваны, как и другие необходимые для корректной работы функции, так и прописан
    свой собственный функционал.
    Аргументов на вход не принимает.

    @version 1.0.0
    @license MIT
 */
export function mainDocumentSettings(): void {
    eventsDocument();

    XHRServerRequest({
        _urlServer: urlAPI,
        _method: 'GET',
        _responseType: 'json',
    })
    .then((data: types.IUserPhotos[]) => {
        __photos__ = data;
        console.log(__photos__);
        reloadImageOnPage(4555, data);
    })

    if(isTouch.any()) {
        document.body.classList.add('_Touch');
    } else {
        document.body.classList.add('_Pc');
    }
}

/**
    Дочерняя функция mainDocumentSettings().
    Содержит в себе все события и прослушивания, содержашиеся на странице.
    Аргументов на вход не принимает.
 */
export function eventsDocument(): void {
    activeHeaderMenuLink();
}


function activeHeaderMenuLink(): void {
    let headerMenuLinks = document.querySelectorAll('.menu__link') as NodeListOf<HTMLAnchorElement>;
    const activeHeaderMenuLink: string = 'menu__link--active'; 
    const mainHeaderMenuLink = headerMenuLinks[0] as HTMLAnchorElement;

    headerMenuLinks.forEach((el: HTMLAnchorElement) => {
        let textInLink: string = (el.textContent) ? el.textContent.toLowerCase() : '';
        el.id = textInLink;
        el.href = `#${el.id}`;
    })

    if(location.href === 'work' || location.href === 'work' + '#') {
        mainHeaderMenuLink.classList.add(activeHeaderMenuLink);
        return;
    }

    const hashURL: string = `#${location.href.split('#')[1]}`;

    headerMenuLinks.forEach((el: HTMLAnchorElement) => {
        if(hashURL === `#${el.id}`) {
            el.classList.add(activeHeaderMenuLink);
        }
    })

    return;
} 