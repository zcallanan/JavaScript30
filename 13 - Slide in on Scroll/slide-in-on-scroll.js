const debounce = (func, wait = 20, immediate = true) => {
      let timeout;
      return function() {
        const context = this, args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    const slideImages = document.querySelectorAll('.slide-in')

    const checkSlide = (e) => {
      slideImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2; // (number of pixels scrolled to, from top of screen up + interior height of the window) - height of current image, halved
        console.log(window.scrollY)
        console.log(window.innerHeight)
        console.log(sliderImage.height)
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height; // top of image + image height
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom
        if(isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      })
    }

    window.addEventListener('scroll', debounce(checkSlide));
