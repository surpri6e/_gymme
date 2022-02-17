interface IPrototype {
    isValid(obj: object): boolean;
}

const prototype: IPrototype = {
    isValid(obj: object): boolean {
        let arrKeys: string[] = Object.keys(obj);
        if(arrKeys.length === 0) {
            throw new Error('This object hasn\'t keys!');
        }
        let isValid: boolean = arrKeys.some(el => el === 'name');
        if(isValid) return true;
        return false;
    }
}

const obj: object = Object.create(prototype);

export { obj };

