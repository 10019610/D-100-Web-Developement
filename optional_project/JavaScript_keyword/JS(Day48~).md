# Day - 48 ~ 50

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
