
const skills:string[] = ['Bash','Counter','Healing'];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    homtown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp : 100,
    skills:['Bash','Counter']
};



strider.homtown = 'Rivendell';
console.log(strider);
console.table(strider);





export{}