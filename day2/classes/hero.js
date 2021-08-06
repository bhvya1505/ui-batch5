import { Person } from './person.js';

export class Hero extends Person{
    firstname = "default firstname";
    lastname = "default lastname";
    _mission = "My Secret Mission";
    static version = 1001;
    constructor(fname, lname, ncity){
     super( ncity );
     this.firstname = fname;
     this.lastname = lname;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get mission(){
        return this._mission;
    }
    set mission(nmission){
        this._mission = nmission;
    }
 };