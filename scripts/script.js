import { laptops } from './laptops.js';
import { phones } from './phones.js';
import {
  paginate,
  setUpPage,
  createCardArray,
  cartArray,
  showCart,
  cardCreate,
  splitArray,
} from './service.js';

$(document).ready(function () {
  // first load of page
  $('#carouselCaptions').removeClass('d-none');
  $('#paginate').addClass('d-none');
  $('#nav-home').addClass('active');
  $('.table').addClass('d-none');
  $('.table').removeClass('d-table');
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
    $('.table').addClass('d-none');
    $('.table').removeClass('d-table');
    let tempArr = [];
    createCardArray(cardArray, cardCreate, tempArr);
    let final = splitArray(tempArr);
    paginate(final);
  };
  // navigate to laptops page
  $('#nav-laptops, #laptops-carousel').click((e) => {
    generateAndNavigateToPage(e, '#nav-laptops', laptops);
  });
  // navigate to phones page
  $('#nav-phones, #phones-carousel').click((e) => {
    generateAndNavigateToPage(e, '#nav-phones', phones);
  });
  // navigate to consoles and games
  $('#nav-consoles').click((e) => {
    e.preventDefault();
    console.log(cartArray);
  });
  // navigate to cart site
  $('.cart-page').click((e) => {
    e.preventDefault();
    showCart();
  });
});
