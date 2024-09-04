export interface Type{
    type: string;
    label: string;

}

export interface User{
    id:Int16Array;
    name: string;
    phoneNumber: string;
    description? : string;
}