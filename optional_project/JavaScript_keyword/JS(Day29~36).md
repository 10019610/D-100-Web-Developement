# Day - 29 ~ 32

## Java script 기초 이해

### 1. 자바 스크립트란?

- HTML과 CSS가 내용과 그 구조를 정의하고 의미 추가, 내용 스타일링이라면 자바스크립트는 사용자가 보는 페이지에 쌍방향 소통 기능을 추가함으로서 로딩된 페이지를 실제적으로 바꿀 수 있다.

- html 이나 CSS 기능보다 더 디테일하게 오류 스타일 추가 가능

- 보다 복잡한 오버레이를 나열하고 관리

- 화면에 있는 요소 재배치, 숨기기 - 보여주기, 제거하는 등의 일 가능

### 2. value (값)

- 텍스트 값 = String (문자열)

- 숫자 = Number

### 3. variable (변수) - data container

- value(값) 을 다룰 때에는 변수의 문맥 안에서 하게된다.

- 변수는 자바스크립트 뿐 아니라 거의 모든 프로그래밍 언어에서 만나는 핵심 개념이다.

- 변수란, 값들이 있고, 이들을 어떤 데이터 용기에 저장해 나중에 다른 계산에 수 차례 사용할 수 있다는 개념이다.

### 4. Script 요소 추가

- style 태그의 경우 head section에 배치하는 것이 좋다.

- script의 경우는 body에 추가되는 경우가 많다.

  - but, 어느 섹션에 포함되든 크게 의미는 없다.

### 5. value & 기본 Java Script 명령 작업

- 큰 따옴표나 작은 따옴표는 자바스크립트와 브라우저에서 구분 문자로 작동한다.

  - 둘 중 아무거나 사용해도 되지만, 한번 사용한 문자를 계속 사용해야한다.

- 이스케이프 처리

  - \' : 따옴표 앞에 백슬래시 추가

### 6. 변수("data container")

- let 키워드를 통해 변수를 생성할 수 있다.

  - 변수명은 특수한 문자를 쓰지 않은 하나의 단어여야 한다.

    - but, 밑줄(\_)은 허용된다.

  - 변수를 명명할 때 카멜표기법을 관례적으로 이용한다.

    - 소문자로 변수명을 시작하여 다음단어는 대문자로

      - ex. greetingText

- 이미 정의된 변수에 새로운 값 할당

  - 정의된 변수명 = 새로운 값

### 7. Java Script 코드를 외부의 js 파일로 Html 파일에 소싱

- head 섹션에 <script scr="app.js"></script> 코드로 연결한다.

### 8. 배열 array (데이터 리스트 관리)

- let hobbies = [축구, 야구, 요리]

- 배열 중 1개의 값을 출력하고 싶을 때는 alert(hobbies[0])

  - 첫번째 인덱스는 0으로 시작한다.

### 9. 객체 object (관련 데이터 그룹화)

- 다양한 레이블과 값을 입력하여 그룹화한다.

  - ex. let = yang {name:"yj", age: 27, job:"student"}

### 10. 객체의 속성 활용법

- 객체에 속한 속성 하나를 뽑아 활용하고 싶을땐 객체명 이후 점찍고 속성명 사용(ex. 객체명.속성명)

### 11. 함수 (function)

- 함수는 우리가 직접 작성한 명령으로 직접 정의하고 코드의 다른 부분에서 실행할 수 있도록 한다.

- ex. function 함수명 () {
  작동하고 싶은 연산
  };

- 함수명은 내용물을 설명하는 것이 아니라 연산이 무엇인가를 설명하는것으로 정해야한다.

### 12. 함수 & 변수

- 함수 안에서 변수를 생성할 경우 그 함수 안에서만 사용 가능하다.

- return 키워드를 통해 함수 호출이 새로운 값을 생성하게 한다.

  - ex. function 함수명 () {
    return 연산
    };

### 13. method 메서드 소개

- 함수를 객체에 추가하면 메서드(method)라고 한다.

- ex. ` let person = { name: "Yang", greet() { alert("Hello!!") } }`

  - name 이 property (속성) , greet() 가 Method

### 14. 모듈러스 연산자

- 나눗셈의 나머지가 출력된다.

  - ex. 10 % 4 = 2 가 출력됨. 몫이 2 나머지 2

### 15. 수학 연산 & 규칙

- 이미 선언된 기존 변수에 1을 더해야 한다면, 변수명++;

  - 1을 빼야한다면, 변수명--;

  - 5를 더하고 싶다면, 변수명+= 5;

- ex. `let yjyj = (10 + 10 - 5) * 10;`

`yjyj = 10 * 4;`

yjyj++; -> yjyj +1

yjyj--; -> yjyj -1

yjyj += 5; -> yjyj +5

yjyj /= 5; -> yjyj /5

yjyj *= 5; -> yjyj *5

### 16. 문자열 작업

- 쌍따옴표의 문자열끼리 + 로 합칠수있다.

  - but, 띄어쓰기는 없고 - 는 실행되지않는다.

# Day - 33 ~ 34

## 고급 Java Script - DOM을 사용한 작업

### 1. DOM (Document Object Model)

