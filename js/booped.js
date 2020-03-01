if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", function() {
		loaded();
	});
} else if (document.attachEvent) {
	document.attachEvent("onreadystatechange", function() {
		loaded();
	});
}

function loaded() {
	setInterval(loop, 260);
}
var x = 0;
var titleText = ["h", "ha", "hara", "harak", "haraki", "harakir", "harakiri", "harakir", "haraki", "harak", "harak", "hara", "har", "ha", "h", " " ];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
