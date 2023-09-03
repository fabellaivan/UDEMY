
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details{
    author: string;
    year:number;
}
const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Promesas",
    details: {
        author: "Charly",
        year: 1988
    }
}
/***********************Arreglso con llaves***************** */
// const song= "newSong";
// const {song:anotherSong,
//     songDuration:duration,
//     details
//     } = audioPlayer;

// const{author:autor,year:year}=details;

// console.log(anotherSong,duration,autor,year);
// console.log('Song: ', song);
/***********************Arreglso con llaves***************** */

/***********************Arreglso con corchetes***************** */
// const dbz:string[]=['Goku','Vegeta','Trunks'];
// const trunks= dbz[3]||'No hay personaje';
// console.log('Personaje 3:',trunks);
const [p1,p2,trunks]:string[]=['Goku','Vegeta','Trunks'];

console.log('Personaje 3:',trunks);



export{};