console.log("this works");

const btn = document.querySelector("start");
let score = document.querySelector("score");

score = 0;
const timeUp = false;

const randomTime=(minPeep, maxPeep) => {
    // const minPeep = 200;
    // const maxPeep = 1000;
    let randTime = Math.floor((Math.random()*(maxPeep-minPeep))+minPeep);

    return randTime;
}

let randomPeep = randomTime(200, 1000);
console.log(randomPeep);

const randomHoles=(holes)=>{
    let randHole = Math.floor(Math.random()*holes+1);
    return randHole;
}

let randomHole = randomHoles(6);
console.log(randomHole);


