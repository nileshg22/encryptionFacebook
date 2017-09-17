window.onload = function() {

  // Manipulating the upload button to allow it to open files
  document.getElementById('uploadButton').addEventListener('click', imageUpload);

  function imageUpload() {
        document.getElementById('tempFile').click();
  }
  // Done


  // Pushing the new file to the image
  function updateImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById('myPicture').src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
  }
  document.getElementById('tempFile').addEventListener('change', function() {
    updateImage(this);
  });
  // Done

  document.getElementById('encodeButton').addEventListener('click', makeCheckGreatAgain);

  function makeCheckGreatAgain() {
    if ($('#urlText').val() != null && $('#urlText').val() != "") {
      check_Button = document.getElementById('checkButton');
      check_Button.style.visibility="visible";
      url_text = document.getElementById('urlText');
      url_text.placeholder="new url";



      var form = new FormData();
      form.append("hash", url_text.value);
      form.append("image", document.getElementById('tempFile').files[0]);
      form.forEach(console.log)

      // $.post('localhost:3000/encode', form);
      $.ajax({
        url: 'http://localhost:3000/encode',
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function(ret, status) {
		if (ret == 'False') {
			alert('ERROR: Bad image detected');
		}
		else {
			document.getElementById('myPicture').setAttribute('src',  'data:img/png;base64,' + ret)
		}
        }});
    }
  else {
      alert("Please enter a URL");
    }
  }


// image file and hash profile URL
// /encode and /testa


};
