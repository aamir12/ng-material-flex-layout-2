export interface Customer {
    id?: string;
    name: string;
    email: string;
    phone: string;
    status: boolean
}

export interface Country{
    code:string,
    name:string
}

export interface Response<T>  {
    data:T
}