import React from 'react'
import './App.css'
import Card from './Card.jsx'
import NavBar from './NavBar'
import { useState } from 'react'


export default function App() {

    const [index, setIndex] = useState(0)

    function nextClick() {
        index === myObject.length - 1 ? setIndex(0) : setIndex(index + 1)
    }
    function backClick() {
        index === 0 ? setIndex(myObject.length - 1) : setIndex(index - 1)

    }
    return (
        <div className='main-container'>
            <NavBar nextClick={nextClick} backClick={backClick} />
            <Card sayayin={myObject[index]} />
        </div>
    )
}


const myObject = [{
    id: 1,
    imageLink: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.L_lMHXoVmi9VdajryfIGOgHaLx%26pid%3DApi&f=1&ipt=eba33b24a9ccc0139473b004a8b1b88fe14997f8bf706501e84753f0ba1285d3&ipo=images',
    imageName: 'Goku',
    quote: 'Kame hame ha!',
    isSayayin: true
}, {
    id: 2,
    imageLink: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJyLlUXgYg0fGC_JmVLJqZVGeVmW53eV_jE05w%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=65d71c84bbc0f284b7fd9cacaa6ee9ada18b8e14d192e82edbd9bcb9df3f8dbd&ipo=images',
    imageName: 'Piccolo',
    quote: 'Masenko',
    isSayayin: false
}, {
    id: 3,
    imageLink: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fdragonballzuniverse%2Fimages%2F5%2F5e%2FGohan%252C_the_dude.jpg%2Frevision%2Flatest%3Fcb%3D20190316033742&f=1&nofb=1&ipt=003febf401731325d7f3deb46024bdde6a16eb4e29181221570aa15514a636a0&ipo=images',
    imageName: 'Gohan',
    quote: 'Masenko San Pho',
    isSayayin: true

}, {
    id: 4,
    imageLink: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oIwBK0R8IA0l-o8zS7RNbgHaD5%26pid%3DApi&f=1&ipt=2f9cdaaf46255856a8dad1d7aa984b04ac59bebfad20b4f8aeffa41b5e05e586&ipo=images',
    imageName: 'Vegetta',
    quote: 'Sunblast',
    isSayayin: true
}, {
    id: 5,
    imageLink: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette1.wikia.nocookie.net%2Fdragonballrelated%2Fimages%2F0%2F03%2FFutureTrunksSitting.png%2Frevision%2Flatest%3Fcb%3D20110920225841&f=1&nofb=1&ipt=185cc6d105e7c0d0205cccdbdf1c7e371d787e14bb5791b38a7c2a7f302925a3&ipo=images',
    imageName: 'Trunks',
    quote: 'Outburst',
    isSayayin: true
}]