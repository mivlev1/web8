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
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);
    
    if (error === 0) {
      let response = await fetch('https://formcarry.com/s/Ger4-7rnaWH', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
      }
      else {
        alert("Ошибка");
      }
    }
    else {
      alert("Заполните обязательные поля");
    }

  }
  function formValidate(form) {
    let error = 0;
    let formReque = document.querySelector('._reque')

    for (let i = 0; i < formReque.length; i++) {
      const input = formReque[i];
      removeError(input);
      if(input.classList.contains('_email')){
        if (emailTest(input)){
          formAddError(input);
          error++;
        }
        else if(input.getAttribute("type")==="checkbox" && input.checked === false){
          addError(input);
          error++;
        }
        else
        {
          if(input.value=== ' '){
            addError(input);
            error++;
          }
        }
      }
    }
    return error;
  }
  function addError(input) {
    input.parentElement.classList.add('_error')
    input.classList.add('_error')
  }
  function removeError(input) {
    input.parentElement.classList.remove('_error')
    input.classList.remove('_error')
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]&\w+)*(\.\w{2,8})+$/.test(input.value);
    
  }
});