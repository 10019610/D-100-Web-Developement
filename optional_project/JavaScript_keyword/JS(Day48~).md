# Day - 48 ~ 51

## 익스프레스 JS로 NodeJS 향상

### 1. 익스프레스 JS 서버 설정

- const express = require("express");

  const app = express();

  app.get("/", function (req, res) {
  res.send("<h1>Hello World!!!!</h1>"); -> 기본값 포트인 3000에 hello world 텍스트 응답을 보냄
  });

  app.listen(3000);

  - express JS 기본 설정 코드이다.

### 2. 노드 & 익스프레스로 HTML 파일 반환

- 특정 페이지에 연결하기 위한 HTML파일의 경로 설정을 위해 path 패키지도 연결한다.

  - const path = require('path')

- 포트 뒤에 오게 될 원하는 특정 주소와 function(request, response)를 적는다.

  - app.get('/특정주소', function(req, res) {})

- function(req, res) {} 에는 연결하기위한 HTML 파일의 Path를 적는다.

  - function (req, res) { const htmlFilePath = path.join(\_dirname, '폴더명', '파일명')}

- 패스를 설정한 후 sendFile 메서드를 이용하여 response를 제시한다.

  - res.sendFile('path를 지칭하는 함수') -> 예시에서는 'htmlFilePath'

### 3. 서버에 의해 변경되지 않는 정적인 파일 CSS, JS파일 제공

- app.use() 메서드를 이용

  - app.use(express.static('정적파일이 있는 폴더'))

### 4. EJS 템플릿 엔진

- 위처럼 path 설정을 복잡하게 하는 방법 이외에, ejs 템플릿을 이용하면 res.render() 메서드를 이용해 간단하게 path 설정을 할 수 있다.

- app.set("views", path.join(\_dirname, "views"));
  app.set("view engine", "ejs");

  - set 기능을 이용하고, 원하는 파일이 있는 폴더, path 이후 app.set('view engine','ejs') 까지 설정하면
    ejs 템플릿을 이용할 수 있다.

- app.set()을 이용해 ejs에 접근했다면 밑의 app.get() 으로 각각의 path설정을 통해 html 파일을 제공한 것을 간단하게 res.render() 기능으로 대체 가능하다.

  - 보내고자 하는 파일의 확장자를 ejs로 변경해야 한다.

### 5. 템플릿을 이용한 동적 콘텐츠 렌더링

- ejs파일에 데이터의 동적인 변화가 필요한 부분에 <%= 특정이름 %>를 설정한다

- 이후 js파일의 app.get으로 path에 따라 데이터를 render하던 부분에 콤마찍고 {특정이름:~}으로 설정

  - const filePath = path.join(\_dirname, "data", "restaurants.json");

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    res.render("restaurants", { numberOfRestaurants: storedRestaurants.length });

    - app.post를 이용해 JSON파일에 저장된 데이터를 이용하여 동적으로 데이터 변화를 보여주기 위한 예시이다

### 6. EJS를 이용한 일부 콘텐츠 렌더링

- 콘텐츠가 필요한 부분에 <%- include('경로') %>

### 7. uuid를 이용하여 id값 부여하기

- const uuid = require('uuid')

  - app.post("/recommend", function (req, res) {
    const restaurant = req.body;
    restaurant.id = uuid.v4();

# Day - 68 ~ 70

## Ajax & 비동기식 JS 기반의 HTTP 요청

### 1. Ajax

- Ajax란 비동기식 자바스크립트 XML을 의미한다.

- 여기서 자바스크립트는 브라우저에서 실행되는것을 말한다.

- Ajax 기능을 활용하는데에 도움이 되는 2가지 내장 브라우저 측 JS가 있다.

  - XMLHttpRequest 객체와 fetch() 함수

- 웹페이지를 다시 로딩하지 않아도 화면상의 객체를 자유롭게 움직이고 제어할 수 있다.

- XMLHttpRequest 객체를 사용하면 작업을 수행할 수는 있지만 사용하기 힘들기 때문에, exios와 같은

타사 라이브러리를 추가하여 사용하거나 내장된 fetch() 기능을 이용한다.

- fetch 함수는 문자열을 매개변수 값으로 취한다.

  - fetch 함수는 기본적으로 get 요청을 보낸다.

### 2. 다양한 HTTP 메서드

- 일반적으로 get 요청이 데이터를 가져오는데 사용되고 일부 데이터를 저장하려는 의도를 표현할 때 post 요청을 보낸다.

- post와 마찬가지로 put과 patch도 req.body를 전달할 수 있다.

- put 요청은 서버의 일부 데이터가 업데이트되거나 대체되었을때 사용된다.

  - put은 일반적으로 전체 리소스, 해당 DB의 전체 문서가 대체될때 사용된다.

- delete 메소드는 일부 리소스를 삭제한다는것을 delete 메서드를 설정하여 요청을 보낼때 사용된다.

  - delete는 get과 매우 유사하게 작동한다.
