var albumStorage = {

    "101": {
        "artist": "Avicii",
        "album": "True",
        "tracks": ["wake me up", "The days", "Hey brother"]
    },

    "hola": {
        "artist": "La Derecha",
        "album": "Polvo Eres",
        "tracks": ["El puñal", "Si te busco"]

    },
    "103": {
        "artist": "Stone Temple Pilots",
        "album": "Purple",
        "tracks": ["Plush", "Interstate love song"]

    },
    "104": {
        "artist": "Apache",
        "album": "Apa y Can",
        "tracks": ["Ready", "Stop"]

    }
};

var albumStorageCopy = JSON.parse(JSON.stringify(albumStorage));


function arrays(...theArgs) {
    let total = 0;
    for (let arr of theArgs) {
        total += arr;
    }
    return total;
}
console.log(arrays(2, 4, 6)); //output: 12

