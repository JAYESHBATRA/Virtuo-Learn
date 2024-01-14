//Insitialised the Scroll-Reveal component

ScrollReveal({
	distance: "40px",
	duration: 2000,
});

// Customisation of Scroll Reveal rules for different classes

ScrollReveal().reveal(
	".main-nav,#sub-para,.primary-button,.features-heading-text,.head-txt,.card-1,.para-1",
	{
		delay: 200,
		origin: "top",
	}
);
ScrollReveal().reveal(".features-card,.popup-premium,.card-2,.para-2", {
	delay: 300,
	origin: "top",
});
ScrollReveal().reveal(".card-3,.para-3", {
	delay: 400,
	origin: "top",
});
ScrollReveal().reveal(".popup-basic,.popup-ultimate,.card-4,.para-4", {
	delay: 500,
	origin: "top",
});
ScrollReveal().reveal(".card-5,.para-5", {
	delay: 600,
	origin: "top",
});
ScrollReveal().reveal(".card-6", {
	delay: 700,
	origin: "top",
});
ScrollReveal().reveal(".hero-image,.right,.feature-image-right,.head-img", {
	delay: 200,
	origin: "right",
});
ScrollReveal().reveal(".feature-image-left,.left,.button-10", {
	delay: 200,
	origin: "left",
});
ScrollReveal().reveal(".footer-content", {
	delay: 200,
	origin: "bottom",
});
