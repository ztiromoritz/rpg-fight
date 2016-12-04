import styles from "../css/style.css";
console.log(styles);
export default class PropsView {

  constructor(options){
    this.options = options;
    console.log(options);
    this.player = {};
    this.player.hp = options.player.hp;
  }



  changePlayerHP( inc ){
    this.player.hp += inc;
    console.log("change",  this.player.hp )
    this.setPlayerHPView(  this.player.hp );
  }

  setPlayerHPView(value){
    console.log("ddd",value);
    var elements = document.querySelectorAll('.props .player .hp');
    Array.prototype.forEach.call(elements, function(el, i){
      console.log(el);
      el.innerHTML = value;
    });
  }





}
