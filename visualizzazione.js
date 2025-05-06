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

// Funzione di rendering del modello 3D
function render() {
	// Codice di rendering del modello 3D
	updateFPS(); // Aggiorna il contatore degli FPS
	requestAnimationFrame(render); // Richiama il rendering per il frame successivo
}

// Avvia il rendering
requestAnimationFrame(render); // Usa requestAnimationFrame per avviare il ciclo di rendering