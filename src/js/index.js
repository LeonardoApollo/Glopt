'use strict';
$(document).ready(function(){

    //Плавная прокрутка
    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    //Слайдер
    $(".owl-carousel").owlCarousel({
        center: true,
        items:3,
        mouseDrag: false,
        loop: true,
        startPosition: 1,
        nav: true,
        navText: true,
        slideTransition: 'ease-out',
        smartSpeed: 1000,
        margin: 115
    });

    let owlnav = $(".owl-nav"),
        owlprev = $(".owl-prev"),
        owlnext = $(".owl-next");
    owlprev.click(function() {
        owlnav.addClass('active');
        function owldelete() {
            owlnav.removeClass('active');
        }
        setTimeout(owldelete, 1000);
    });
    owlnext.click(function() {
        owlnav.addClass('active');
        function owldelete() {
            owlnav.removeClass('active');
        }
        setTimeout(owldelete, 1000);
    });

    //Валидация
    $('.consultation__form').validate({
		rules: {
            name: {
                required: true,
                minlength: 3
            },
            phone: {
                required: true,
                number: true 
            },
            email: {
				required: true,
				email: true
				},
			chekbox: {
				required: true,
			}
		},
		messages: {
			name: "Неверное имя",
			email: {
				required: "Введите свою почту",
				email: "Неверный адрес почты"
			},
            phone: {
                required: "Введите номер телефона",
                phone: "Неверный номер телефона"
            },
			checkbox: 'Подтвердите обработку персональных данных',
		}
	});

    $('.question__form').validate({
		rules: {
            name: {
                required: true,
                minlength: 3
            },
            phone: {
                required: true,
                number: true 
            },
            email: {
				required: true,
				email: true
				},
			chekbox: {
				required: true,
			}
		},
		messages: {
			name: "Неверное имя",
			email: {
				required: "Введите свою почту",
				email: "Неверный адрес почты"
			},
            phone: {
                required: "Введите номер телефона",
                phone: "Неверный номер телефона"
            },
			checkbox: 'Подтвердите обработку персональных данных',
		}
	});

    //Отправка письма через mailer php
    $('form').submit(function(e) {
        e.preventDefault();
        
        if (!$(this).valid()) {
			return;
		}

		$.ajax({
			type: "POST",
			url: "smart.php",
			data: $(this).serialize()
		})
        +prompt('Ваше сообщение успешно отправлено!');
        form.reset();
    });

});