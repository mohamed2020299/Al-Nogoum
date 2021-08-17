
// //  //  build the nav and Scroll to section on link click with the same function
(function navbar() {
    const sections = document.querySelectorAll('section'),
        list = document.querySelector('.list'),
        minue = document.querySelector('.toggle'),
        navbar = document.querySelector('.nav-bar');

    for (section of sections) {
        let element = document.createElement('li');
        let anchor = document.createElement('a');
        list.appendChild(element);
        element.appendChild(anchor)
        anchor.textContent = section.id;
        anchor.href = `#${section.id}`
    }

    minue.addEventListener('click', () => {
        navbar.classList.toggle('nav-bar-open');
    })

})();

