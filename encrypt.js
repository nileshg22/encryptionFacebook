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
    check_Button = document.getElementById('checkButton');
    check_Button.style.visibility="visible";
    url_text = document.getElementById('urlText');
    url_text.placeholder="new url";
  }




  // Handling the action following the click of the "encode" button
  document.getElementById('encodeButton').addEventListener('click', encodeHandler);
  function encodeHandler() {
    if (document.getElementbyId('urlText').value != NULL || document.getElementbyId('urlText').value != "") {
        // document.getElementbyId('urlText').value
    }
  }
  // Done






};
