/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

 // Show menu

 if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
 }

//  Menu hidden

if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
 }


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                    : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 250 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link')
    }else{
      sectionClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

 const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true, //Animations repeat
 })

 sr.reveal('.home_data, .footer')
 sr.reveal('.home_bochi', {delay: 1200, distance: '100px', duration: 1500})
 sr.reveal('.home_ingredient', {delay: 1600, interval: 100})
 sr.reveal('.delivery_img, .contact_image', {origin: 'left'})
 sr.reveal('.delivery_data, .contact_data', {origin: 'right'})
 sr.reveal('.popular_card', {interval: 100})
 sr.reveal('.goal_card, .goal_card1', {interval: 100})
 

