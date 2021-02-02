//class in javascript
class Artist {

    //constructor
    constructor(name, age, genre, label){
        this.name = name 
        this.age = age
        this.genre = genre
        this.label = label
        this.albums = []
        this.songs = []
        this.image = ''
        this.instagram = null
    }

    addAlbum(album){
        this.albums.push(album)
        console.log(`This is another ${album} for ${this.name}`)
    }

    addSong(song){
        this.songs.push(song)
        console.log(`This is another ${song} for ${this.name}`)
    }

    addImage(imageLink){
        this.image = imageLink
    }

    addIG(username){
        this.instagram = username
    }
}

//instance of object
const davido = new Artist('Davido', '30', 'hiphop', 'cash money record')
davido.addAlbum('A Good Time') 
davido.addAlbum('Omo Baba Olowo')
], ['1 Milli', 'Get to You'], '')
const drake = new Artist('Drake', '33', 'hiphop', 'cash money records')
const hozier = new Artist('Hozier', '34', 'Rock', 'cash money records')
const carlCox = new Artist('Carl Cox', '30', 'House', 'cash money records')



// look up an artist
// find 2 albums and add those albums
// find 2 songs and add those songs
// find an image and copy the image url, add image
// find their IG username and add username


//David Adedeji Adeleke (born November 21, 1992), 
//popularly known as Davido
//A Good Time, - "1 Milli", "Get to You"
//Omo Baba Olowo - "Bless Me", "All of You"

//https://www.rollingstone.com/music/music-features/davido-endsars-better-time-interview-1084079/

https://www.instagram.com/davidhandlermusic/?hl=en