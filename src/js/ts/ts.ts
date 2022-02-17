//! tsc -w Позволяет редактировать и компилировать файлы в прямом эфире.
//! tsc -t Позволяет по какому формату будет компилироваться ts файл.
//! tsc --outDir Позволяет задать папку для хранения, скомпилированных js файлов.

//? Комманда правильной компиляции => tsc -t ES6 --outDir ./src/js/modules -w ./src/js/ts/ts.ts

export let num: number = 5;
export interface test {
    name: string;
}