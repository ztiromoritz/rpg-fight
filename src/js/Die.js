import dieTemplate from "../templates/die.hbs";
import styles from "../css/style.css";

function mod(x,y){
    return ((x%y)+y)%y
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default class Die {
    constructor(id) {
        this.id = id
        this.xangle = 0; //1 ~ 90deg ~ 1/4 rev
        this.yangle = 0;
        this.styles = styles;
    }

    renderHtml() {
        return dieTemplate(this);
    }

    render(domnode) {
        this.domnode = domnode;
        this.domnode.innerHTML = dieTemplate(this);
    }



    getValue() {
        const x = mod(this.xangle,4);
        const y = mod(this.yangle,4);
        const line = [2, 4, 5, 3];

        if (x === 0) {
            return line[y];
        }
        if (x === 1) {
            return 6;
        }
        if(x === 2){
            return line[(y+2)%4]
        }
        if (x === 3) {
            return 1;
        }
    }

    setValue(value){
        const targets = [
            [3,0],   // 1
            [0,0],   // 2
            [0,3],   // 3
            [0,1],   // 4
            [0,2],   // 5
            [1,0],   // 6
        ]
        const n = mod(value-1,6);
        const target = targets[n]
        const x = mod(this.xangle,4);
        const y = mod(this.yangle,4);
        const dx = target[0] - x + getRandomInt(2,5) * 4; //RandomInts for extra spinning
        const dy = target[1] - y + getRandomInt(2,5) * 4;

        this.setAngles(this.xangle + dx, this.yangle + dy);
    }

    roll() {
        this.setValue(getRandomInt(1,6));
    }

    setXAngle() {

    }

    setAngles(xangle, yangle) {
        this.xangle = xangle;
        this.yangle = yangle;
        var xDeg = xangle * 90;
        var yDeg = yangle * 90;

        var die = document.getElementById(this.id);

        if (die) {
            //console.log("coords", xangle, yangle, this.getValue());
            let decimal = getRandomInt(5,9);
            console.log(decimal);
            die.style.transition = `transform 0.${decimal}s ease-out`;
            die.style.transform = `rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
        }
    }

};
