var menu = document.getElementById("menu");

document.addEventListener("contextmenu", showMenu);

function showMenu(event) {
	event.preventDefault(); // prevent the default right-click menu from showing up

	// show the menu in the center of the page
	menu.style.display = "flex";

	// add a click event listener to the document to hide the menu when the user clicks outside of it
	document.addEventListener("click", hideMenu);
	document.addEventListener("contextmenu", hideMenu);
}

function hideMenu(event) {
	// hide the menu only if the user clicked outside of it
	if (!menu.contains(event.target)) {
		menu.style.display = "none";
		document.removeEventListener("click", hideMenu);
		document.removeEventListener("contextmenu", hideMenu);
	}
}

var fullscreenItem = document.querySelector(".fullscreen");
fullscreenItem.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
	if (document.fullscreenElement) {
		document.exitFullscreen();
		fullscreenItem.textContent = "Fullscreen";
	} else {
		document.documentElement.requestFullscreen();
		fullscreenItem.textContent = "Restore";
	}
}
