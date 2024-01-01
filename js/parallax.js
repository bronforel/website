window.addEventListener('DOMContentLoaded', function() {
    var articleElements = document.querySelectorAll('.full-height-panel');
    var articleBackgrounds = document.querySelectorAll('.background-image-panel');

    var lastKnownScrollPosition = 0;
    var ticking = false;

    function updateBackgroundPosition() {
        var currentScrollPosition = window.scrollY || window.pageYOffset;
        var scrollDifference = currentScrollPosition - lastKnownScrollPosition;

        articleBackgrounds.forEach(function(background) {
            var speed = parseFloat(background.getAttribute('data-speed'));

            var translateY = parseFloat(background.style.transform.replace(/[^0-9.-]+/g, '')) || 0;
            translateY += scrollDifference * speed;

            background.style.transform = 'translateY(' + translateY + 'px)';
        });

        lastKnownScrollPosition = currentScrollPosition;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateBackgroundPosition);
            ticking = true;
        }
    });

    // Koppel de juiste snelheid aan elk achtergrondelement
    articleElements.forEach(function(article, index) {
        var speed = index % 2 === 0 ? 0.5 : 1; // Pas de snelheid aan naar wens
        var background = article.querySelector('.background-image-panel');
        background.setAttribute('data-speed', speed);

        // Zorg ervoor dat de achtergrond niet zichtbaar is totdat het artikel in beeld komt
        background.style.opacity = '1';
    });
});