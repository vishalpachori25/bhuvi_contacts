export interface Type{
    type: string;
    label: string;

}

export interface User{
    id:number;
    name: string;
    phoneNumber: string;
    description? : string;
    type: string;
}