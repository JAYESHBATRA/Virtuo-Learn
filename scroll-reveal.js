//Insitialised the Scroll-Reveal component

ScrollReveal({
	reset: true,
	distance: "40px",
	duration: 2000,
});

// Customisation of Scroll Reveal rules for different classes

ScrollReveal().reveal(
	".main-nav,#sub-para,.primary-button,.features-heading-text",
	{
		delay: 200,
		origin: "top",
	}
);
ScrollReveal().reveal(".features-card,.popup-premium", {
	delay: 300,
	origin: "top",
});
ScrollReveal().reveal(".popup-basic,.popup-ultimate", {
	delay: 500,
	origin: "top",
});
ScrollReveal().reveal(".hero-image,.right,.feature-image-right", {
	delay: 200,
	origin: "right",
});
ScrollReveal().reveal(".feature-image-left,.left", {
	delay: 200,
	origin: "left",
});
ScrollReveal().reveal(".footer-content", {
	delay: 200,
	origin: "bottom",
});