- DOM 은 페이지의 요소를 선택, 조작하고 페이지의 HTML 요소와 스타일을 조작하기 위해 JS를 사용해 변경할 수 있다.

- JS와 상호작용 할 수 있는 DOM은 기본적으로 HTML 코드의 번역이다.

### 2. 전역 "window" & "document" 객체

- window 객체의 document속성을 사용해 DOM에 접근한다.

- window 객체의 모든 속성과 메서드는 자동으로 변수와 함수를 전역적으로 사용할 수 있다.

  - ex. window.document

- console.dir()를 사용하여 이 문서에 저장된 진짜 객체를 출력할 수 있다.

### 3. script 로드하기

- head 섹션에 js 파일을 연결한 script가 있으면 자바스크립트 코드가 먼저 실행되고 이후에 body 섹션의 코드가 실행되기 때문에 js파일에 저장된 DOM과 상호작용하는 코드 분석을 못하게 된다.

  - 그래서 script 코드를 body 섹션의 코드 밑에 적으면 정상적으로 실행된다.

  - 더 추천하는 방법은 script 요소를 head 섹션에 두고 script 요소에 defer 속성을 추가하는 것이다.

    - defer 속성은 전체 문서가 분석될 때까지 script 실행을 지연시키는 명령을 브라우저에게 알려준다.

### 4. DOM 탐색

- 정확한 코드의 구조가 기억나지 않아 DOM 탐색이 힘들때는 utility method를 사용해 특정 요소를 찾는다.

  - 예를 들어 ID 또는 CSS 선택자를 이용한다. ex. document.getElimentById('some-id'); ,
    document.querySelector('some-class')

- 위처럼 특정 ID 또는 특정 클래스를 가진 요소가 있다면 특정 요소에 대한 접근 권한을 부여한다.

### 5. 요소 쿼리

- getElementById 는 고유 식별자인 해당 Id로 요소에 접속하는 방법이다.

  - document.getElementById('some-id'): ID로 HTML 요소 선택

- querySelector는 매개 변수로 Id를 사용하지 않고 CSS 선택자를 사용한다.

  - document.querySelector('some-css-selector'): 제공된 CSS 선택자에 의해 충족/선택된 첫 번째 HTML 요소.

  - document.querySelectorAll('some-css-selector'): 제공된 CSS 선택자에 의해 충족/선택된 일치하는 모든 HTML 요소를 선택한다.

# Day - 35 ~ 36

## DOM 조작 (내용, 속성값 변경 등)

### 1. JS를 통한 새 HTML 요소 삽입

- 3가지 단계를 통해 HTML 요소를 삽입한다.

  - 1.  새로운 요소를 만든다

    - ex. `let newAnchorElement = document.createElement("a");`

          `newAnchorElement.href = "https://google.com";`
          `newAnchorElement.textContent = "This leads to google!!";`

  - 2. DOM에 넣어 줘야 하기 때문에 새로운 요소를 가지고 있어야 하는 부모 요소부터 접근을 해야한다.

    - ex. `let firstParagraph = document.querySelector("p"); `

  - 3. 부모 요소 컨텐츠에 새로운 요소를 삽입해야 한다.

    - ex. firstParagraph.append(newAnchorElement);

### 2. DOM 요소 삭제

- 1. 삭제할 요소를 선택

  - ex. let firstH1Element = document.querySelector("hi");

- 2. 요소 삭제

  -` firstH1Element.remove();`

  - 또 다른 방법 - parentElement 선택하는것, 이 경우 body 안에서 removeChild를 요청하면 그 body에서 자식 요소를 삭제하도록 한다. but, 과거 버전의 브라우저에는 안통할수있다.

    - `firstH1Element.parentElement.removeChild(firstH1Element);` 이 방법은 오래된 브라우저에서도 통함

### 3. 기존 요소 이동

- 이동할 요소를 추가할 위치의 부모 요소를 선택한다.

- 요소를 추가하기전에 append나 insert를 불러서 해당 부모 요소 안으로 이동할 수 있게 해야한다.

- ex. `firstParagraph.parentElement.append(firstParagraph);`

### 4. innerHTML 속성

- innerHTML 속성을 이용하여 텍스트나 혼합된 html을 출력시킨다.

- 페이지를 구성하고 있는 다른 HTML 코드를 표시하는 것처럼 브라우저가 분석하고 표시하도록 할 수 있다.

### 5. "click" 이벤트 리스너

- 이벤트 리스너는 클릭 이벤트를 리슨할 수 있게 하는것이다.

- `paragraphElement.addEventListener("click", changeParagraphText);`

  - 괄호의 첫번째 매개변수는 이벤트의 유형중 click 이벤트를 두번째 매개변수에는 click이 발생할 때 어떤일이 일어나야 하는지 선언되어 있는 함수가 들어간다.

### 6. "input" 이벤트 리스너

- `inputElement.addEventListener("input", retrieveUserInput);`

### 7. "상수" (Constants)

- 변수에 한 번 저장하면 절대로 바뀌지 않는 값.

- let이 아닌 const로 변수를 할당하면 이 변수가 처음에 할당되었던 값 이외에 다른 값은 가질 수 없다는 걸 명확하게 한다.
