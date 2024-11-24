

// Do stuff for anchor content by url
window.onload = function() {
    var currentUrl = window.location.href;
    if (currentUrl.includes('#')) {
        var anchor = currentUrl.split('#')[1];

        showOverlay(anchor);
    }
    else {
        closeOverlays();
    }
};

// Do stuff for anchor content by click link
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        var anchor = link.getAttribute('href').replace("#","");

        showOverlay(anchor);
    });
});


function goHome() {
    location.hash ? (location.hash = '', closeOverlays()) : null;
}

function showOverlay(anchor) {
    anchor && document.getElementById(anchor).classList.add("active");
}

function closeOverlays() {
    var overlays = document.querySelectorAll('.overlay-full-page');
    for (let overlay of overlays) {
        overlay.classList.remove('active');
    }
}

function createOverlayHeader(id) {
    var  header = document.createElement("div");
    header.classList.add("overlay-header");
    header.classList.add('center3');
    var headerContent = document.createElement("div");
    headerContent.classList.add("header-content");
    headerContent.innerHTML = "<div class='close'><i class='fa-solid fa-close' onclick='goHome()'></i></div>";
    console.log(document.getElementById(id));
    document.getElementById(id).prepend(header);
    header.prepend(headerContent);

}

function callMe() {
    document.location.href="tel:+31 617 144 366";
}
function mailMe() {
    document.location.href="mailto:vaarhorst@home.nl";
}
createOverlayHeader('design');
createOverlayHeader('development');