var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://static.boredpanda.com/blog/wp-content/uploads/2020/03/funny-animals-photoshopped-cats-koty-vezde-fb50-png__700.jpg',
  'https://www.pennlive.com/resizer/l4HsQr4JHKsKyYdiOIAHOEmXAHc=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/63IGRUTR5VDMFCRZWETENQM2UQ.jpg'

];

var gallery = document.querySelector('main');
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');


addImageButton.addEventListener('click', function() {
  if (imageUrlInput.value.length > 1) {
    imageUrls.push(imageUrlInput.value);
  } else {
    alert('Please type something')
  }
  imageUrlInput.value = '';
  upDateGallery();
});

function upDateGallery() {
  gallery.innerHTML='';
  for (var i = 0; i < imageUrls.length; i++) {
  var imageElement = document.createElement('img');
  imageElement.className=("gallery-image");
  imageElement.src =(imageUrls[i]);
  gallery.appendChild(imageElement)
  }
};

upDateGallery();
