const btnThumb = document.querySelector("#btn-thumb");
const btnHeart = document.querySelector("#btn-heart");

const imgThumb = btnThumb.querySelector("img");

btnThumb.addEventListener("click", () => {
    if (!btnThumb.classList.contains("btn-thumb")) {
        btnThumb.classList.add("btn-thumb");
        imgThumb.setAttribute("src", "./src/img/icon_thumbsup_blue.png");
    } else {
        btnThumb.classList.remove("btn-thumb");
        imgThumb.setAttribute("src", "./src/img/icon_thumbs-up.png");
    }
});

btnHeart.addEventListener("click", () => {
    console.log("test");
});
