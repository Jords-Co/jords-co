import Splide from '@splidejs/splide';

function initialisePortfolioSlider() {
  let portfolioSlickSlider = $('.portfolio5_list'),
    portfolioPreviousButton = $('.global_slider-arrow_top.is-left'),
    portfolioNextButton = $('.global_slider-arrow_top.is-right');
  console.log('slider', portfolioSlickSlider);
  console.log('prev', portfolioPreviousButton);
  console.log('next', portfolioNextButton);
  if (portfolioSlickSlider) {
    portfolioSlickSlider.slick({
      dots: false,
      arrows: false,
      infinite: true,
      centerMode: true,
      speed: 500,
      touchThreshold: 300,
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 1298,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
    portfolioPreviousButton.click(function () {
      portfolioSlickSlider.slick('slickPrev');
    });
    portfolioNextButton.click(function () {
      portfolioSlickSlider.slick('slickNext');
    });
  }
}

/**
 * Initialise Portfolio Splide.
 */
function intialisePortfolioSplide() {
  if ($('.splide').length) {
    console.log('Splide found');
    new Splide('.splide', {
      type: 'slide',
      perPage: 2,
      pagination: false,
      arrows: true,
      autoplay: false,
      gap: '2rem',
      breakpoints: {
        767: {
          perPage: 1,
        },
        479: {
          perPage: 1,
        },
      },
    }).mount();
  }
}

window.Webflow ||= [];
window.Webflow.push(() => {
  initialisePortfolioSlider();
  // intialisePortfolioSplide();
});
