export type UsersResponse = {
    data: User[];
}


export type User = {
    name: string;
    company: string;
    blog: string;
    location:string;
    created_at:string;
    avatar_url: string;
    public_repos: number;
    following: number;
    followers:number;

};