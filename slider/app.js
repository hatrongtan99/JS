const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');


slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let count = 0;

nextBtn.onclick = function() {
    count++;
    carousel();
    
};

prevBtn.onclick = function() {
    count--;
    carousel();
    
};

function carousel() {
    if (count > slides.length - 1) {
        count = 0;
    }
    if (count < 0) {
        count = slides.length - 1;
    }
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${count * 100}%)`
    })
}