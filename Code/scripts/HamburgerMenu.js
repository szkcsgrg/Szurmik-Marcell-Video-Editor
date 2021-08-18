const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navlinks = document.querySelector(".nav-links");
    const nav = document.querySelector("nav");
    const navLinksli = document.querySelectorAll('.nav-links li');
    const bottom = document.querySelector(".bottom");

    burger.addEventListener('click', () => {
      //Toggle
      nav.classList.toggle('nav-active');
      navlinks.classList.toggle('navlinks-active');
      burger.classList.toggle('burger-active');

      //Animate Links
      navLinksli.forEach((link, index) => {
        if(link.style.animation)
        {
          link.style.animation = ''
        }
        else
        {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.5}s`
        }
      });
  
      //Burger Animation
      burger.classList.toggle('toggle');
    });
  
  }
  
  navSlide();
