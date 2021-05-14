function load_image(img) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "uau.png")
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
}
function load() {
    console.log("ABC")
    load_image(document.getElementById("teste"))
    console.log(img.id)
}

document.getElementById("botao").onclick = load

