(function(){
  const btnLogin = document.getElementById('btn-login'); 
  const modalLogin = document.getElementById('modal-login');
  const loginSubmit = document.getElementById('login-submit');
  const blockLogout = document.getElementById('block-logout');
  const btnLogout = document.getElementById('btn-logout');

  btnLogin.onclick = function() {
    modalLogin.style.display = 'flex';
  }

  loginSubmit.onclick = function(e) {
    e.preventDefault();
    modalLogin.style.display = 'none';
    btnLogin.style.display = 'none';
    blockLogout.style.display = 'block';
  }
  
  btnLogout.onclick = function() {
    blockLogout.style.display = 'none';
    btnLogin.style.display = 'block';
  }

  window.onclick = function(e) {
    if (e.target == modalLogin) {
      modalLogin.style.display = 'none';
    }
  }

})();