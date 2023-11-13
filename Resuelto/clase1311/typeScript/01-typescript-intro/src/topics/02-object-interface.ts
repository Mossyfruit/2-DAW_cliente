export {}

let skills: string[]= ['Bash','Counter','Healing'];

interface Personaje{
    name: string,
    hp: number,
    skills: string[],
    homeTown?: string
};

const strider: Personaje = {
    name:"Strider",
}