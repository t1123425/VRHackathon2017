var rockWrapTop = document.querySelector('#rockWrapTop');
var rockWrapLeft = document.querySelector('#rockWrapLeft');
var rockWrapRight = document.querySelector('#rockWrapRight');
var rockWrapBottom = document.querySelector('#rockWrapBottom');
var rockCorner;
var rockwall;
var corner = 0;

document.querySelector('a-scene').addEventListener('render-target-loaded',function(){
  loadrockWall(rockWrapTop);
  loadrockWall(rockWrapLeft);

});

function loadrockWall(side){

  for(var i=0;i<15;i++){
      rockwall = document.createElement('a-dodecahedron');
      side.appendChild(rockwall);
      rockwall.setAttribute('src','#stone');
      rockwall.setAttribute('radius','6');
      rockwall.setAttribute('static-body','');
      rockwall.setAttribute('position','0 2 '+(i*5)+' ');
  }
}



// player position listener
// AFRAME.registerComponent('listener', {
//     tick: function () {
//       console.log(this.el.getAttribute('position'),'positon');
//     }
//   });