import { Comment } from "./comment";

export class Blog {
    constructor(
                // tslint:disable-next-line:variable-name
                public _id: string,
                public title: string ,
                public auther: string,
                public comments?:Comment[],
                public image?: string,
                public createdAt?: Date,
                public body?: string,
                public tages?: string[],

                ){}
}
