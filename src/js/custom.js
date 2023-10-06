
// Subscribe Popup
$('.open__beta-access').click(function () {
    $('.modal__beta-access').addClass('open')
})
$('.close__beta-access').click(function () {
    $('.modal__beta-access').removeClass('open')
    $('.form-main__box').css('display', 'flex');
    $('.form-thanks__box').hide();
})
$('.alright__btn').click(function () {
    location.reload();
})
$('.back__btn').click(function(){
    $('.form-main__box').css('display', 'flex');
    $('.form-error__box').hide();
})
// Form Validation
// Wait for the DOM to be ready
$(function () {
    $("form[name='betaForm']").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone_number: {
                required: true,
                minlength: 10
            },
        },
        messages: {
            username: "Please enter your Name",
            phone_number: {
                required: "Please enter your mobile number",
                minlength: "Enter a 10 digit mobile number"
            },
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        submitHandler: function (form) {
            $('.form-save').addClass('spinner-on');
            // New form submission
            var frm = $('#betaForm');
                $.ajax({
                    type: frm.attr('method'),
                    url: frm.attr('action'),
                    // data: frm.serialize(),
                    data: JSON.stringify({
                        "name": username.value,
                        "email": email.value,
                        "phone_number": Number(phone_number.value),
                        "is_chat_ready": is_chat_ready.value,
                        "is_subscribe_whatsapp": is_subscribe_whatsapp.value
                    }),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        $('.form-main__box').hide();
                        $('.form-thanks__box').css('display', 'flex');
                        document.getElementById("betaForm").reset();
                        $('#error-responses').css('display', 'none');
                        $(this).find('.submit').prop('disabled', true);
                        $('.form-save').removeClass('spinner-on');
                    },
                    error: function (data) {
                        $('.form-main__box').hide();
                        $('.form-error__box').css('display', 'flex');
                        $('.form-error__box p').html(data.responseJSON.message);
                        $('.form-save').removeClass('spinner-on');
                    },
                });
            // New form submission end
            $(this).find('.submit').prop('disabled', true);
        }
    });
});



$('#email' && '#phone_number').on('blur', function() {
    if ($("#betaForm").valid()) {
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
        disableOnInteraction: false
    }
});
const swiperTopBottom = new Swiper('.swiper-top-bottom', {
    speed: 5000,
    slidesPerView: 3.5,
    reverseDirection: true,
    spaceBetween: 0,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    }
});
const swiperBottomFirst = new Swiper('.swiper-bottom-first', {
    speed: 5000,
    slidesPerView: 3.5,
    spaceBetween: 0,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    }
});
const swiperBottomSecond = new Swiper('.swiper-bottom-second', {
    speed: 5000,
    slidesPerView: 3.5,
    reverseDirection: true,
    spaceBetween: 0,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    }
});


$('#is_subscribe_whatsapp').val($(this).is(':checked')); 
$('#is_subscribe_whatsapp').click(function() { 
    $('#is_subscribe_whatsapp').val($(this).is(':checked')); 
}); 


$('#is_chat_ready').val($(this).is(':checked')); 
$('#is_chat_ready').click(function() { 
    $('#is_chat_ready').val($(this).is(':checked')); 
}); 