/**
 * 2023.11.23 시나버스 shinahverse.kr
 * 화면에 배경 랜덤으로 출력하기
 */

//이미지 저장하는 배열
const images = ["wallpaper_20220526153633_2022June_ocean_2880x1800_W1.jpg", "wallpaper_20221130155635_fe77b864798640cdbc0bafa2b5e26442.jpg", "wallpaper_20230328144814_964ee60206da4a83bc68a481f361309a.jpg", "wallpaper_20231006101844_d78d946670884d689f7a399bcf6abe9a.jpg", "wallpaper_20231030154552_56a08844adbc49b981b256b8001e42d8.jpg", "06.jpg"];
//위의 코드에서 파일명은 자신이 갖고 있는 파일의 이름을 적는다.

//화면에 출력할 이미지를 랜덤으로 선택한다.
const selectedImage = images[Math.floor(Math.random() * images.length)];

//html문서에 img요소를 만든다.
const bgImage = document.createElement("img");

//만든 img요소의 경로를 지정한다.
bgImage.src = `img/${selectedImage}`;

//Image 라는 클래스 생성
bgImage.classList.add("Image");

//만든 요소를 문서에 붙인다.
document.body.appendChild(bgImage);
