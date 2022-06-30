const menu = document.querySelector('.nav-links');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn'); 


menuBtn.addEventListener('click', function() {
	menu.style.display = "flex";
	menuBtn.style.display = "none";
	closeBtn.style.display = "inline-block";
})

closeBtn.addEventListener('click', function() {
	menu.style.display = "none";
	menuBtn.style.display = "inline-block";
	closeBtn.style.display = "none";
})