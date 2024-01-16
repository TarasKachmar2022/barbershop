const phoneInputEl = document.querySelector('#phone');

const mask = new IMask(phoneInputEl, {
  mask: '+{38}(000)000-00-00',
});
