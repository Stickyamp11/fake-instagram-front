export interface UserAuthStateInterface{
    isLoading: boolean;
    isAuth: boolean;
    username: string;
    error: string | null;
}

export interface AppStateInterface{
    userAuth: UserAuthStateInterface;
}