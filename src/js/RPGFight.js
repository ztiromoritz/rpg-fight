import Die from "./Die";
import PropsView from "./PropsView";
import CalcView from "./CalcView";
import mainTemplate from "../templates/main.hbs";

const playerDieA = new Die('playerDieA');
const playerDieB = new Die('playerDieB');
const enemyDieA = new Die('enemyDieA');
const enemyDieB = new Die('enemyDieB');


function clone(object){
  return JSON.parse(JSON.stringify(object))
}


export default class RPGFight {
    constructor(options) {
        this.options = options;
        this.props = new PropsView(  options );
        this.calc = new CalcView( options );
        this.player = clone(options.player);
        this.enemy = clone(options.enemy);

        this.content = {
            playerDieA : playerDieA.renderHtml(),
            playerDieB : playerDieB.renderHtml(),
            enemyDieA : enemyDieA.renderHtml(),
            enemyDieB : enemyDieB.renderHtml(),
            player : options.player,
            enemy: options.enemy
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

    roll(){
      const pA = playerDieA.roll();
      const pB = playerDieB.roll();
      const eA = enemyDieA.roll();
      const eB = enemyDieB.roll();

      this.calc.setPlayer( pA, pB , this.player.dex );
      this.calc.setEnemy(  eA, eB, this.enemy.dex );
    }
}
