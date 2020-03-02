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
	setInterval(loop, 300);
}
var x = 0;
var titleText = ["c", "ch", "che", "chea", "cheat", "cheati", "cheatin", "cheating", "cheating.", "cheating.c", "cheating.cc", "cheating.c", "cheating.", "cheating", "cheatin", "cheati", "cheat", "chea", "che", "ch", "c", "⠀"];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
