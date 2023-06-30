import Splide from '@splidejs/splide';

/**
 * Initialise Portfolio Splide.
 */
function intialisePortfolioSplide() {
  if ($('.splide').length) {
    new Splide('.splide', {
      type: 'loop',
      perPage: 2,
      perMove: 1,
      arrows: true,
      pagination: false,
      autoHeight: true,
      breakpoints: {
        919: {
          perPage: 1
        }
      }
    }).mount();
  }
}

window.Webflow ||= [];
window.Webflow.push(() => {
  intialisePortfolioSplide();
});
