const openPopUp = document.getElementById('open_popUp');
const closePopUp = document.getElementById('popUp__close');
const popUp = document.getElementById('popUp');

openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('active');
  
})
closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})
document.addEventListener('DOMContentLoaded', function () {
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
              } else {
                alert("Ошибка отправки: " + response.message);
              }
            }
          });
        });
      });
});
$(window).on('hashchange', function (event) { //при клике на "назад" скрывать форму
  let popOverlay = g
  if (window.location.hash == "#popUp") {
    $popOverlay.fadeIn();
    $popupMainWindow.fadeIn();
  }
  else {
    if (window.location.hash != "#popUp") {
      $popOverlay.fadeOut();
      $popupMainWindow.fadeOut();
      $popThankYouWindow.fadeOut();
    }
  }
});