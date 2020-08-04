import { lenovoThinkPadd } from './laptops.js';


$(document).ready(function () {
  
  // let lapTopsData = [];

  // class laptop {
  //   constructor(img, name, price) {
  //     this.img = img;
  //     this.name = name;
  //     this.price = price;
  //   }
  // }

  // const lenovoThinkPadd = new laptop(
  //   'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t490-hero-1126.png?context=bWFzdGVyfHJvb3R8Nzg4OTN8aW1hZ2UvcG5nfGg5Ni9oYTcvMTA2NzMyMDYyNjM4MzgucG5nfDllOTUyNGM1OGYxNjkxNGU2ZTMxNWQxMTE1NDQ0MGZkNDU4ZWYwOWExZWZjMDJkMDRiZTIwYjc0OGE5NGUwMzA',
  //   'Lenovo - ThinkPad',
  //   `800$`
  // );

  const pageCreate = (row1, row2, row3, row4) => {
    const container = document.createElement('div');
    $(container).addClass('m-5');
    $(container).append(row1);
    $(container).append(row2);
    $(container).append(row3);
    $(container).append(row4);
    return container;
  };

  const rowCreate = (obj1, obj2, obj3, obj4) => {
    const container = document.createElement('div');
    const row = document.createElement('div');
    const column1 = document.createElement('div');
    const column2 = document.createElement('div');
    const column3 = document.createElement('div');
    const column4 = document.createElement('div');
    $(container).addClass('container container-cards my-auto').append(row);
    $(row).addClass('row d-flex justify-content-center');
    $(column1).addClass('col-xs').append(obj1);
    $(column2).addClass('col-xs').append(obj2);
    $(column3).addClass('col-xs').append(obj3);
    $(column4).addClass('col-xs').append(obj4);
    $(row).append(column1).append(column2).append(column3).append(column4);
    return container;
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
  $(
    pageCreate(
      rowCreate(
        cardCreate(lenovoThinkPadd),
        cardCreate(lenovoThinkPadd),
        cardCreate(lenovoThinkPadd),
        cardCreate(lenovoThinkPadd)
      ),
      rowCreate(
        cardCreate(lenovoThinkPadd),
        cardCreate(lenovoThinkPadd),
        cardCreate(lenovoThinkPadd),
        cardCreate(lenovoThinkPadd)
      ),
      rowCreate(
        cardCreate(lenovoThinkPadd),
        cardCreate(lenovoThinkPadd),
        cardCreate(lenovoThinkPadd),
        cardCreate(lenovoThinkPadd)
      ),
      rowCreate(
        cardCreate(lenovoThinkPadd),
        cardCreate(lenovoThinkPadd),
        cardCreate(lenovoThinkPadd),
        cardCreate(lenovoThinkPadd)
      )
    )
  ).insertBefore('.insert-before');
});
