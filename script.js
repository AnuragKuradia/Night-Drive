// const scrollMovement = document.getElementById('scroll');
// const bg = document.getElementById('bg');
// const moon = document.getElementById('moon');
// const car = document.getElementById('car');
// const mountain= document.getElementById('mountain');
// const drive = document.getElementById('drive');

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger:{
        scrub: 2,
    }
});

tl.fromTo('#bg',{y:-50}, {y: 0, duration: 3})
  .to('#moon', {x : -100, duration:3}, '-=3')
  .to('#moon', {y : -120, duration:3}, '-=3')
  .to('#drive', {y : 100, duration:3}, '-=3')
  .to('#drive', {scale : 1.2, duration:3}, '-=3')
  .to('#car', {x : 110, duration:3}, '-=3')
  .to('#car', {y : -80, duration:3}, '-=3')
  .to('#mountain', {scale : 1.1, duration:3}, '-=3')
  .fromTo('#drive', {opacity:1}, {opacity: 0,  duration: 2}, '-=3')
  .fromTo('.scroll-down', {opacity:1}, {opacity: 0,  duration: 1}, '-=3')
  



//   A Resposive Parallax Site built with html, css, javascript .
//   Using GSAP 's  Timeline & ScrollTrigger Plugin . 
//   Theme for this pen is  Night Drive.