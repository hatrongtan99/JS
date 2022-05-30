// // get year

// const currentYear = document.getElementById('date');
// currentYear.innerHTML = new Date().getFullYear();

// // toggle Btn

// const toggleBtn = document.querySelector('.nav-toggle');
// const linksContainer = document.querySelector('.links-container');
// const links = document.querySelector('.links');

// toggleBtn.onclick = function() {
//     // linksContainer.classList.toggle('show-links');
//     const LinksContainerHeight = linksContainer.getBoundingClientRect().height;
//     const linksHeight = links.getBoundingClientRect().height;

//     if (LinksContainerHeight === 0) {
//         linksContainer.style.height = `${linksHeight}px`;
//     } else {
//         linksContainer.style.height = 0;
//     }
// };

// // fixded navbar
// const navbar = document.getElementById('nav');
// const topLink = document.querySelector('.top-link');


// window.addEventListener('scroll', function() {
//     const scrollHeight = window.pageYOffset;    
//     const navbarHeight = navbar.getBoundingClientRect().height;

//     if (scrollHeight > navbarHeight ) {
//         navbar.classList.add('fixed-nav')
//     } else {
//         navbar.classList.remove('fixed-nav')
//     }

//     if (scrollHeight > 500 ) {
//         topLink.classList.add('show-link');
//     } else {
//         topLink.classList.remove('show-link');
//     }
// });

// // select links

// const scrollLinks = document.querySelectorAll('.scroll-link');

// scrollLinks.forEach(function(link) {
//     link.onclick = function(e) {
//         e.preventDefault()

//         const id = e.currentTarget.getAttribute('href').slice(1);
//         const elementLink = document.getElementById(id);
//         const navbarHeight = navbar.getBoundingClientRect().height;
//         const linksContainerHeight = linksContainer.getBoundingClientRect().height;
//         const fixded = navbar.classList.contains('fixed-nav');
//         let position = elementLink.offsetTop - navbarHeight
//         if (!fixded) {
//             position = position - navbarHeight
//         }
//         if (navbarHeight > 82 ) {
//             position = position + linksContainerHeight
//         }

//         window.scrollTo({
//             left: 0,
//             top: position
//         })
//         linksContainer.style.height = 0;
//     }
// })