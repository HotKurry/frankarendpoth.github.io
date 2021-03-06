// Frank Poth 05/01/2018

(() => {

  var context = document.getElementById("main-canvas").getContext("2d");

  var tile_size = 8;

  var height = undefined;
  var width  = undefined;

  function checkForResize() {

    window.requestAnimationFrame(checkForResize);

    if (height != context.canvas.clientHeight || width != context.canvas.clientWidth) resize();

  }

  function resize() {

    height = context.canvas.height = context.canvas.parentElement.clientHeight;
    width  = context.canvas.width = context.canvas.parentElement.clientWidth;

    var columns = Math.ceil(context.canvas.width  / tile_size);
    var rows    = Math.ceil(context.canvas.height / tile_size);

    var offset_x = Math.round((columns * tile_size - context.canvas.width)  * 0.5);
    var offset_y = Math.round((rows    * tile_size - context.canvas.height) * 0.5);

    for (let column = 0; column < columns; column ++) {

      for (let row = 0; row < rows; row ++) {

        var color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"

        context.fillStyle = color;
        context.fillRect(column * tile_size - offset_x, row * tile_size - offset_y, tile_size, tile_size);

      }

    }

  }

  checkForResize();

})();
