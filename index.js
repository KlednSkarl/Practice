function toggleMenu(){
    const navLinks = document.querySelector('.nav-links');
    const burgerIcon = document.querySelector('.burger-icon');

    navLinks.classList.toggle('active');
    burgerIcon.classList.toggle('open');
    
}