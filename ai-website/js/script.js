// 表示する画像のパスを配列で管理
const images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png"
];

// 現在表示している画像のインデックス番号
let currentIndex = 0;

// 画像を順番に切り替える関数
function changeImage() {
    // インデックスを次に進める（最後なら最初に戻る）
    currentIndex = (currentIndex + 1) % images.length;

    // img要素を取得して画像を変更する
    document.getElementById("slideshow").src = images[currentIndex];
}

// 3秒ごとにchangeImage関数を実行する
setInterval(changeImage, 3000);

// 現在の年をフッターに表示する処理
document.getElementById("currentYear").textContent = new Date().getFullYear();