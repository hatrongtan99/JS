const btns = document.querySelectorAll('.tab-btn');

btns.forEach(function(btn) {
    btn.onclick = function(e) {
        const id = e.currentTarget.dataset.id
        const elementContent = document.getElementById(id);
        document.querySelector('.tab-btn.active').classList.remove('active');
        document.querySelector('.content.active').classList.remove('active');

        elementContent.classList.add('active')
        btn.classList.add('active')
    }
});