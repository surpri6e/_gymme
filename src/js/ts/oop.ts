interface IElements<T> {
    _tag: string;
    _text: string,

    _className: string;
    _ID: string;

    _styles: T;

    create(): void;
    delete(): void;
    changeStyles(el: T): void;

    
    // addText(): void;
    // addTextInElement(): void;
}

interface IStylesCSS {
    [key: string]: string | number;
}

// function 

//! сделать свой создатель тегов и стилей через прототипы и интерфейсы с классами

class Elements implements IElements<IStylesCSS> {
    private _tag: string;
    private _text: string;
    private _className: string;
    private _ID: string;

    private _Element: Element;


    constructor(_tag: string, _text: string) {
        this._tag = _tag;
        this._text = _text;
    }

    private create() {
        
    } 

    // ====================
    public addClassName(className: string): void {
        this._Element.classList.add(className);
    }

    public removeClassName(className: string): void {
        this._Element.classList.remove(className);
    }


    public addID(id: string): void {
        this._Element.id = id;
    }

    public removeID(): void {
        this._Element.id = '';
    }
    // ====================
    
    public set setTag(newTag: string) {
        this._tag = newTag;
    }
    
    public get getTag(): string {
        return this._tag;
    }


    public set setText(newText: string) {
        this._text = newText;
    }
    
    public get getText(): string {
        return this._text;
    }
}