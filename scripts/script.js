import { laptops, phones } from './products.js';
import { setUpPage, showCart, generateAndNavigateToPage } from './service.js';

$(document).ready(function () {
  // first load of page
  $('#carouselCaptions').removeClass('d-none');
  $('#paginate').addClass('d-none');
  $('#nav-home').addClass('active');
  $('.table').addClass('d-none');
  $('.table').removeClass('d-table');
  // navigate to home page
  $('#nav-home')
    .add('.brand-link')
    .click((e) => {
      setUpPage(e, '#nav-home');
      $('#paginate').addClass('d-none');
      $('#paginate').removeClass('d-flex');
      $('#carouselCaptions').removeClass('d-none');
      $('.success-alert').empty();
    });

  // navigate to laptops page
  $('#nav-laptops, #laptops-carousel').click((e) => {
    generateAndNavigateToPage(e, '#nav-laptops', laptops);
  });
  // navigate to phones page
  $('#nav-phones, #phones-carousel').click((e) => {
    generateAndNavigateToPage(e, '#nav-phones', phones);
  });
  // navigate to cart site
  $('.cart-page').click((e) => {
    e.preventDefault();
    showCart();
  });
});
