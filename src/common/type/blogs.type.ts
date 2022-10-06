export interface Blog {
    id: string;
    title: string;
    text: string;
    date: string;
    likes: number;
    hashtags: string[];
}

export interface BlogStub {
    title: string;
    text: string;
    hashtags: string[];
}