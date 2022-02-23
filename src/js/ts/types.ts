// НЕ ДЛЯ ИСПОЛЬЗОВАНИЯ В JS ФОРМАТЕ


//! Types and interfaces


export type TServerStatus = 'active' | 'working' | 'not working';


/**
    @example
    interface IPersonForServerRequest {
        name: string;
        age: number;
        job: string;
        oldValues?: string[];
        server?: string;
        status?: serverStatus; 
    }
 */
export interface IPersonForServerRequest {
    name: string;
    age: number;
    job: string;
    oldValues?: string[];
    server?: string;
    status?: TServerStatus; 
}
export interface IAllUsedHTMLElements {
    [key: string]: Element;
}

/**
    @example
    interface IUserTodos {
        completed: boolean;
        id: number;
        title: string;
        userId: number;
    }
 */
export interface IUserTodos {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

export interface IUserTodosRemastered {
    [key: number]: boolean;
}


export interface IUserPhotos {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

// {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },
