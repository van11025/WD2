export class Todo{
    constructor(content){
        this.id = Date.now();
        this.content = content;
        this.check = false;
    }
};