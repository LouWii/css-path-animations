const hideAllContent = function() {
    document.querySelectorAll('.animation-container').forEach(e => {
        e.style.display = 'none';
    });
};

document.querySelectorAll('.sidebar button').forEach(e => {
    e.addEventListener('click', function(event) {
        hideAllContent();
        const targetName = event.target.dataset.target;
        document.querySelector('[data-name="' + targetName + '"]').style.display = 'block';
    })
});

hideAllContent();

document.querySelector('.sidebar button').click();