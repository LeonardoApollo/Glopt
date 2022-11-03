/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


$(document).ready(function () {
  let $page = $('html, body');
  $('a[href*="#"]').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });
  $('form').validate({
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
        required: true
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
      checkbox: 'Подтвердите обработку персональных данных'
    }
  });
  $('form').submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "smart.php",
      data: $(this).serialize()
    });
    window.alert('Ваше сообщение успешно отправлено!');
    form.reset();
  });
});
/******/ })()
;