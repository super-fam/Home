(function ($) { window.fnames = new Array(); window.ftypes = new Array(); fnames[1] = 'NAME'; ftypes[1] = 'text'; fnames[0] = 'EMAIL'; ftypes[0] = 'email'; fnames[4] = 'PHONE'; ftypes[4] = 'phone'; }(jQuery)); var $mcj = jQuery.noConflict(true);

// Subscribe Popup
$('.open__beta-access').click(function () {
    $('.modal__beta-access').addClass('open')
})
$('.close__beta-access').click(function () {
    $('.modal__beta-access').removeClass('open')
    $('.form-main__box').css('display', 'flex');
    $('.form-thanks__box').hide();
})

// Form Validation
// Wait for the DOM to be ready
$(function () {
    $("form[name='mc-embedded-subscribe-form']").validate({
        rules: {
            EMAIL: {
                required: true,
                email: true
            },
            PHONE: {
                required: true,
                minlength: 10
            },
        },
        messages: {
            NAME: "Please enter your Name",
            PHONE: {
                required: "Please enter your mobile number",
                minlength: "Enter a 10 digit mobile number"
            },
            EMAIL: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        submitHandler: function (form) {
            $(this).find('.submit').prop('disabled', true);
            var mc1Submitted = false;
            jQuery('#mc-embedded-subscribe-form').on('submit reset', function (event) {
                if ("submit" === event.type) {
                    mc1Submitted = true;
                } else if ("reset" === event.type && mc1Submitted) {
                    $('.form-main__box').hide();
                    $('.form-thanks__box').css('display', 'flex');
                }
            });
        }
    });
});
$('#mc-embedded-subscribe-form').on('blur keyup change', 'input', function (event) {
    if ($("#mc-embedded-subscribe-form").valid()) {
        $('#submit').prop('disabled', false);
    } else {
        $('#submit').prop('disabled', 'disabled');
    }
});

const swiper = new Swiper('.swiper', {
    speed: 5000,
    slidesPerView: 3.5,
    spaceBetween: 0,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    }
});
const swiperTopBottom = new Swiper('.swiper-top-bottom', {
    speed: 5000,
    slidesPerView: 3.5,
    reverseDirection: true,
    spaceBetween: 0,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    }
});
const swiperBottomFirst = new Swiper('.swiper-bottom-first', {
    speed: 5000,
    slidesPerView: 3.5,
    spaceBetween: 0,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    }
});
const swiperBottomSecond = new Swiper('.swiper-bottom-second', {
    speed: 5000,
    slidesPerView: 3.5,
    reverseDirection: true,
    spaceBetween: 0,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    }
});