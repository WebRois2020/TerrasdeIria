const selectHotspot = (e) => {
	const clickedHotspot = e.target.parentElement;
	const container = clickedHotspot.parentElement;

	// only include hotspots within same image to allow one open hotspot per image; change "container" to "document" to allow only one open hotspot for entire page:
	const hotspots = container.querySelectorAll(".hotspot");
	hotspots.forEach(hotspot => {
		if (hotspot === clickedHotspot) {
			hotspot.classList.toggle("hotspot-selected");
		} else {
			hotspot.classList.remove("hotspot-selected");
		}
	});
}

(() => {
	const buttons = document.querySelectorAll(".hotspot_button");
	buttons.forEach(button => {
		button.addEventListener("click", selectHotspot);
	});
})();
