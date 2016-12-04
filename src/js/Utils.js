class Utils {

    //Powered by http://youmightnotneedjquery.com/

    constructor(selector){
      this.element = document.querySelector(selector);
    }

    static Node(selector){

    }

    setContent(value){
      this.element.innerHTML = value;
      return this;
    }

    setStyle(key, value){
      this.element.style[key] = value;
      return this;
    }

    onAnimationEndOnce(fn){
      var onEnd = ()=>{
          this.element.removeEventListener('animationend', onEnd);
          if(fn){
            fn();
          }
      }
      this.element.addEventListener('animationend', onEnd);
      return this;
    }



    static setContent(selector, value) {
        var element = document.querySelector(selector);
        element.innerHTML = value;
    }

    static setAll(selector, value) {
        var elements = document.querySelectorAll(selector);
        Array.prototype.forEach.call(elements, function (el, i) {
            el.innerHTML = value;
        });
    }

};

export default function(selector){
    return new Utils(selector);
}
