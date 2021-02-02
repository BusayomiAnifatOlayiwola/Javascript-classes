//class
class classmate {

    //constructor
    constructor(name){
        this.name = name
    }
    
    //method with param
    study(name){
        console.log(`I learn function from ${name}`)
    }
}
//instantance
const mate = new classmate('swati')


//passing param to the method
mate.study("swati")

