function load_image(img) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "uau.png", true)
    xhr.responseType = "blob"
    
    xhr.onreadystatechange = function(e) {
        console.log(xhr.status)
        if (xhr.status == 200) {
            var blob = xhr.response
            img.onload = function(e) {
                URL.revokeObjectURL(img.src)
            }
            img.src = URL.createObjectURL(blob)
        }
    }
    console.log("XYZ")
}
function load() {
    console.log("ABC")
    var img = document.getElementById("teste")
    console.log(img.id)
    load_image(img)
}

document.getElementById("botao").onclick = load

