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
  $(cardBtn).addClass('btn btn-primary').text('BUY').attr('href', '#');
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
          console.log($('.pagination').children());
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
