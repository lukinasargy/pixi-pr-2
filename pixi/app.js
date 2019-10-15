let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
	type = "canvas"
}
PIXI.utils.sayHello(type);


//Create a Pixi Applivcation
let app = new PIXI.Application({
	width: 256,
	height: 256,
	transparent: false,
	resolution: 1
});
//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//canvas autoresize to window size
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoDensity = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.backgroundColor = 0x015552;
//app stage object

//let texture = PIXI.utils.TextureCache["../images/unicorn-sprite.png"];
//let sprite = new PIXI.Sprite(texture);

//PIXI.loader
//	.add('../images/unicorn-sprite.png')
//	.load(setup);
//function setup() {
//	//This code will run when the loader has finished loading the image
//
//}

const loader = PIXI.Loader.shared;
const sprites = {};

loader
	.add('unicorn', '../images/unicorn-sprite.png');
loader.load((loader, resources) => {
	//setup function when the assets are loaded
	sprites.unicorn = new PIXI.TilingSprite(resources.unicorn.texture);
	app.stage.addChild(sprites.unicorn);
	sprites.unicorn.width = 150;
	sprites.unicorn.height = 120;
	let rect = new PIXI.Rectangle(0,0,150,120);
	animate();
});
requestAnimationFrame(animate);
function animate() {
	 app.renderer.render;
	requestAnimationFrame(animate);

}