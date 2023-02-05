export default class Team {
    constructor () {
        this.members = new Set();
    };


    add (object) {
        if (this.members.has(object)) {
            throw new Error ("this character already exist in team")
        }
        this.members.add(object);
        return this.members
    };

    addAll (...objects) {
        for (const item of objects) {
            this.members.add(item);
        };
        return this.members
    };

    toArray () {
        this.members = Array.from(this.members);
        return this.members
    };
}