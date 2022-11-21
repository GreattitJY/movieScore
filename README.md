# movieScore

-   구현 이미지

    ![화면 기록 2022-11-21 오후 11 13 12](https://user-images.githubusercontent.com/103429329/203077083-bea07635-67e2-40eb-b344-99578b680f99.gif)

## 업데이트 및 고민사항

-   11월 21일

    -   css가 아닌 js로 별점 호버 이벤트 구현 시 마우스 위치 offset과 dataset으로 구분
    -   별점 호버 이벤트 구현시 사용한 단순 if문의 리팩토링 필요

        ```js
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
                    // 이하 생략
                }
            });
        });
        ```

-   11월 5일
    -   html 시맨틱 마크업 및 css style 작업
