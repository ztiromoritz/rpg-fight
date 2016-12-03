import mainTemplate from "./templates/main.hbs";

import Die from "./js/Die";
import "./css/style.css";



const playerDieA = new Die('playerDieA');
const playerDieB = new Die('playerDieB');
const opponendDieA = new Die('opponendDieA');
const opponendDieB = new Die('opponendDieB');

export default class RPGFight {
    constructor(options) {
        this.options = options;

        this.content = {
            playerDieA : playerDieA.renderHtml(),
            playerDieB : playerDieB.renderHtml(),
            opponendDieA : opponendDieA.renderHtml(),
            opponendDieB : opponendDieB.renderHtml()
        }
    }

    render(domNode) {
        if(domNode){
            domNode.innerHTML = mainTemplate(this.content);
        }
    }

    renderHtml(){
        return mainTemplate(this.content);
    }
}


var xAngle = 0,
    yAngle = 0;
document.addEventListener('keydown', function(e) {
    console.log(e.keyCode);

    if(49 <= e.keyCode && e.keyCode <= 54){
        playerDieA.setValue(e.keyCode - 48);
    }else if(e.keyCode === 32){
        playerDieA.roll();
        playerDieB.roll();
        opponendDieA.roll();
        opponendDieB.roll();
    }else{
        switch (e.keyCode) {

            case 37: // left
                yAngle -= 1;
                break;

            case 38: // up
                xAngle += 1;
                break;

            case 39: // right
                yAngle += 1;
                break;

            case 40: // down
                xAngle -= 1;
                break;
        };
        playerDieA.setAngles(xAngle, yAngle);
    }


}, false);
