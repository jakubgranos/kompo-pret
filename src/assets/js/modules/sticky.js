const stickyNav = document.getElementById("hamburger");

function sticky() {

	if (window.scrollY > 50) {
		stickyNav.className = "sticky";
	} else {
		navigation.className = "desactive";
	}
}
