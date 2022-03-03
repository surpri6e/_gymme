import { IUserPhotos } from './types.js';

export const urlAPI: string = `https://jsonplaceholder.typicode.com/photos`;

export function reloadImageOnPage(i: number = 3000, data: IUserPhotos[]): void {
    const _image = document.querySelector('img[fromServer=""]') as HTMLImageElement;
    const fitnessImage = _image.parentElement?.parentElement as HTMLElement;

    let el;

    if(i && i > 0 && i < 5000) {
        el = data[i] as IUserPhotos;
    } else {
        el = data[3000] as IUserPhotos;
    }

    _image.parentElement?.remove();


    fitnessImage.insertAdjacentHTML('beforeend', `<img src=${el.url} alt=${_image.alt} fromServer="true" "/>`);
}