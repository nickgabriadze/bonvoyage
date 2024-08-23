export type UserLogin = {
    email: string;
    password: string;
}


export type UserSignup = {
    first_name: string,
    last_name: string,
    user_type: 'User' | 'Driver'
    email: string,
    password: string
}
