import { useState } from "react";

class Pet {
    name: string;
    age: number;
    static totalPets = 0
    constructor(petData: petData) {
        this.name = petData.name;
        this.age = petData.age;
    }

    interact() {
        return `${this.name} is happy to see you!`;
    }
    checkAge() {
        return `${this.name} is ${this.age}yrs old`;
    }
}

class PetBox {
    totalPets = 0;
    pets: petData[];
    key: string;
    constructor(key: string) {
        this.pets = this.#load(key) || [];
        this.addPet = this.addPet.bind(this);
        this.key = key;
    }
    #save(data: unknown) {
        try {
            localStorage.setItem(this.key, JSON.stringify(data));
            return true;
        } catch {
            console.error("The data couldn't be stored to local storage");
            return false;
        }
    }
    #load(key: string) {
        if (!key) return;
        try {
            const data = localStorage.getItem(key);
            if (data) {
                return JSON.parse(data);
            }
        } catch {
            console.error('The key for using the storing and loading from local storage is missing');
            return false;
        }
    }

    addPet(petData: petData): boolean {
        try {
            const pet = new Pet(petData);
            this.pets.push(pet);
            this.totalPets++;
            this.#save(this.pets);
            return true;
        } catch {
            return false;
        }
    }
}

interface petData {
    name: string;
    age: number;
}


export default function Pets() {
    const playGround = new PetBox('petbox-key');
    const { pets, addPet } = playGround;
    const [petData, setPetData] = useState<petData[]>(() => pets);

    const handleAddPet = () => {
        const newPet = { name: 'car', age: 2 };
        if (addPet(newPet)) {
            setPetData([...pets]);
        }
    };

    return (
        <section>
            {
                petData.map((pets, i) => {
                    return (
                        <div key={pets.age + i}>
                            <h1>{pets.name}</h1>
                            <h2>{pets.age}</h2>
                        </div>
                    )
                })
            }
            <button onClick={handleAddPet}>Add pet</button>
        </section>
    )
}

function Terminal() {

}

/*
*Learnt... that if we use 'this' inside a normal function it is not pointing to a fixed 'this'
*the leftmost object thats calling the method/function becomes the 'this' inside the function

 for example
     function name(){
        console.log(this.name);
        }
     name();

 since there is no object calling this function 'this' for this function is always undefined,

    const object = {name:name()}

 but if we do object.name() it will run successfully.

 the way it works is- object that is calling the function (like a method) becomes the 'this' inside the function;
 what heppens when the function is not called by an object but there is an object to the very start of the call chain?
 * call chain... i mean this thing obj.method.methon or obj.property.method etc

 like obj.method.methond() here the 'this' refers to the leftmost object that is calling the function
 but if it was called like object1.object2.method 'this' will now refer to the left object calling it for this one it is object2 not object 1

* we can also change the 'this' for the function by using builtin methods like call,apply or bind
 call takes the 'single' object as 'this' and any single args/parameters for the function like
 obj.method.call(this,para)

 while apply can take multiple args/parameters
 obj.method.apply(this,[para,para]);

 bind is similar too it binds the object as 'this' permanently for the function
 obj.method.bind(this,para);

 !but this is only true for simple functions not arrow functions

 in arrow functions the 'this' is not determined by call chain at the site of calling. it ignores them
 instead it uses its parents 'this' or where its being called.

 example
    function(para){
    this.name = para;
        sec = ()=>{
        console.log(this.name);
        }
    }
 the 'this' for the arrow function is the this for the outer function.

  */