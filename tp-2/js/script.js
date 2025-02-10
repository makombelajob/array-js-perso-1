let notes = [ 12, 65, 25, 19, 67, 98];
let noteMax = notes[0];
for ( let note of notes ) {
    if ( note > noteMax ) {
        noteMax = note ;
    }
}
console.log(`Type 1 : ${noteMax}`);

let noteMaxx = Math.max(...notes);
console.log(`Type 2 : ${noteMaxx}`);