class Common {
    //counstuctor(name, yearOfFound){   Geez man, that took hours to debug
    constructor(name, yearOfFound){
        this.name = name;
        this.yearOfFound = yearOfFound;
    }
} 

class Park extends Common {

    constructor(name, yearOfFound, area, treeNums){
        super(name,yearOfFound);
        this.area = area;
        this.treeNums = treeNums;
    }

    treeDensity(){
        const density = Math.round(this.treeNums / this.area) ;
        console.log(`${this.name} has a tree density of ${density} trees per km^2`)
    }
}


class Street extends Common{
    constructor(name, yearOfFound, length1, size = 3){
        super(name, yearOfFound);
        this.length1 = length1;
        this.size = size;
    };

    streetSizer() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'YUGE');  
        console.log(`${this.name}, was built in ${this.yearOfFound}, is a ${classification.get(this.size)} street`)
    }
}  


const allParks = 
[
new Park('Green Park', 1900, 0.2, 21),
new Park('National Park', 1914, 2.9, 3541),
new Park('Botanical garden lol', 1491, 0.4, 949)
];


const allStreets = 
[
new Street('Ocean Avenue', 1999, 1.1, 4),
new Street('Evergreen Street', 2008, 2.7, 2),
new Street('Nice Street', 2100, 0.8),
new Street('Good street',2069,5, 5)
]


function calcuLate(values){
    const summation = values.reduce((prev, cur) => prev + cur, 0)    
    return [summation , summation / values.length]
}



function reportParks(park){

    console.log("-----------PARK REPORT --------------- <br>")

    //Density

    park.forEach(el => el.treeDensity());

    //Average Age
    const age = park.map(el => new Date().getFullYear() - el.yearOfFound);
    const [totalAge, avgAge] = calcuLate(age)
    console.log(`${park.length} is the length of the parks`)
    console.log(`${Math.round(avgAge)} is the avg year of the parks`)
    console.log(`${totalAge} is the combined year of the parks`)

    // Which park has more than 1000 trees?
    const indexter = park.map(el => el.treeNums).findIndex(el => el >= 1000)
    console.log(`${park[indexter].name} has so many trees!!`);

}


function reportStreets(s){

    console.log("-----------STREEt REPoRT --------------- <br>")

    const[totalLength, avgLength] = calcuLate(s.map(el => el.length1))
    //Total length and avg length of the town streets
    console.log(`${Math.round(totalLength)} is is kilometre the length of the streets`);
    console.log(`${Math.round(avgLength)} is avgs kms`);
   
    console.log(`${s.length} is the amount of streets`);
    //Classify Sizes

    s.forEach(el => el.streetSizer())

}



reportParks(allParks)
reportStreets(allStreets)








 