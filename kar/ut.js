var audio = new Audio("speech.wav"),
	char = 0,
	word = 0,
	init = 0;
	
window.onload = function() {
	var text = document.querySelector("#here");
	if (init == 0) {
		text.innerHTML = "";
		init = 1;
	}
	
	var txt = ["* Таксс, Кариныч", "* Пили презентацию тебе сказали", "* Бистра", "* .-.-.-.-.-.-.-.-.-.~"];
	
	if (char < txt[word].length) {
		text.innerHTML += txt[word][char];
		char++;
	} else {
		text.innerHTML += "<br>";
		char = 0;
		if (((word + 1) % 2 == 0) && txt[word + 1]) {
			text.innerHTML = "";
		} if (typeof txt[word + 1] !== 'undefined') {
			word++;
		} else {
			return;
		}
	}
	
	if (text.innerHTML !== txt) {
		if (char == txt[word].length) {
			setTimeout(window.onload, 1500)
		} else {
			setTimeout(window.onload, 65);
		}
	}
	audio.currentTime = 0;
	audio.play();
}