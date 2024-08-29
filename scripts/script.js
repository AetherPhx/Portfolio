const prepareNavMenu = () => {
	const nav = document.querySelector(".nav");

	nav.addEventListener("click", (event) => {
		event.target.matches(".nav__btn, .nav__icon, .nav__item, .nav__link")
			? toogleNavMenu()
			: null;
	});
};

const toogleNavMenu = () =>
	document.querySelector(".nav__menu").classList.toggle("nav__menu--hidden");

const startApp = () => {
	console.log("App Started");
	prepareNavMenu();
};

startApp();
