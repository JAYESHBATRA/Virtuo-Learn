//Insitialised the Scroll-Reveal component

ScrollReveal({
	distance: "40px",
	duration: 2000,
});

// Customisation of Scroll Reveal rules for different classes

ScrollReveal().reveal(
	".main-nav,#sub-para,.primary-button,.features-heading-text,.head-txt,.para-1,.card-1",
	{
		delay: 200,
		origin: "top",
	}
);
ScrollReveal().reveal(".features-card,.popup-premium,.para-2,.card-2", {
	delay: 300,
	origin: "top",
});
ScrollReveal().reveal(".para-3,.card-3", {
	delay: 400,
	origin: "top",
});
ScrollReveal().reveal(".popup-basic,.popup-ultimate,.para-4,.card-4", {
	delay: 500,
	origin: "top",
});
ScrollReveal().reveal(".para-5,.card-5", {
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
