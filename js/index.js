var container = document.getElementById('container-joker');
var jokerface = document.getElementById('jokerFace');
        
var onMouseEnterHandler = function(event) {
  update(event);
};
var onMouseLeaveHandler = function() {
  jokerface.style = "";
};
var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};

container.onmouseenter = onMouseEnterHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;

var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};

// Init
var container = document.getElementById('container-joker');
var jokerface = document.getElementById('jokerFace');
// Mouse 
var mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = (e.clientX - this._x) * -5;
    this.y = (e.clientY - this._y) * -2;
  },
  setOrigin: function(e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  },
  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}
// Track the mouse position relative to the center of the container.
mouse.setOrigin(container);

var update = function(event) {
  mouse.updatePosition(event);
  updateTransformStyle(
    (mouse.y / jokerFace.offsetHeight/2).toFixed(2),
    (mouse.x / jokerFace.offsetWidth/5).toFixed(5)
  );
};

var updateTransformStyle = function(x, y) {
  var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  jokerFace.style.transform = style;
  jokerFace.style.webkitTransform = style;
  jokerFace.style.mozTransform = style;
  jokerFace.style.msTransform = style;
  jokerFace.style.oTransform = style;
};