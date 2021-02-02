class Person {


    constructor(name, softwareEngineer){
        this.arms =2
        this.legs = 2
        this.name = name
        this.softwareEngineer =softwareEngineer
        this.artists = []
    }
    //method of class
    greeting(){
        console.log('Hello SEI-111')
    }

    walk(){
        console.log('walking along the beach')
    }

    //method with parameter
    eat(food){
        console.log(`Today, i am eating ${food}`)
    }

    addArtist(artist){
        console.log(`I lke ${artist}`)
        this.artists.push(artist)
    }
}


//instantance of a class - known as OBJECT
//new - means creating new object
const princeLeo = new person('LeoBrooks', true)


//print attributes
console.log(princeLeo.name)
console.log(princeLeo.softwareEngineer)

//calling the method of the class(invoke)
princeLeo.walk()
princeLeo.eat('Dinosour Chicken Nuggets')

//another method can be made by individual
//adding method on a instance
princeLeo.jump=()=>{
    console.log('wooooooo')
}

princeLeo.dance = function(){
    console.log('disco')
}

princeLeo.jump()
princeLeo.addArtist('Rico Nasty')
princeLeo.addArtist('yeye')

//view the attribute
console.log(princeLeo.artists)