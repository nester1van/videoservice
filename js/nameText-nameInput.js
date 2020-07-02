(function(){
  const nameInput = document.getElementById('name-input');

  window.onload = function() {
    if (typeof localStorage.getItem('name') != 'string') {
      localStorage.setItem('name', 'Константин К.');
    }
    let name = localStorage.getItem('name');
    nameInput.innerHTML = name;
    nameInput.value = name;
  }

  nameInput.addEventListener('click', hideNameTextShowNameInput);
  function hideNameTextShowNameInput() {
    nameInput.style.display = 'inline';
    nameInput.focus();
  }

  nameInput.addEventListener('input', updateName);
  function updateName(e) {
    let value = e.target.value;
    console.log(value);
    nameInput.innerHTML = value;
    localStorage.setItem('name', value);
  }

  nameInput.addEventListener('keyup', hideNameInputShowNameTextByEnter);
  function hideNameInputShowNameTextByEnter(e) {
    if (e.keyCode == 13) nameInput.blur(); //hideNameInputShowNameText();
  }

})();