// Calcolo degli FPS

let lastFrameTime = performance.now();
let fps = 0;

function updateFPS() {
	const now = performance.now();
	const delta = now - lastFrameTime;
	fps = Math.round(1000 / delta);
	lastFrameTime = now;

	const fpsCounter = document.getElementById('fps-counter');
	if (fpsCounter) {
		fpsCounter.textContent = `FPS: ${fps}`;
	}
}

// Durante il rendering del modello 3D, chiama updateFPS
function render() {
	updateFPS();
	requestAnimationFrame(render);
}

// Avvia il rendering
render();