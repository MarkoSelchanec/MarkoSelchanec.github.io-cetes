import { laptops } from './laptops.js';
import { paginate } from './service.js';

$(document).ready(function () {
  $('#carouselCaptions').removeClass('d-none');
  $('#paginate').addClass('d-none');
  $('#nav-home').click((e) => {
    e.preventDefault();
    $('.insert-page').empty();
    $('#paginate').addClass('d-none');
    $('#paginate').removeClass('d-flex');
    $('#carouselCaptions').removeClass('d-none');
  });
  $('#nav-laptops').click((e) => {
    e.preventDefault();
    $('#carouselCaptions').addClass('d-none');
    $('#paginate').removeClass('d-none');
    $('.insert-page').empty();
    $('.pagination').empty();
    paginate(laptops);
  });
});

// $(li).attr('id', 'paginate-prev');
