const btnThumb = document.querySelector("#btn-thumb");
const btnHeart = document.querySelector("#btn-heart");
const btnStar = document.querySelectorAll(".btn-star img");
const btnReset = document.querySelector(".btn-reset");

const imgThumb = btnThumb.querySelector("img");
const imgHeart = btnHeart.querySelector("img");

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
    if (!btnHeart.classList.contains("btn-heart")) {
        btnHeart.classList.add("btn-heart");
        imgHeart.setAttribute("src", "./src/img/icon_heart_white_fill.png");
    } else {
        btnHeart.classList.remove("btn-heart");
        imgHeart.setAttribute("src", "./src/img/icon_heart_white_line.png");
    }
});

let isClick = false;

[...btnStar].forEach((star) => {
    star.addEventListener("mousemove", (event) => {
        let pos = event.offsetX;
        let posId = event.target.id;

        if (isClick) {
            return;
        }

        if (posId === "1") {
            if (pos < 2) {
                btnStar[0].setAttribute("src", "./src/img/icon_star_3.png");
            } else if (pos <= 25) {
                btnStar[0].setAttribute("src", "./src/img/icon_star_2.png");
            } else {
                btnStar[0].setAttribute("src", "./src/img/icon_star_1.png");
            }
            btnStar[1].setAttribute("src", "./src/img/icon_star_3.png");
            btnStar[2].setAttribute("src", "./src/img/icon_star_3.png");
            btnStar[3].setAttribute("src", "./src/img/icon_star_3.png");
            btnStar[4].setAttribute("src", "./src/img/icon_star_3.png");
        } else if (posId === "2") {
            if (pos <= 25) {
                btnStar[0].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[1].setAttribute("src", "./src/img/icon_star_2.png");
            } else {
                btnStar[0].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[1].setAttribute("src", "./src/img/icon_star_1.png");
            }
            btnStar[2].setAttribute("src", "./src/img/icon_star_3.png");
            btnStar[3].setAttribute("src", "./src/img/icon_star_3.png");
            btnStar[4].setAttribute("src", "./src/img/icon_star_3.png");
        } else if (posId === "3") {
            if (pos <= 25) {
                btnStar[0].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[1].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[2].setAttribute("src", "./src/img/icon_star_2.png");
            } else {
                btnStar[0].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[1].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[1].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[2].setAttribute("src", "./src/img/icon_star_1.png");
            }
            btnStar[3].setAttribute("src", "./src/img/icon_star_3.png");
            btnStar[4].setAttribute("src", "./src/img/icon_star_3.png");
        } else if (posId === "4") {
            if (pos <= 25) {
                btnStar[0].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[1].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[2].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[3].setAttribute("src", "./src/img/icon_star_2.png");
            } else {
                btnStar[0].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[1].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[1].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[2].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[3].setAttribute("src", "./src/img/icon_star_1.png");
            }
            btnStar[4].setAttribute("src", "./src/img/icon_star_3.png");
        } else if (posId === "5") {
            if (pos <= 25) {
                btnStar[0].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[1].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[2].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[3].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[4].setAttribute("src", "./src/img/icon_star_2.png");
            } else {
                btnStar[0].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[1].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[2].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[3].setAttribute("src", "./src/img/icon_star_1.png");
                btnStar[4].setAttribute("src", "./src/img/icon_star_1.png");
            }
        }
    });
});

[...btnStar].forEach((star) => {
    star.addEventListener("click", (event) => {
        if (!isClick) {
            isClick = true;
        }
    });
});

btnReset.addEventListener("click", (event) => {
    [...btnStar].forEach((star) => {
        star.setAttribute("src", "./src/img/icon_star_3.png");
    });
    isClick = false;
});
