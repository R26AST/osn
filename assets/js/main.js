/*=============== DISABLE BACK ===============*/
function preventBack() { 
	window.history.forward();  
} 
setTimeout("preventBack()", 0); 
window.onunload = function () { null };

/*=============== SHOW HIDE - LOGIN & REGISTER FORM ===============*/
const loginForm = document.getElementById('login-form'),
  registerForm = document.getElementById('register-form'),
  loginBtn = document.getElementById('login-btn'),
  registerBtn = document.getElementById('register-btn');

/*===== SHOW REGISTER =====*/
/* Validate if constant exists */
if (registerBtn) {
  registerBtn.addEventListener('click', () => {
    loginForm.classList.remove('form-active');
    registerForm.classList.add('form-active');
  });
}

/*===== SHOW LOGIN =====*/
/* Validate if constant exists */
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    loginForm.classList.add('form-active');
    registerForm.classList.remove('form-active');
  });
}

/*=============== SHOW HIDE - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener('click', () => {
    // change password to text
    if (input.type === 'password') {
      // switch to text
      input.type = 'text';

      // icon change
      iconEye.classList.add('ri-eye-line');
      iconEye.classList.remove('ri-eye-off-line');
    }
    else {
      // change to password
      input.type = 'password';

      // icon change
      iconEye.classList.remove('ri-eye-line');
      iconEye.classList.add('ri-eye-off-line');
    }
  });
};

showHiddenPass('login-pass', 'login-eye');
showHiddenPass('register-pass', 'register-eye');


$('.submit').click(function () {
  if($('.user').val() == '') {
    $('.user').focus();
  }
  else if($('.pass').val() == '') {
    $('.pass').focus();
  }
  else {
			$('.submit').prop('disabled',true);
			$.ajax({
			type: 'GET',
			url: 'https://r26ast.github.io/CBT/json/login.json',
			dataType: 'json',
				success: function(maindata) {
					if(maindata) {
						var userData = _.find(maindata, ["user", ""+ $('.user').val() +""]);
						if(typeof userData != "undefined") {
							if($('.pass').val() == userData["password"]) {
								console.log("success");
								success('Anda berhasil masuk');
								Cookies.set('user', userData["user"], { expires: 365 });
								cekCookie();
								setTimeout(function() {window.location.replace('dasbor');}, 2301);
								
							}
							else {
								console.log("error pass");
								error('Username atau password salah');
							}
						}
						else {
							console.log("error user");
							error('Username atau password salah');
						}
					}
				},
				error: function() {
					error('Terjadi kesalahan dalam konektivitas');
				}
			});		
		}
});

function cekCookie() {
  let log = Cookies.get('pertamaLogin');
  if (typeof log != "undefined") {
    Cookies.set('pertamaLogin', new Date());
  } else {
    Cookies.set('terakhirLogin', new Date(), { expires: 365 });
  }
}
