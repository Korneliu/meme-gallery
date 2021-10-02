var imageUrls = [];

var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');


addImageButton.addEventListener('click', function(){

  if (imageUrlInput.value.length > 1) {
    imageUrls.push(imageUrlInput.value);
  } else {
    alert('Please type something')
  }
  imageUrlInput.value = '';

});
