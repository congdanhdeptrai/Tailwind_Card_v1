document.querySelector('._kuromi_card').addEventListener('mouseenter', function () {
    let target = document.querySelector('._kuromi_op');

    target.classList.add('active-1');

    setTimeout(function () {
        target.classList.add('active-2');
    }, 100);
}, false);

document.querySelector('._kuromi_card').addEventListener('mouseleave', function () {
    let target = document.querySelector('._kuromi_op');

    target.classList.remove('active-2');

    setTimeout(function () {
        target.classList.remove('active-1');
    }, 350);
}, false);