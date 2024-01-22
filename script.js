//  =================menu icon navbar==============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//  =================scroll selection active link ==============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => { 
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

if (top >= offset && top < offset + height) {
    navLinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
             });
        };       
    });
//  ================= End of scroll selection active link ==============*/
                         


// ==================SICKY NAV BAR ======================= 

 let header = document.querySelector('header ');
 header.classList.toggle('sticky',window.scrollY >100);

//  remove toggle icon 
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


// scrollreveAL

ScrollReveal({
// reset : true,
distance: '80px',
duration: 2000,
delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{
    origin:'bottom'});
ScrollReveal().reveal('.home-content h1 , .about-img' , { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'rigt'});


// typed

const typed = new Typed('.multiple-text', {

    strings: ['Web designer', 'Logo Desinger' , 'Graphic Designer', 'WordPress Expert', 'UI/UX designer'],
    typeSpeed:50,
    backSpeed:10,
    backDelay:1000,
    loop:true
});



// download file

function downloadFile() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var blob = new Blob([xhr.responseText], { type: 'text/plain' });
        var url = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = 'file.txt';
        link.click();
        window.URL.revokeObjectURL(url);
      }
    };
    xhr.open('GET', 'file.txt', true);
    xhr.send();
  }
  