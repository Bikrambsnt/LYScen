// The func is used for cleaning unnecessary texts from song,artists name
export function cleanSongName(name){

    if(!name) return;

const text = document.createElement('textarea')

text.innerHTML = name;
const refineValue = text.value;
return refineValue.replace(/\s*\.*?\\s*/g,"").trim();

}