
const openPopUp = document.querySelector('.open__popUp');
const closePopUp = document.getElementById('popUp__close');
const popUp = document.getElementById('popUp');
const popUpBody = document.querySelector('.popup__body');
const popUpContainer = document.querySelector('.popup__container');

document.addEventListener('DOMContentLoaded', () => {
  openPopUp.addEventListener('click', (e) => {
    e.preventDefault();
    /*
    Управление историей стрелками в браузере
    window.onpopstate = function () {
      window.history.back();
       popUp.classList.remove('active');
     };*/
    history.pushState(null, null, 'pop');
    popUp.classList.add('active');
  });
  closePopUp.addEventListener('click', () => {
    history.back();
    popUp.classList.remove('active');
  })
  $(function () {
    $(".ajaxForm").submit(function (e) {
      e.preventDefault();
      var href = $(this).attr("action");
      $.ajax({
        type: "POST",
        dataType: "json",
        url: href,
        data: $(this).serialize(),
        success: function (response) {
          if (response.status == "success") {
            alert("Ваше обращение получено, спасибо!");
            form.reset();
            history.back();
            popUp.classList.remove('active');
          } else {
            alert("Ошибка отправки: " + response.message);
          }
        }
      });
    });
  });
});
