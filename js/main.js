
  function vibration() {
   var time = 500;
   navigator.vibrate(time);
  }

  function updateColor(){
    var c = localStorage.getItem("color_scheme");
    if(c != null){
      $("body").attr("class","color-theme-"+c);
    }
  }



document.addEventListener('deviceready', function () {

  //console.log("ready...");

$("#but_take").on("click", function() {
    //alert("but_take clicked...");
    //return;
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 20,
        destinationType: Camera.DestinationType.FILE_URL
    });
});

$("#but_select").on("click", function() {
    //alert("but_select clicked...");
    //return;
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        destinationType: Camera.DestinationType.FILE_URI
    });
});

// Change image source
function onSuccess(imageData) {
    var image = document.getElementById('img');
    image.src = imageData + '?' + Math.random();;
}

function onFail(message) {
    alert('Failed because: ' + message);
}   

}, false);