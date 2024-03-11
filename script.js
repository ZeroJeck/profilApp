particlesJS('particles', {
     particles: {
          number: {
               value : 120,
               density: {
                    enable: true,
                    value_area: 1000
               }
          },
          color : {
               value: '#ffffff'
          },
          shape: {
               type: 'star',
               stroke: {
                    width: 0,
                    color: '#000000'
               },
               opacity: {
                    value: 0.5,
                    random: true,
                    animation: {
                         enable: true,
                         speed: 1,
                         opacity_min: 0,
                         sync: false
                    }
               }
          },
          size: {
               value: 4,
               random: true
          },
          line_linked: {
               enable: true,
               distance: 100,
               color: '#ffffff',
               opacity: 0.6,
               width: 1
          },
          move: {
               enable: true,
               speed: 3,
               direction: 'none',
               random: true,
               straight: false,
               out_mode: 'out',
               bounce: false
          }
     },
     interactivity: {
          detectsOn: 'canvas',
          events: {
               onHover: {
                    enable: true,
                    mode: 'repulse'
               },
               onClick: {
                    enable: true,
                    mode: 'bubble'
               },
               resize: true
          },
          modes: {
               repulse: {
                    distance: 150,
                    duration: 0.4
               },
               bubble: {
                    distance: 200,
                    size: 8,
                    duration: 0.4
               }
          }
     },
     retina_detect: true,
     detectRetina: true
});






function scrollToTop(){
     window.scrollTo({
          top: 0,
     });
     window.addEventListener('scroll', function(){
          let scrollTopButton = this.document.querySelector('.scroll-top');
          if (this.window.pageYOffset > 200){
               scrollTopButton.style.display= 'block';
          }else{
               scrollTopButton.style.display= 'none';
          }
     });
}