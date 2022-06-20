# Day - 37 ~ 39

## 고급 자바스크립트: 제어구조

### 1. 제어 구조

- 제어 구조는 특수한 자바스크립트 언어 기능이다.

- 실행되는 빈도를 개발자가 제어할 수 있도록 해준다.

  - if 조건문의 언어기능을 통해 제어 한다.

  - 반복문은 어떤 조건이 충족될 때 까지 or 유사하게 될 때까지 일부 코드를 여러번 실행 시켜준다.

  - if (true & false) {}

### 2. 불리언 값

- 불리언 값은 참과 거짓이라는 두 가지 가능성을 가진 값이다.

### 3. 비교 연산자

- ==, === : 동등 연산자

  - 동등 연산자는 문자열과 문자열, 숫자와 문자열, 다른 여러 값과의 비교 가능

  - 이중 등호는 숫자 5와 문자열 5를 비교해도 참으로 나온다. 즉, 값만 비교한다.

  - 그러나 삼중 등호는 타입이 같은지 확인할 수 있다. 5 === "5" 는 거짓이다.

  - 따라서 삼중 등호를 사용하는 것이 가장 이상적이다.

- ` >, < , >=, <= : 비교 연산자

  - 문자열에도 연산자를 사용할 수 있다.

    - ex. A는 B보다 일찍 나오기 때문에 더 작다.

- !, !=, !== : 부정 연산자

  - 검사하는 것과 반대되는 결과가 나오는 연산자이다.

  - 5 !== 4 는 참이다 , 5 !== 5 는 거짓이다.

  - !(5 < 4) 는 참이다.

- and : && , or : ||

  - 5 == 5 && 3 == 3 은 참이다. 5 == 5 && 3 == 1 은 거짓이다.

  - 5 == 5 || 3 == 1 은 참이다. 5 == 1 || 1 == 3 은 거짓이다.

  - JS는 and 연산자를 우선순위로 평가한다. 그 이유로 or 과 and가 결합되어있다면 and 후 or 순이기때문에 한가지만 참이여도 참으로 나온다.

  - 우선순위를 위해 괄호를 추가할 수 있다.

### 4. else

- else 키워드는 if 조건문이 충족되지 않으면 실행되어야 하는 코드를 정의할 때 쓴다.

### 5. 반복문

- 반복문을 사용해 다양한 상황에 따라 특정 코드를 여러번 실행할 수 있다.

- JS에는 for, for .. of , for .. in, while 반복문이 있다.

  - for 반복문은 특정 코드 실행 횟수를 정의한다.

  - for (let i = 0; i< 10; i = i++) {반복조건} : 일반적인 for 반복문 코드이다.

    - 여기서 i는 반복을 의미하는 변수다.

    - i가 1씩 증가(i++) 하며 10보다 작을때 다시 실행된다.

  - for of 반복문은 배열의 모든 요소를 순환한 다음 모든 배열 요소로 작업을 수행한다.

    - 따라서 for of는 배열 작업에 사용된다.

    - const users = ["Max", "yj", "hj"];
      for (const user of users) {
      console.log(user);
      }

      - users 라는 배열을 개별 요소로 출력하기 위해 user라는 개별요소 이름을 지정한다.

  - for in 반복문은 객체의 모든 속성을 반복할 수 있다. 따라서 객체에 사용된다.

    - const loggedInUser = {
      name: "YJ",
      age: 27,
      isAdmin: true,
      };

      for (const property in loggedInUser) {
      console.log(property); --> 결과값으로 속성 이름만 나옴. name,age,isAdmin
      console.log(loggedInUser[property]); --> 속성의 값이 나옴. YJ, 27, true
      }

  - while 반복문은 미리 특정 횟수를 정의하지 않고 객체나 배열을 통해 반복하지 않고 while 반복문을 사용하여 조건을 정의한다.

    - 불리언 값으로 작업해서 반복문에서 특정 조건이 충족되는 한 반복문의 코드가 실행된다.

    - let isFinished = false;

      while (!isFinished) {
      isFinished = confirm("Do you want to quit?"); --> 예 혹은 아니오로 대답한다.
      }

      console.log("Done!");

# Day - 45

## Third-Party Packages

### 1. Third-Party Packages

- Third-Party Packages란 간단한 코드 패키지나 코드 파일을 말한다.

- 여러 프로젝트에서 반복해서 작성하는 특정 기능이나 스타일, 작업이 있을 때마다 해당 기능을 처음부터 계속해서 작성해야 한다면 시간이 낭비되고 오류가 발생하기 쉽기 때문에 그때 다른 사람이 작성한 Third-Party Packages를 활용한다.

# Day - 46 ~ 47

## Backend development - NodeJS

### 1.Backend 란?

- 사용자가 보는 것 외의 특정 서비스 기능이 필요한 웹 사이트가 있을 때 이용되는 공간이다.

  - 예를 들어, 사용자가 입력한 데이터를 저장하기 위한 서버가 있다.

  - 방문자의 컴퓨터에 설치되지 않은 데이터베이스여야 하고 이미지를 업로드했을 때 그 파일이 저장되는 곳.

### 2. 동적 웹사이트 vs 정적 웹사이트

- 정적 웹 사이트는 HTML, CSS & 자바 스크립트로만 구성된 사이트

- 브라우저에 보낼 수 있는 HTML, CSS & 자바 스크립트 지침 외에 이러한 서버측 코드가 필요한 웹사이트가 있는 경우에 동적 웹사이트라고 한다.

  - 생성된 HTML 코드가 항상 동일한것이 아니기 때문에 "동적" 이라고 표현한다.

### 3. NodeJS

- NodeJS를 백엔드 언어로 사용한다면 기본 자바스크립트 지식을 활용할 수 있다.

- NodeJS를 통해 브라우저 외부에서 자바스크립트 코드를 실행할 수 있다.

  - 그리고 NodeJS 런타임 도구와 함께 자바스크립트를 이용해 모든 컴퓨터가 서버가 될 수 있다.

  - ex. HTML 명령을 동적으로 생성, JS와 NodeJS를 사용해 파일 시스템이나 DB에 접근하는 코드작성

### 4. 사용자 지정 NodeJS 서버 생성

- NodeJS에 내장된 기능인 require() 키워드를 이용해 요청과 응답을 처리하는 패키지를 이용한다.

- require('http') 특수키워드는 HTTP 객체를 가져온다.

  - 객체에 내장된 메서드 중 createServer 메서드를 이용해 웹 서버를 생성한다.

  - createServer는 내부적으로 필요한 서버기능이 포함된 객체를 반환한다.

### 5.request(요청) & response(응답) 생성

- const http = require("http");

  function handleRequest(request, response) {
  if (request.url === "/currenttime") {
  response.statusCode = 200;
  response.end("<h1>" + new Date().toISOString() + "</h1>");
  } else if (request.url === "/") {
  response.statusCode = 200;
  response.end("<h1>Hello World!!</h1>");
  }
  }

  const server = http.createServer(handleRequest);

  server.listen(3000);

  // naver.com => Send a request to naver's server
  // naver.com:80 => 기본 값 port

  - statusCode는 브라우저에 요청이 성공했는지 여부를 알리는 방법

    - 200이 성공적인 연결을 뜻한다.

  - new Date().toISOString()를 이용해 타임스탬프를 얻을 수 있다.

    - toISOString()는 날짜 객체를 문자열 표현으로 변환하여 읽을 수 있게 한다.

    - toISOString()는 new Data 객체에서 호출할 수 있는 메서드이다.
