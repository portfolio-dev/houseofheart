// title on browser tab running
function tabRunning() {
var titleText = "House of Heart - Rumah Singgah Khusus Pasien PJB Anak ";
        var speed = 500; // Kecepatan perubahan (ms)
        var i = 0;

        function animateTitle() {
            document.title = titleText.substring(i) + titleText.substring(0, i);
            i++;
            if (i > titleText.length) {
                i = 0;
            }
            setTimeout(animateTitle, speed);
        }

        animateTitle();
};
document.addEventListener("DOMContentLoaded", tabRunning);

// redirect link
function handleClick(link, newTab) {
    if (newTab) {
        window.open(link, '_blank');
    } else {
        window.location.href = link;
    }
};

function toggleDisplay(elementId) {
    var elements = ['homepage', 'about', 'services', 'facilities', 'finance'];

    for (var i = 0; i < elements.length; i++) {
        var element = document.getElementById(elements[i]);
        element.style.display = (elements[i] === elementId) ? 'flex' : 'none';
    }
}

function about() {
    toggleDisplay('about');
}

function services() {
    toggleDisplay('services');
}

function facilities() {
    toggleDisplay('facilities');
}

function finance() {
    window.location.href = link;
}

// menu-toggler auto close
function menuToggler() {
    var menuToggle = document.getElementById('menu-toggler');
    var menuItems = document.querySelectorAll('.all-links a');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            if(!item.classList.contains('noToggle')) {
                menuToggle.checked = false;
            }
        });
    });
};
document.addEventListener("DOMContentLoaded", menuToggler);
