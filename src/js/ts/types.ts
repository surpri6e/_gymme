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