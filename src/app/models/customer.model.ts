class Customer{
    _id: string;
    name: string;
    address: string;
    age: number;
    imageUrl?: string;


    constructor(id: string, name: string, address: string, age: number, imageUrl?: string ){
        this._id = id;
        this.address = address;
        this.name = name;
        this.age = age;
        this.imageUrl = imageUrl;
    }
}
export default Customer;