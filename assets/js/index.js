function show_img_bacground(parent) {
    var path = parent.getElementsByTagName("img")[0].getAttribute("src");
    document.getElementById("header").style.background = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('" + path + "') repeat scroll 70% 60%";
    document.getElementById("header").classList.add("bg_image")
}

function hide_img_bacground() {
    document.getElementById("header").style.background = "darkgray";
    document.getElementById("header").classList.remove("bg_image");
}