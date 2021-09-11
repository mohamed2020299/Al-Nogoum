
//start  global variables
const sections = document.querySelectorAll('section'),
    // options for observer objectd 
    options =
    {
        root: null,
        rootMargin: '-200px 0px -200px 0px',
        threshold: 0.3
    };
//End  global variables
// // function that  build the nav and Scroll to section on link click with the same function
function navbar() {
    const list = document.querySelector('.list'),
        minue = document.querySelector('.toggle'),
        navbar = document.querySelector('.nav-bar');
    // loop of sevtions ( create list for every section and append anchor to it , add href to anchor )
    for (section of sections) {
        let element = document.createElement('li');
        let anchor = document.createElement('a');
        list.insertAdjacentElement('beforeend', element);
        element.appendChild(anchor);
        anchor.textContent = section.id;
        anchor.href = `#${section.id}`;
        anchor.setAttribute('data-nav', section.id);
    }
    // create button box that lead to contact us and append to navbar list 
    const buttonBox = document.createElement('button');
    const anchorButt = document.createElement('a');
    anchorButt.href = '#contact';
    buttonBox.appendChild(anchorButt);
    list.appendChild(buttonBox);
    anchorButt.textContent = 'sign-up';
    buttonBox.classList.add('button');
    // whn click on minue toglle that will open navbar list
    minue.addEventListener('click', () => {
        navbar.classList.toggle('nav-bar-open');
    })

};
// fucntion thad add up button when scroll at  min hight   1500 and remeve it if it less than it height
function upbutton() {
    const topSpan = document.querySelector('.up');
    console.log(topSpan);
    window.addEventListener('scroll', () => {
        this.scrollY >= 1500 ? topSpan.classList.add('up-show') : topSpan.classList.remove('up-show');
    })
    topSpan.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
    }))
};

//fucntion showMore button that in portofli that make all my project are appear
function showMore() {
    const showMore = document.querySelector('.showmore'),
        projects = document.querySelectorAll('.portfolio .myproject div');
    showMore.addEventListener('click', () => {
        for (project of projects) {
            project.style = `display:block`;
        }

    })
}


/* fucntion that Add class 'active' to section when near top of viewport have :
  1- object (observer)
  2- observer to every section by (forEach method)
*/

function obsec() {
    const observer = new IntersectionObserver(entries => {
        //  select thae anchors
        const anchors = document.querySelectorAll('.list li a'),
            servDiv = document.querySelectorAll('.services-right > div');
        entries.forEach(entry => {
            //if the entry is intersection
            if (entry.isIntersecting) {
                // add active section to entry target (section)
                entry.target.classList.add('active-section');
                // if the entry is services  =>
                if (entry.target.id == 'services') {
                    servDiv.forEach((el) => {
                        el.style = ` margin:0px;`
                    })
                }
                for (anchor of anchors) {
                    if (anchor.getAttribute('data-nav') === entry.target.id) {
                        //add active for anchor when it is the own section near         //important
                        anchor.classList.add('active-anchor');
                    }
                }
            }
            // if the entry is not intersection  remove active class from section and anchor
            else {
                if (entry.target.classList.contains('active-section')) {
                    entry.target.classList.remove('active-section')
                }
                for (anchor of anchors) {
                    if (anchor.getAttribute('data-nav') === entry.target.id) {
                        anchor.classList.remove('active-anchor')
                    }
                }
            }
        }
        )
    }, options);
    // for loop  section  observe it
    sections.forEach((sec) => observer.observe(sec));

}
// fucntion that addition some style when scrool the window
function scrollHeader(){
    const header = document.querySelector('header');
    console.log(header)
    window.addEventListener('scroll', () => {
        this.scrollY >= 110 ? header.classList.add('header-scroll') : header.classList.remove('header-scroll');
    })
}
// Run all function 
obsec();
navbar();
upbutton();
showMore();
scrollHeader()