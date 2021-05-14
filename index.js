function load_image(img) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "uau.png", true)
    xhr.responseType = "blob"
    
    xhr.onreadystatechange = function(e) {
        console.log('kkk')
        if (xhr.status == 200) {
            var blob = xhr.response
            console.log(typeof blob)
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
