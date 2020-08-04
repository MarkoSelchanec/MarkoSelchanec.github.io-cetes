import { lapTopsData } from './laptops.js';

$(document).ready(function () {
  const pageCreate = (array, page) => {
    const container = document.createElement('div');
    $(container).addClass(' container container-cards my-5 mx-auto');
    $(container).append(array[page]);
    $('#paginate-prev').removeClass('disabled');
    if (page === 0) {
      $('#paginate-prev').addClass('disabled');
    }
    $('#paginate-next').removeClass('disabled');

    if (page === array.length - 1) {
      $('#paginate-next').addClass('disabled');
    }
    for (let i = 0; i < $('.pagination').children().length; i++) {
      $('.pagination').children()[i].classList.remove('active');
    }

    $('.pagination').children()[page + 1].classList.add('active');
    $('#paginate-next').removeClass('active');
    return container;
  };

  const paginate = (array) => {
    $('#paginate').addClass('d-flex').removeClass('d-none');
    let currentPage = 0;
    $('.insert-page').append(pageCreate(rowCreate(cardArray), currentPage));
    for (let i = 0; i < array.length; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      $(li).addClass('page-item');
      $(a)
        .addClass('page-link')
        .attr('href', '#')
        .text(i + 1)
        .click((e) => {
          e.preventDefault();
          $('.insert-page').empty();
          currentPage = i;
          $('.insert-page').append(
            pageCreate(rowCreate(cardArray), currentPage)
          );
        });
      console.log(array);
      $(li).append(a);
      $(li).insertBefore('#paginate-next');
    }
    $('#paginate-next').click((e) => {
      e.preventDefault();
      if (currentPage <= array.length - 2) {
        $('.insert-page').empty();
        $('.insert-page').append(
          pageCreate(rowCreate(cardArray), currentPage + 1)
        );
        currentPage++;
        $('.pagination').children()[currentPage].classList.remove('active');
        $('.pagination').children()[currentPage + 1].classList.add('active');
      }
    });
    $('#paginate-prev').click((e) => {
      e.preventDefault();
      if (currentPage !== 0) {
        $('.insert-page').empty();
        $('.insert-page').append(
          pageCreate(rowCreate(cardArray), currentPage - 1)
        );
        currentPage--;
        $('.pagination').children()[currentPage + 2].classList.remove('active');
        $('.pagination').children()[currentPage + 1].classList.add('active');
      }
    });
    $('.pagination').children()[currentPage + 1].classList.add('active');
  };

  const rowCreate = (array) => {
    // split array into chunks
    let chunk = 12; // items per chunk

    let result = array.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / chunk);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);

    let column = '';
    let row = '';
    let tempArr = [];
    for (const arr of result) {
      row = document.createElement('div');
      $(row).addClass('row d-flex justify-content-center');
      for (const a of arr) {
        column = document.createElement('div');
        $(column).addClass('col-xs');
        $(column).append(a);
        $(row).append(column);
      }
      tempArr.push(row);
    }
    return tempArr;
  };

  const cardCreate = (object) => {
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

  let cardArray = [];
  const createCardArray = (array) => {
    array.forEach((e) => cardArray.push(cardCreate(e)));
  };
  createCardArray(lapTopsData);

  paginate(rowCreate(cardArray));
});
