
baguetteBox.run('.tz-gallery');
$(document).ready(function () {
    first_image_path =
        document.getElementsByClassName("tz-gallery")[0]
            .children[0]
            .children[0].getElementsByTagName("img")[0]
            .getAttribute("src")
    document.getElementById("header").style.background =
        "linear-gradient(rgba(0, 0, 0, 0.2), " +
        "rgba(0, 0, 0, 0.2)), url('" + first_image_path + "') repeat scroll 70% 60%";
});