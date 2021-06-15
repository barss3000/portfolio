const burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});
close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const persent = document.querySelectorAll('.attainments__scales-persent'),
    lines = document.querySelectorAll('.attainments__scales-line span');

persent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


$(document).ready(function () {

    //smooth scroll and page up
    //pageup     появление значка для скролла вверх
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 1600) {
    //         $('.pageup').fadeIn();
    //     } else {
    //         $('.pageup').fadeOut();
    //     }
    // });

    //универсальный скрипт для плавного скрола по сайту
    // $("a[href=#up]").click(function () {   // "a[href^='#']" такая запись указывает на все ссылки а надо только на одну
    //     const _href = $(this).attr("href");
    //     $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    //     return false;
    // });

    $('.modal__close').on('click', function () {
        $('.overlay, #thanks').fadeOut('slow');
    });

    //скрипт дляотправление писем с сайта через SMTP сервер
    $('form').submit(function (e) {        // выбираем все формы  submit-подтверждение заполнения формы функция с аргументом event
        e.preventDefault();               // отмена дефолтного поведения браузера
        $.ajax({                          // применение технологии ajax и настройка работы
            type: "POST",                 // тип - отправка ()
            url: "mailer/smart.php",      // устанавливаем обработчика операции
            data: $(this).serialize()     // выбор данных для передачи и их подготовка для сервера
        }).done(function () {
            $(this).find("input").val(""); // функция очищения инпутов после отправки
            // $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');     // очистка всех форм
        });
        return false;
    });

});





