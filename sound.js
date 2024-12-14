const audioCtx=new (window.AudioContext || window.webkitAudioContext)();
const defDuration=2;
const gainStep=0.05

function playSound(frequency, duration=defDuration){
	const osc = audioCtx.createOscillator();
	const envelope = audioCtx.createGain();
	osc.connect(envelope);
	envelope.connect(audioCtx.destination);
	envelope.gain.setValueAtTime(0, audioCtx.currentTime);
	envelope.gain.linearRampToValueAtTime(gainStep, audioCtx.currentTime+gainStep);
	envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime+duration);
	osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
	osc.start();
	osc.stop(audioCtx.currentTime + duration);
}
