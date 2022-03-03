export const urlAPI = `https://jsonplaceholder.typicode.com/photos`;
export function reloadImageOnPage(i = 3000, data) {
    var _a, _b;
    const _image = document.querySelector('img[fromServer=""]');
    const fitnessImage = (_a = _image.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    let el;
    if (i && i > 0 && i < 5000) {
        el = data[i];
    }
    else {
        el = data[3000];
    }
    (_b = _image.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    fitnessImage.insertAdjacentHTML('beforeend', `<img src=${el.url} alt=${_image.alt} fromServer="true" "/>`);
}
