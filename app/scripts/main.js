
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
  var r = /^\w+@\w+\.\w{2,4}$/i;

  resetError(elems.FirstName.parentNode);
  if (!elems.FirstName.value) {
    showError(elems.FirstName.parentNode, ' Please enter First Name');
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
  } else if (!r.test(elems.Email.value)) {
    showError(elems.Email.parentNode, ' Wrong Email');
    errorVal = 1;
  }

  console.log('errorval ' + errorVal);
/*  console.log('obj: ' + finObject.ava);*/

  if (errorVal == 0) {
    finObject.FirstName = elems.FirstName.value;
    finObject.LastName = elems.LastName.value;
    finObject.Phone = elems.Phone.value;
    finObject.AboutMe = elems.AboutMe.value;
    finObject.Gender = elems.Gender.value;
    finObject.Country = elems.Country.value;
    finObject.Email = elems.Email.value;
    finObject.Password = elems.Password.value;
    /*for (var i in finObject){
      console.log( i + ' : ' + finObject[i]);
    }*/
    var strJson = JSON.stringify(finObject);
    console.log(strJson);
  }


}



