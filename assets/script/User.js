'use strict';

class User {
    #id;
    _fullName;
    _userName;
    _email;

    constructor(id, fullName, userName, email) {
        this.#id = id;
        this._fullName = fullName;
        this._userName = userName;
        this._email = email;
    }

    get id() { return this.#id; }
    get fullName() { return this._fullName; }
    get userName() { return this._userName; }
    get email() { return this._email; }

    getInfo() {
        return `Name: ${this._name}\nUsername: ${this._userName}\nEmail: ${this._email}`;
      }
}

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, fullName, userName, email, pages, groups, canMonetize) {
        super(id, fullName, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() { return this.#pages; }
    get groups() { return this.#groups; }
    get canMonetize() { return this.#canMonetize; }

    getInfo() {
        return  `Name: ${this._fullName}\nUsername: ${this._userName}\nEmail: ${this._email} \nPages: ${this.#pages.join(', ')}
        \nGroups: ${this.#groups.join(', ')}\ncan Monetize: ${this.#canMonetize}`;
      }
}

export { User, Subscriber };