class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}ritesh`
    }

    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const ritesh = new User("ritesh@gmail.com", "abc")
console.log(ritesh.password);
console.log(ritesh.email);

