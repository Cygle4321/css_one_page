let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach( sec  => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heignt = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heignt)  {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })

        };

    });
};