# RPG-Fight
A rgp fight plugin for HTML5 games.
Combat system is based on the simple system used in  choose your own adventure
books.


## Usage

```javascript
var fight = new RGPFight({duck : true,luck: true});

fight.addPlayer({dex: 6,hp: 20, luck: 20});
fight.addOpponent({dex: 7, hp: 8});

fight.onWin(function(player){
 //handle win
});

fight.onLost(function(player){
 //handle lost
});

fight.onRound(function(player, opponent){
 // after each round
});

fight.render(document.getElementById('fightDiv'));

fight.start();
```

## Development
```
 npm run dev    # Start dev server

 npm run build  # Build distribution

 npm run test   # Run tests
```

## Notes

SVG Animations:
 * http://slides.com/sarasoueidan/styling-animating-svgs-with-css--2#/7

CSS Animations:
 * https://github.com/tictail/bounce.js
 * http://visionmedia.github.io/move.js/
 * http://paulrhayes.com/2009-07/animated-css3-cube-interface-using-3d-transforms/

## License
The code created in this project is licensed under the [MIT License](./LICENSE)

Starter and webpack configuration for this project was taken from [here](https://github.com/krasimir/webpack-library-starter) which i licensed under this
[original license](./ORIGINAL_LICENSE)
