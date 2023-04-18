$(document).on("click",function() {
useEffect(() => {
    console.log("Congratulations!");
    const numberOfStars = 20;
  
    for (let i = 0; i < numberOfStars; i++) {
      const blob = document.createElement('div');
      blob.classList.add('blob', 'fa', 'fa-star', i.toString());
      document.querySelector('.congrats').appendChild(blob);
    }
  
    animateText();
  
    animateBlobs();
  
    // Wrap the use of $ inside the useEffect hook and check that it is loaded
    if ($) {
      gsap.TweenMax.from($('h1'), 0.8, {
        scale: 0.4,
        opacity: 0,
        rotation: 15,
        ease: Back.easeOut.config(4),
      });
    }
  }, []);

function animateBlobs() {
  const xSeed = _.random(350, 380);
  const ySeed = _.random(120, 170);

  const blobs = document.querySelectorAll('.blob');
  blobs.forEach((blob) => {
    const speed = _.random(1, 5);
    const rotation = _.random(5, 100);
    const scale = _.random(0.8, 1.5);
    const x = _.random(-xSeed, xSeed);
    const y = _.random(-ySeed, ySeed);

    gsap.TweenMax.to(blob, speed, {
      x,
      y,
      ease: Power1.easeOut,
      opacity: 0,
      rotation,
      scale,
      onStart: function () {
        blob.style.display = 'block';
      },
      onComplete: function () {
        blob.style.display = 'none';
      },
    });
  });
}
function animateText() {
  
  gsap.TweenMax.from($('h1'), 0.8, {
    scale: 0.4,
    opacity: 0,
    rotation: 15,
    ease: Back.easeOut.config(4),
  });
}});