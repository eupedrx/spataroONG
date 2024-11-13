$(document).ready(function () {

    $(document).on("scroll", function () {
        const scrollPosition = $(this).scrollTop();
        $(".parallax").each(function () {
            const speed = $(this).data("speed");
            const yPos = -(scrollPosition * speed);
            $(this).css("transform", `translateY(${yPos}px)`);
        });
    });


    let lastScrollTop = 0;
    $(window).on("scroll", function () {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > lastScrollTop) {
            $("body").removeClass("scrolled-up").addClass("scrolled-down");
        } else {
            $("body").removeClass("scrolled-down").addClass("scrolled-up");
        }
        lastScrollTop = scrollTop;
    });


    function checkFadeIn() {
        $(".fade-in").each(function () {
            let elementTop = $(this).offset().top;
            let viewportBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < viewportBottom - 50) {
                $(this).addClass("in-view");
            }
        });
    }
    $(window).on("scroll", checkFadeIn);
    checkFadeIn();


    function initializeCarousel(carouselId, indicatorsId) {
        $(carouselId).carousel({ interval: 2000 });
        $(carouselId).on('slid.bs.carousel', function () {
            var activeIndex = $(carouselId + ' .carousel-item.active').index();
            $(indicatorsId + ' .indicator').removeClass("active");
            $(indicatorsId + ' .indicator').eq(activeIndex).addClass("active");
        });
        $(indicatorsId + ' .indicator').click(function () {
            var slideIndex = $(this).data("slide");
            $(carouselId).carousel(slideIndex);
            $(indicatorsId + ' .indicator').removeClass("active");
            $(this).addClass("active");
        });
    }
    initializeCarousel('#accessibilityCarousel', '#accessibility-indicators');
    initializeCarousel('#volunteerCarousel', '#volunteer-indicators');

    $(document).ready(function() {

        $('#aboutAccordion').on('show.bs.collapse', function (e) {

            $(e.target).prev('.accordion-header').find('.accordion-button i')
                .removeClass('fas fa-plus')
                .addClass('fas fa-minus');
        });


        $('#aboutAccordion').on('hide.bs.collapse', function (e) {

            $(e.target).prev('.accordion-header').find('.accordion-button i')
                .removeClass('fas fa-minus')
                .addClass('fas fa-plus');
        });
    });

    let isOverlayVisible = false;

setInterval(() => {
    const overlay = document.querySelector('.parallax-overlay');
    if (isOverlayVisible) {
        overlay.style.opacity = 0;
    } else {
        overlay.style.opacity = 1;
    }
    isOverlayVisible = !isOverlayVisible;
}, 4000);



});


document.addEventListener("DOMContentLoaded", function() {

    if (document.body.id === 'pagina-footer-vermelho') {

        let footer = document.getElementById('footer');


        footer.classList.add('footer-vermelho-section');


        let icons = footer.querySelectorAll('.single-cta i');
        icons.forEach(icon => {
            icon.style.color = '#e62d2d';
        });


        let subscribeButton = footer.querySelector('.subscribe-form button');
        if (subscribeButton) {
            subscribeButton.style.backgroundColor = '#e62d2d';
            subscribeButton.style.borderColor = '#e62d2d';
        }


        let headings = footer.querySelectorAll('.footer-widget-heading h3');
        headings.forEach(heading => {
            heading.style.color = '#fff';


            let style = document.createElement('style');
            style.innerHTML = `
                .footer-widget-heading h3::before {
                    background: #e62d2d; /* Traço vermelho */
                }
            `;
            document.head.appendChild(style);
        });

        let inputEmail = footer.querySelector('.subscribe-form input');
        if (inputEmail) {
            inputEmail.style.backgroundColor = '#fff';
            inputEmail.style.borderColor = '#fff';
            inputEmail.style.color = '#151414';
        }


        let copyrightLink = footer.querySelector('.copyright-text p a');
        if (copyrightLink) {
            copyrightLink.style.color = '#e62d2d';
        }
    }


$(document).ready(function() {
    function animateNumber(id, targetNumber, delay) {

        $({ countNum: 0 }).animate({ countNum: targetNumber }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
                $('#' + id).text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#' + id).text(targetNumber);
            }
        });
    }


    const numbers = [
        { id: 'number1', target: 400 },
        { id: 'number2', target: 2000 },
        { id: 'number3', target: 10000 },
        { id: 'number4', target: 37 },
        { id: 'number5', target: 3 }
    ];


    numbers.forEach((item, index) => {
        setTimeout(() => {
            animateNumber(item.id, item.target, index * 500);
        }, index * 500);
    });
});

});
document.addEventListener("DOMContentLoaded", function() {
    const impactSection = document.getElementById("impact-numbers");
    const mouseCircle = document.getElementById("mouse-circle");

    impactSection.addEventListener("mouseenter", () => {
        mouseCircle.style.display = "block";
    });

    impactSection.addEventListener("mouseleave", () => {
        mouseCircle.style.display = "none";
    });

    impactSection.addEventListener("mousemove", (e) => {

        const rect = impactSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;


        mouseCircle.style.left = `${x}px`;
        mouseCircle.style.top = `${y}px`;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const eventCards = document.querySelectorAll(".event-card");

    eventCards.forEach(function(eventCard) {
      const logoImage = eventCard.querySelector(".logo-image");

      eventCard.addEventListener("mouseenter", function() {
        logoImage.style.opacity = "1";
      });

      eventCard.addEventListener("mouseleave", function() {
        logoImage.style.opacity = "0";
      });
    });
});