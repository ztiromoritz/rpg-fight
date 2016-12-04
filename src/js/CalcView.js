import Utils from "./Utils";
export default class PropsView {

  constructor(options) {
    this.options = options;
  }

  setPlayer(A,B,dex) {
    const addition = `${A} + ${B} + ${dex} = `;
    const sum = A + B + dex;
    Utils('.calc .player .sum')
      .setContent("")
      .setStyle('animation', 'fadeout 0s')

    Utils('.calc .player .addition')
      .setStyle('animation', 'fadeout 0s')
      .onAnimationEndOnce(
        () =>{
          Utils('.calc .player .addition')
            .setStyle('animation', 'fadein 1s')
            .setContent(addition)
            .onAnimationEndOnce(
               ()=>{
                Utils('.calc .player .sum')
                  .setStyle('animation', 'fadein 1s')
                  .setContent(sum);
                });
        }
      )
  }

  setEnemy(A, B, dex) {
    const sum = A + B + dex;
    const addition =  ` = ${A} + ${B} + ${dex}`;
    //Utils.setContent('.calc .enemy .addition', addition);
    //Utils.setContent('.calc .enemy .sum', sum) ;

      Utils('.calc .enemy .sum')
        .setContent("")
        .setStyle('animation', 'fadeout 0s')

      Utils('.calc .enemy .addition')
        .setStyle('animation', 'fadeout 0s')
        .onAnimationEndOnce(
          () =>{
            Utils('.calc .enemy .addition')
              .setStyle('animation', 'fadein 1s')
              .setContent(addition)
              .onAnimationEndOnce(
                 ()=>{
                  Utils('.calc .enemy .sum')
                    .setStyle('animation', 'fadein 1s')
                    .setContent(sum);
                  });
          }
        )
  }

}
