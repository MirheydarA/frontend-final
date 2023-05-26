const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".fa-eye-slash"),
      pwFields = document.querySelectorAll(".password")

    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-eye-slash", "fa-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-eye", "fa-eye-slash");
                    })
                }
            }) 
        })
    })

    const emailInput = document.getElementById('email');
    const validationMessage = document.getElementById('validationMessage');

    emailInput.addEventListener('keyup', function() {
      const email = emailInput.value;
      const isValid = validateEmail(email);

      if (isValid) {
        // validationMessage.textContent = 'Valid email address';
        validationMessage.style.color = 'green';
        emailInput.classList.remove('error');
      } else {
        // validationMessage.textContent = 'Invalid email address';
        validationMessage.style.color = 'red';
        emailInput.classList.add('error');
      }
    });

    function validateEmail(email) {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    
    const passwordInput = document.getElementById('passwordInput');
    // const validationMessage = document.getElementById('validationMessage');

    passwordInput.addEventListener('keyup', function() {
      const password = passwordInput.value;
      const isValid = validatePassword(password);

      if (isValid) {
        // validationMessage.textContent = 'Valid password';
        validationMessage.style.color = 'green';
        passwordInput.classList.remove('error');
      } else {
        // validationMessage.textContent = 'Invalid password';
        validationMessage.style.color = 'red';
        passwordInput.classList.add('error');
      }
    });

    function validatePassword(password) {
      // Password must be at least 8 characters long
      // and contain at least one uppercase letter, one lowercase letter, and one digit
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return passwordRegex.test(password);
    }
    
