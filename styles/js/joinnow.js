
  // const optionMenu = document.querySelector(".select-menu"),
  //   selectBtn = optionMenu.querySelector(".select-btn"),
  //   options = optionMenu.querySelectorAll(".option"),
  //   sBtn_text = optionMenu.querySelector(".sBtn-text");

  // selectBtn.addEventListener("click", () =>
  //   optionMenu.classList.toggle("active")
  // );

  // options.forEach((option) => {
  //   option.addEventListener("click", () => {
  //     let selectedOption = option.querySelector(".option-text").innerText;
  //     sBtn_text.innerText = selectedOption;

  //     optionMenu.classList.remove("active");
  //   });
  // });

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
///////////////////////////////////////////////////

const nameInput = document.getElementById("nameInput");
    const validationMessage = document.getElementById('validationMessage');

    nameInput.addEventListener('keyup', function() {
      const name = nameInput.value;
      const isValid = validateName(name);

      if (isValid) {
        validationMessage.textContent = '';
        validationMessage.style.color = 'green';
        nameInput.classList.remove('error');
        nameInput.style.borderColor = "green"
        nameInput.style.borderWidth = "2px"
      } else {
        validationMessage.textContent = 'x Enter your first name';
        validationMessage.style.color = 'red';
        nameInput.classList.add('error');
        nameInput.style.borderColor = "red"
        nameInput.style.borderWidth = "2px"
      }
    });

    function validateName(name) {
      // Name can only contain alphabetic characters and spaces
      const nameRegex = /^[A-Za-z\s]+$/;
      return nameRegex.test(name);
    }
///////////////////////////////////////////////////////////
    const nameInput2 = document.getElementById("nameInput2");
    const validationMessage2 = document.getElementById('validationMessage2');

    nameInput2.addEventListener('keyup', function() {
      const name = nameInput2.value;
      const isValid = validateName(name);

      if (isValid) {
        validationMessage2.textContent = '';
        validationMessage2.style.color = 'green';
        nameInput2.style.borderColor = "green"
        nameInput2.style.borderWidth = "2px"
        nameInput2.classList.remove('error');
      } else {
        validationMessage2.textContent = 'x Enter your last name';
        validationMessage2.style.color = 'red';
        nameInput2.classList.add('error');
        nameInput2.style.borderColor = "red"
        nameInput2.style.borderWidth = "2px"
      }
    });

    function validateName(name) {
      // Name can only contain alphabetic characters and spaces
      const nameRegex = /^[A-Za-z\s]+$/;
      return nameRegex.test(name);
    }

///////////////////////////////////////////////////////////
    const emailInput = document.getElementById('emailInput');
    const validationMessageemail = document.getElementById('validationMessageemail');

    emailInput.addEventListener('keyup', function() {
      const email = emailInput.value;
      const isValid = validateEmail(email);

      if (isValid) {
        validationMessageemail.textContent = '';
        validationMessageemail.style.color = 'green';
        emailInput.classList.remove('error');
        emailInput.style.borderColor = "green"
        emailInput.style.borderWidth = "2px"
      } else {
        validationMessageemail.textContent = 'x Please enter a valid email address.';
        validationMessageemail.style.color = 'red';
        emailInput.classList.add('error');
        emailInput.style.borderColor = "red"
        emailInput.style.borderWidth = "2px"
      }
    });

    function validateEmail(email) {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }


///////////////////////////////////////////////////////////
const passwordInput = document.getElementById('passwordInput');
    const validationMessagepassword = document.getElementById('validationMessagepassword');

    passwordInput.addEventListener('keyup', function() {
      const password = passwordInput.value;
      const isValid = validatePassword(password);

      if (isValid) {
        validationMessagepassword.textContent = 'Valid password';
        validationMessagepassword.style.color = 'green';
        passwordInput.classList.remove('error');
        passwordInput.style.borderColor = "green"
        passwordInput.style.borderWidth = "2px"
      } else {
        validationMessagepassword.textContent = 'Invalid password';
        validationMessagepassword.style.color = 'red';
        passwordInput.classList.add('error');
        passwordInput.style.borderColor = "red"
        passwordInput.style.borderWidth = "2px"
      }
    });

    function validatePassword(password) {
      // Password must be at least 8 characters long
      // and contain at least one uppercase letter, one lowercase letter, and one digit
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return passwordRegex.test(password);
    }




