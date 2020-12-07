function setup() {
  noCanvas();
  let r = floor(random(5))
  let img = createImg(`../imgs/img${r}.jpg`);
  img.style('object-fit', 'cover');
  img.style('width', '100%');
  img.style('height', '100%');
  
  let div = createDiv();
  div.style('overflow', 'hidden');
  div.style('width', '100%');
  div.style('height', '100%');
  div.position(0, 0);
  img.parent(div)
}