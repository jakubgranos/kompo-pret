const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navigation");

hamburger.onclick = function () {
	if (nav.className == "desactive") {
		nav.className = "active"
	} else {
		nav.className = "desactive"
	}
}