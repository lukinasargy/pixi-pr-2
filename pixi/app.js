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


const loader = PIXI.Loader.shared;
const sprites = {};
let moving = false;
loader
	.add('unicorn', '../images/unicorn-sprite.png');
loader.load((loader, resources) => {
	//setup function when the assets are loaded
	app.stage.interactive = true;

	let rect = new PIXI.Rectangle(0, 0, 150, 120);
	sprites.unicorn = new PIXI.TilingSprite(resources.unicorn.texture);
	sprites.unicorn.texture.frame = rect;
	sprites.unicorn = new PIXI.Sprite(sprites.unicorn.texture);
	sprites.unicorn.y = app.view.height/2;
//	sprites.unicorn.height = 120;

	let idle = setInterval(function () {
		if (rect.y >= 120) {
			rect.y = 0;
			sprites.unicorn.texture.frame = rect;
		} else {
			rect.y += 120;
			sprites.unicorn.texture.frame = rect;
		}
	}, 500);

	app.stage.addChild(sprites.unicorn);
	animate();
});
requestAnimationFrame(animate);

function animate() {
	requestAnimationFrame(animate);
	app.renderer.render;
}


//adding key listeners
var rightPressed = false;
var leftPressed = false;

window.addEventListener('keydown', keyDownHandler, false);
//window.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
	e.preventDefault();
	if ((e.key == "Right" || e.key == "ArrowRight") && (sprites.unicorn.x <= (app.view.width - sprites.unicorn.width))) {
		moving = true;
		sprites.unicorn.x += 10;

	} else if ((e.key == "Left" || e.key == "ArrowLeft") && (sprites.unicorn.x >= 0)) {
		moving = true;
		sprites.unicorn.x -= 10;
	} else if ((e.key == "Up" || e.key == "ArrowUp") && (sprites.unicorn.y >= 0)) {
		moving = true;
		sprites.unicorn.y -= 10;
	} else if ((e.key == "Down" || e.key == "ArrowDown") && (sprites.unicorn.y <= (app.view.height - sprites.unicorn.height))) {
		moving = true;
		sprites.unicorn.y += 10;
	} else {
		moving = false;
	}
//	if (moving) {
//
//	}
}

//function keyUpHandler(e) {
//	e.preventDefault();
//};
