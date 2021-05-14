function load_image(img) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "uau.png", true)
    xhr.responseType = "blob"
    
    xhr.onreadystatechange = function(e) {
        console.log('kkk')
        if (xhr.status == 200) {
            var blob = xhr.response
            var reader = new FileReader()
            console.log(typeof blob)
            img.src = reader.readAsDataURL(blob)
        }
    }
    xhr.send()
    console.log("XYZ")
}
function load() {
    console.log("ABC")
    var img = document.getElementById("teste")
    console.log(img.id)
    load_image(img)
}

document.getElementById("botao").onclick = load
