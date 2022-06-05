// document.body.children[1].children[0].href = "https://google.com";

// console.dir(window.document)
// alert();
// window.alert();

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a"); //  p a {color :black}
anchorElement.href = "https://academind.com";

// ADD AN ELEMENT
//1. 새로운 요소를 만든다

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to google!!";

//2. DOM에 넣어 줘야 하기 때문에 새로운 요소를 가지고 있어야 하는 부모 요소부터 접근을 해야한다.

let firstParagraph = document.querySelector("p");

//3. 부모 요소 컨텐츠에 새로운 요소를 삽입해야 한다.

firstParagraph.append(newAnchorElement);

// REMOVE ELEMENT
// 1. 삭제할 요소를 선택

let firstH1Element = document.querySelector("h1");

// 2. 요소 삭제

//firstH1Element.remove(); 과거 버전의 브랒우저에서는 통하지 않는다.
firstH1Element.parentElement.removeChild(firstH1Element); //이 방법은 오래된 브라우저에서도 통함

// MOVE ELEMENT

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

// firstParagraph.innerHTML;
