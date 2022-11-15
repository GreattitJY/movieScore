const btnThumb = document.querySelector("#btn-thumb");
const btnHeart = document.querySelector("#btn-heart");
const btnStar = document.querySelectorAll(".btn-star img");
const test = document.querySelector(".btn-star");

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
[...btnStar].forEach((star) => {
    star.addEventListener("mousemove", (event) => {
        let pos = event.offsetX;
        console.log(pos);
        if (event.target.id === "1" && pos < 25) {
            btnStar[0].setAttribute("src", "./src/img/icon_star_2.png");
        } else if (event.target.id === "1" && pos >= 25) {
            btnStar[0].setAttribute("src", "./src/img/icon_star_1.png");
        }
    });
});

// test.addEventListener("mousemove", (event) => {
//     let pos = event.offsetX;
//     console.log(pos);
//     // console.log("test");
// });
// console.log(test);
