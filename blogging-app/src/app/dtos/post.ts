import { Creator } from "./creator";
export interface Post {
    id: number;
    title: string;
    content: string;
    likes: number;
    creator: Creator
}
