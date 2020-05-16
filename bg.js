const body = document.querySelector("body");

const IMG_NUMBER = 8; // 사진 갯수

// 랜덤숫자에 맞는 .jpg 이미지를 가져와 출력
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.style.height = '100%';
    image.style.width = '100%';
    image.classList.add("bgImage");
    body.prepend(image);
}

// 1~8까지의 랜덤 숫자를 뽑아냄
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom(); // 랜덤하게 뽑힌 숫자를 randomNumber에 넣고 
    paintImage(randomNumber); // randomNumber에 넣은 숫자를 paintImage() 함수에 넣음.
}

init();
