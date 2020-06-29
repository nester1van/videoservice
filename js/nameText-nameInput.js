(function(){
  const nameText = document.getElementById('name-text');
  const nameInput = document.getElementById('name-input');

  window.onload = function() {
    if (typeof localStorage.getItem('name') != 'string') {
      localStorage.setItem('name', '');
    }
    let name = localStorage.getItem('name');
    nameText.innerHTML = name;
    nameInput.value = name;
  }

  nameText.addEventListener('click', hideNameTextShowNameInput);
  function hideNameTextShowNameInput() {
    nameText.style.display = 'none';
    nameInput.style.display = 'inline';
    nameInput.focus();
  }

  nameInput.addEventListener('input', updateName);
  function updateName(e) {
    let value = e.target.value;
    nameText.innerHTML = value;
    localStorage.setItem('name', value);
  }

  nameInput.addEventListener('focusout', hideNameInputShowNameText);
  function hideNameInputShowNameText() {
    nameInput.style.display = 'none';
    nameText.style.display = 'inline-block';
  }

  nameInput.addEventListener('keyup', hideNameInputShowNameTextByEnter);
  function hideNameInputShowNameTextByEnter(e) {
    if (e.keyCode == 13) hideNameInputShowNameText();
  }

})();