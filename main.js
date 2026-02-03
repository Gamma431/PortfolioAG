
// getelement by id
const header = document.getElementById('header');
const avatar = document.getElementsByClassName('glassy');
const Herotxt = document.getElementsByClassName('leftside');



//opening animation

gsap.from(header, {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "bounce"
});

gsap.to(header, {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "bounce",
    delay: 1
});

gsap.from(avatar, {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: "power3.out",
    delay: 1
});

gsap.to(avatar, {
    duration: 1,
    scale: 1,
    opacity: 1,
    ease: "power3.out",
    delay: 1
});

gsap.from(Herotxt, {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out",
    delay: 1.5
});

gsap.to(Herotxt, {
    duration: 1,
    x: 0,
    opacity: 1,
    ease: "power2.out",
    delay: 1.5
});

//scroll animation
gsap.registerPlugin(ScrollTrigger);

gsap.from('.section', {
    scrollTrigger: {
        trigger: '.section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});
//main animation










//dropdown menu
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 