let imageThumbs = document.getElementById("thumbs");
for (let i = 1; i <= 10; i++) {
    let thumb = document.createElement("img");
    thumb.src = "images/image" + i + ".jpg";
    thumb.alt = "Image " + i;
}
thumb.classList.add("thumb");