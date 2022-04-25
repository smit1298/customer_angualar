class Customer{
    id: string;
    name: string;
    address: string;
    age: number;


    constructor(id: string, name: string, address: string, age: number ){
        this.id = id;
        this.address = address;
        this.name = name;
        this.age = age;
    }
}
export default Customer;