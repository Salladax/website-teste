function load_image(img) {
    var xhr = new XMLHttpRequest()
    xhr.responseType = "blob"
    xhr.open("GET", "uau.png")

    xhr.onload = function(e) {
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
    load_image(document.getElementById("teste"))
}

