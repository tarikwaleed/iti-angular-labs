import { Creator } from "./creator";
export class Post {
    constructor(public id: number, public title: string,
        public content: string,
        public likes: number,
        public creater: Creator) {
        //body

    }



}
