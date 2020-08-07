// Cart items get added to this array
export let cartArray = [];
// Create cart items page
export const showCart = () => {
  $('.insert-page').empty();
  $('#carouselCaptions').addClass('d-none');
  $('#paginate').addClass('d-none');
  $('.pagination').empty();
  if (cartArray.length !== 0) {
    $('.table').removeClass('d-none');
    $('.table').addClass('d-table');
  }
  makeCart();
};
// Add items to array which gets added to cart
const makeCart = () => {
  $('.table-body').empty();
  for (const item of $('.navbar-nav').find('li').find('a')) {
    $(item).removeClass('active');
  }
  if (cartArray.length === 0) {
    createJumbo();
  }
  let tempArr = groupBy(cartArray, 'name');
  for (let item of tempArr) {
    const row = document.createElement('tr');
    const tvalues = [
      item.values[0].img,
      item.key,
      item.values.length,
      item.values[0].price,
      item.values[0].price * item.values.length,
    ];
    $('.table-body').append(row);
    for (let i = -1; i < 5; i++) {
      const cell = document.createElement('td');
      if (i === -1) {
        const btn = document.createElement('button');
        $(btn).text('X').addClass('btn btn-primary text-white text-center');
        $(btn).click(() => {
          $(row).empty();
          cartArray = cartArray.filter((e) => e.name !== item.values[0].name);
          $('.shopping-cart-items').text(cartArray.length);
          if (cartArray.length === 0) {
            createJumbo();
            $('.table').addClass('d-none');
            $('.table').removeClass('d-table');
          }
        });
        $(cell).html(btn);
      }
      if (i === 0) {
        const img = document.createElement('img');
        $(img)
          .attr('src', tvalues[i])
          .attr('alt', 'item-image')
          .css('height', '50px')
          .css('object-fit', 'cover');
        $(cell).html(img);
      } else {
        if (i === 1 || i === 3) {
          $(cell).addClass('d-md-table-cell d-none');
        }
        $(cell).html(tvalues[i]);
      }
      $(row).append(cell);
    }
  }
};
// Create and show jumbotron for empty cart
const createJumbo = () => {
  const jumbotron = document.createElement('div');
  $(jumbotron).addClass('jumbotron jumbotron-fluid m-5 mx-auto container');
  const h1 = document.createElement('h1');
  $(h1).addClass('text-center display-2');
  $(h1).text('Your cart is empty');
  $(jumbotron).append(h1);
  $('.insert-page').empty();
  $('.insert-page').append(jumbotron);
};
// Create a card from an object that has an image url, name, price
export const cardCreate = (object) => {
  const card = document.createElement('card');
  const img = document.createElement('img');
  const body = document.createElement('div');
  const cardTitle = document.createElement('h5');
  const cardText = document.createElement('p');
  const cardBtn = document.createElement('a');
  $(card).addClass('card').append(img).append(body);
  $(img)
    .attr('src', object.img)
    .attr('alt', 'nothink for now')
    .addClass('card-img-top m-auto pt-3');
  $(body).addClass('card-body');
  $(cardTitle).addClass('card-title').text(object.name);
  $(cardText).addClass('card-text').text(object.price);
  $(cardBtn).addClass('btn btn-primary').text('Add to cart').attr('href', '#');
  $(card).click((e) => {
    e.preventDefault();
    alert('card');
  });
  $(cardBtn).click((e) => {
    e.preventDefault();
    e.stopPropagation();
    cartArray.push(object);
    $('.shopping-cart-items').text(cartArray.length);
    const alert = document.createElement('div');
    $(alert).addClass('alert alert-success m-0').attr('role', 'alert');
    $(alert).text(`You added ${object.name} to your cart.`);
    $('.success-alert').append(alert).children(':last').hide().fadeIn(300);
    setTimeout(() => {
      $(alert).fadeOut(300);
    }, 4700);
    setTimeout(() => {
      $(alert).remove();
    }, 5000);
  });
  $(body).append(cardTitle).append(cardText).append(cardBtn);
  return card;
};
// Take in an array, a method to convert each element from that array, spit out a new array with modified elements
export const createCardArray = (inArray, method, outArray) => {
  inArray.forEach((e) => outArray.push(method(e)));
};
// Take an array, split it into parts, return a new array
export const splitArray = (inArray) => {
  // split array into chunks
  let chunk = 12; // items per chunk
  let result = inArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunk);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
  return result;
};
// Take in an array which has already been split into smaller arrays and return a bootstrap row
export const rowCreate = (array, pageCount) => {
  let row = document.createElement('div');
  $(row).addClass('row d-flex justify-content-center');
  for (const a of array[pageCount - 1]) {
    let column = document.createElement('div');
    $(column).addClass('col-xs');
    $(column).append(a);
    $(row).append(column);
  }
  return row;
};
// Create a page / takes in a row and paints the page
export const pageCreate = (row) => {
  const container = document.createElement('div');
  $(container).addClass(' container container-cards my-5 mx-auto');
  $(container).append(row);
  $('.insert-page').append(container);
  return container;
};
// Take in the ARRAY, create row, paint page, construct pagination form scratch
export const paginate = (array) => {
  $('#paginate').addClass('d-flex').removeClass('d-none');
  let currentPage = '1';
  pageCreate(rowCreate(array, currentPage));
  for (let i = 0; i < array.length + 2; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    i === 1 ? $(li).addClass('active') : null;
    $(li).addClass('page-item');
    if (i === array.length + 1) {
      $(a)
        .addClass('page-link')
        .attr('href', '#')
        .text('Next')
        .click((e) => {
          e.preventDefault();
          if (currentPage !== array.length) {
            $('.insert-page').empty();
            currentPage++;
            $('.insert-page').append(pageCreate(rowCreate(array, currentPage)));
            $('.pagination')
              .children()
              [currentPage - 1].classList.remove('active');
            $('.pagination').children()[currentPage].classList.add('active');
            $('#paginate-prev').removeClass('disabled');
          }
          currentPage === array.length
            ? $('#paginate-next').addClass('disabled')
            : null;
        });
      $(li).append(a);
      $(li).attr('id', 'paginate-next');
      $('.pagination').append(li);
    }
    if (i === 0) {
      $(a)
        .addClass('page-link')
        .attr('href', '#')
        .text('Previous')
        .click((e) => {
          e.preventDefault();
          if (currentPage !== 1) {
            $('#paginate-next').removeClass('disabled');
            $('.insert-page').empty();
            currentPage--;
            $('.insert-page').append(pageCreate(rowCreate(array, currentPage)));
            $('.pagination')
              .children()
              [currentPage + 1].classList.remove('active');
            $('.pagination').children()[currentPage].classList.add('active');
          }
          currentPage === 1 ? $('#paginate-prev').addClass('disabled') : null;
        });
      $(li).append(a);
      $(li).attr('id', 'paginate-prev');
      $('.pagination').append(li);
    }
    if (i !== 0 && i !== array.length + 1) {
      $(a)
        .addClass('page-link')
        .attr('href', '#')
        .text(i)
        .click((e) => {
          e.preventDefault();
          $('.insert-page').empty();
          currentPage = i;
          $('.insert-page').append(pageCreate(rowCreate(array, currentPage)));
          for (const key of $('.pagination').children()) {
            key.classList.remove('active');
          }
          $('#paginate-prev').removeClass('disabled');
          $('#paginate-next').removeClass('disabled');
          if (currentPage === 1) {
            $('#paginate-prev').addClass('disabled');
          }
          if (currentPage === array.length) {
            $('#paginate-next').addClass('disabled');
          }

          $(li).addClass('active');
        });
      $(li).append(a);
      $('.pagination').append(li);
    }
  }
  $('#paginate-prev').addClass('disabled');
};
// Toggle active state on navbar, takes in the id of the navigation
export const navStateToggle = (navItemId) => {
  for (const item of $('.navbar-nav').find('li').find('a')) {
    $(item).removeClass('active');
  }
  $(navItemId).addClass('active');
};
// Reset elements function
export const setUpPage = (e, navItemId) => {
  e.preventDefault();
  $('.insert-page').empty();
  navStateToggle(navItemId);
};
// Vanilla groupBy
const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    let v = key instanceof Function ? key(x) : x[key];
    let el = rv.find((r) => r && r.key === v);
    if (el) {
      el.values.push(x);
    } else {
      rv.push({ key: v, values: [x] });
    }
    return rv;
  }, []);
};

// groupByArray(xs, key) { return xs.reduce(function (rv, x) { let v = key instanceof Function ? key(x) : x[key]; let el = rv.find((r) => r && r.key === v); if (el) { el.values.push(x); } else { rv.push({ key: v, values: [x] }); } return rv; }, []); }
