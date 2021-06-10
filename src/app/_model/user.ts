import { Blog } from './blog';

export class User {

    constructor(
        public _id:string,
        public username: string,
        public password: string,
        public firstname: string,
        public token: string,
        public image?: string,
        public Blogs?: Blog[],
        public Following?: string[],
        public Followers?: string[]
        ) {
    }
}
