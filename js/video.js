var video;


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	
	video = document.getElementById('player1');

	const playButton = document.querySelector('#play');
	playButton.addEventListener('click', function() {
		// code to execute when play button is clicked
		if (video.paused) {
			video.play();
		}
	});
	
	const pauseButton = document.querySelector('#pause');
	pauseButton.addEventListener('click', function() {
	  // code to execute when pause button is clicked
	  if (!video.paused) {
		    video.pause();
	  }
	});
	
	const slowerBtn = document.querySelector('#slower');
	const slowerOrFasterRate = 0.9
	slowerBtn.addEventListener('click', function() {
		// decrease the playback rate by slowerOrFasterRate
		video.playbackRate = slowerOrFasterRate * video.playbackRate;
		console.log("New playback rate: " + video.playbackRate);
	});

	const fasterBtn = document.querySelector('#faster');
	fasterBtn.addEventListener('click', function() {
		// increase the playback rate by slowerOrFasterRate
		video.playbackRate = video.playbackRate / slowerOrFasterRate;
		console.log("New playback rate: " + video.playbackRate);
	});

	const skipButton = document.querySelector('#skip');
	skipButton.addEventListener('click', function() {
		if(video.currentTime + 10 <= video.duration) {
			video.currentTime += 10;
		} else {
			video.currentTime = 0;
		}
		console.log(`Current Time: ${video.currentTime}`);
	});

	const muteButton = document.querySelector('#mute');
		muteButton.addEventListener('click', function() {
		if(video.muted) {
			video.muted = false;
			muteButton.textContent = "Mute";
		} else {
			video.muted = true;
			muteButton.textContent = "Unmute";
		}
	});

	const slider = document.querySelector('#slider');
	const volumeSpan = document.querySelector('#volume');
	slider.addEventListener('input', function() {
		video.volume = slider.value / 100;
		volumeSpan.textContent = `${slider.value}%`;
	});

	const styledBtn = document.querySelector('#vintage');
	styledBtn.addEventListener('click', function() {
	  // add the oldSchool class to the video element
	  video.classList.add('oldSchool');
	});

	const originalBtn = document.querySelector('#orig');
	originalBtn.addEventListener('click', function() {
		// remove the oldSchool class from the video element
		video.classList.remove('oldSchool');
	});
	
});