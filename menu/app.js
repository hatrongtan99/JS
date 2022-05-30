const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-1.jpeg?raw=true",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-2.jpeg?raw=true",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-3.jpeg?raw=true",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-4.jpeg?raw=true",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-5.jpeg?raw=true",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-6.jpeg?raw=true",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-7.jpeg?raw=true",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-8.jpeg?raw=true",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/setup/images/item-9.jpeg?raw=true",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
     {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/08-menu/final/images/item-10.jpeg?raw=true",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  ];


const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function() {
  displayMenuItems(menu);
  displayBtns()
});

// function

function displayMenuItems(menuItems) {
  var htmlMenu = menuItems.map(function(menuItem) {
    return `
    <article class="menu-item">
          <img src="${menuItem.img}" />
          <div class="item-info">
            <header>
              <h4>${menuItem.title}</h4>
              <h4 class="price">${menuItem.price}</h4>
            </header>
            <p class="item-text">
            ${menuItem.desc}
            </p>
          </div>
        </article>
    `
  });
  sectionCenter.innerHTML = htmlMenu.join('');
};

function displayBtns() {
  const categorys = menu.reduce(function(acc, item) {
    if (acc.includes(item.category)) {
      return acc
    } else {
      acc.push(item.category)
    }
    return acc
  }, ['all'])
  const htmlBtns = categorys.map(function(category) {
    return `
    <button type="button" class="filter-btn" data-id="${category}">${category}</button>
    `
  });

  btnContainer.innerHTML = htmlBtns.join('');

  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(function(filterbtn) {
    filterbtn.onclick = function(e) {
      const categoryBtn = e.currentTarget.dataset.id;
      const menuCategorys = menu.filter(function(item) {
        return item.category === categoryBtn
      })

      if (categoryBtn == 'all') {
        displayMenuItems(menu)
      } else {
        displayMenuItems(menuCategorys)
      }
    }
  })
};