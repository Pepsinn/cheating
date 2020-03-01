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
var titleText = ["c", "ch", "che", "chea", "cheati", "cheatin", "cheating", "cheating", "cheating", "cheatin", "cheatin", "cheati", "chea", "che", "ch", "c", " " ];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
