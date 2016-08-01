
$("#Gender").select2();
$("#Country").select2();

var finObject = {};
var errorVal = 0;


// Get Avatar in base64
var handleFileSelect = function(evt) {
  var files = evt.target.files;
  var file = files[0];

  if (files && file) {
    var reader = new FileReader();
    reader.onload = function(readerEvt) {
      var binaryString = readerEvt.target.result;
      finObject.Avatar = btoa(binaryString);
    };
    reader.readAsBinaryString(file);
  }

};

if (window.File && window.FileReader && window.FileList && window.Blob) {
  document.getElementById('Avatar').addEventListener('change', handleFileSelect, false);
} else {
  alert('The File APIs are not fully supported in this browser.');
}



// Validation
function showError(container, errorMessage) {
  container.className = 'error';
  var msgElem = document.createElement('span');
  msgElem.className = "error-message";
  msgElem.innerHTML = errorMessage;
  container.appendChild(msgElem);
}

function resetError(container) {
   container.className = '';
  if (container.lastChild.className == "error-message") {
    container.removeChild(container.lastChild);
  }
}

function validate(form) {
  errorVal = 0;
  var elems = form.elements;
  var rEmail = /^\w+@\w+\.\w{2,4}$/i;
  var rLetters = /^[a-z]{0,20}$/i;
  var rNumbers = /^\d{0,14}$/;


  resetError(elems.FirstName.parentNode);
    if (!elems.FirstName.value) {
    showError(elems.FirstName.parentNode, ' Please enter First Name');
    errorVal = 1;
  } else if (!rLetters.test(elems.FirstName.value)) {
    showError(elems.FirstName.parentNode, ' Only letters should be');
    errorVal = 1;
  }

  resetError(elems.LastName.parentNode);
  if (!rLetters.test(elems.LastName.value)) {
    showError(elems.LastName.parentNode, ' Only letters should be');
    errorVal = 1;
  }

  resetError(elems.Phone.parentNode);
  if(!rNumbers.test(elems.Phone.value)) {
    showError(elems.Phone.parentNode, ' Only numbers should be');
    errorVal = 1;
  }

  resetError(elems.Gender.parentNode);
  if (!elems.Gender.value) {
    showError(elems.Gender.parentNode, ' Enter Gender');
    errorVal = 1;
  }

  resetError(elems.Email.parentNode);
  if (!elems.Email.value) {
    showError(elems.Email.parentNode, ' Enter Email');
    errorVal = 1;
  } else if (!rEmail.test(elems.Email.value)) {
    showError(elems.Email.parentNode, ' Wrong Email');
    errorVal = 1;
  }

  if (errorVal == 0) {
    finObject.FirstName = elems.FirstName.value;
    finObject.LastName = elems.LastName.value;
    finObject.Phone = elems.Phone.value;
    finObject.AboutMe = elems.AboutMe.value;
    finObject.Gender = elems.Gender.value;
    finObject.Country = elems.Country.value;
    finObject.Email = elems.Email.value;
    finObject.Password = elems.Password.value;

    var strJson = JSON.stringify(finObject);
    console.log(strJson);
  }
}



