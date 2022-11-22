const btnThumb = document.querySelector("#btn-thumb");
const btnHeart = document.querySelector("#btn-heart");
const btnStar = document.querySelector(".btn-star");
const btnStarImg = document.querySelectorAll(".btn-star img");
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

const setbtnStarImg = (posId, pos) => {
    const halfStar = posId - 1;

    for (let i = 0; i < posId; i++) {
        if (pos <= 25) {
            btnStarImg[i].setAttribute("src", "./src/img/icon_star_1.png");
            btnStarImg[halfStar].setAttribute("src", "./src/img/icon_star_2.png");
        } else {
            btnStarImg[i].setAttribute("src", "./src/img/icon_star_1.png");
        }
    }

    for (let i = posId; i < 5; i++) {
        btnStarImg[i].setAttribute("src", "./src/img/icon_star_3.png");
    }
};

[...btnStarImg].forEach((star) => {
    star.addEventListener("mousemove", (event) => {
        let pos = event.offsetX;
        let posId = event.target.id;

        if (isClick) {
            return;
        }

        setbtnStarImg(posId, pos);

        if (posId === "1" && pos < 2) {
            btnStarImg[0].setAttribute("src", "./src/img/icon_star_3.png");
        }

        star.addEventListener("click", (event) => {
            if (!isClick) {
                isClick = true;
                btnStar.style.cursor = "default";
            }
        });
    });
});

btnReset.addEventListener("click", (event) => {
    [...btnStarImg].forEach((star) => {
        star.setAttribute("src", "./src/img/icon_star_3.png");
    });
    isClick = false;
    btnStar.style.cursor = "pointer";
});
