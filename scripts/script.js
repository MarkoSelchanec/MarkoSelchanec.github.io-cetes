import { laptops } from './laptops.js';
import { phones } from './phones.js';
import { paginate, setUpPage } from './service.js';

$(document).ready(function () {
  // first load of page
  $('#carouselCaptions').removeClass('d-none');
  $('#paginate').addClass('d-none');
  $('#nav-home').addClass('active');
  // navigate to home page
  $('#nav-home').click((e) => {
    setUpPage(e, '#nav-home');
    $('#paginate').addClass('d-none');
    $('#paginate').removeClass('d-flex');
    $('#carouselCaptions').removeClass('d-none');
  });
  const generateAndNavigateToPage = (event, navID, cardArray) => {
    setUpPage(event, navID);
    $('#carouselCaptions').addClass('d-none');
    $('#paginate').removeClass('d-none');
    $('.pagination').empty();
    paginate(cardArray);
  };
  // navigate to laptops page
  $('#nav-laptops, #laptops-carousel').click((e) => {
    generateAndNavigateToPage(e, '#nav-laptops', laptops);
  });
  // navigate to phones page
  $('#nav-phones, #phones-carousel').click((e) => {
    generateAndNavigateToPage(e, '#nav-phones', phones);
  });
});
