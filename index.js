/*
function load_image(img) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "uau.png", true)
    xhr.responseType = "blob"
    
    xhr.onreadystatechange = function(e) {
        console.log('kkk')
        if (xhr.status == 200) {
            var blob = xhr.response
            var reader = new FileReader()
            reader.readAsDataURL(xhr.response)
            img.src = reader.result
        }
    }
    xhr.send()
    console.log("XYZ")
}
*/

function load_image(img) {
    var reader = new FileReader()
    fetch('uau.jpg')
    .then(function(response) {
      return response.blob();
    })
    .then(function(myBlob) {
      var objectURL = URL.createObjectURL(myBlob);
      img.src = objectURL;
    });
}
function load() {
    console.log("ABC")
    var img = document.getElementById("teste")
    console.log(img.id)
    load_image(img)
}

document.getElementById("botao").onclick = load
