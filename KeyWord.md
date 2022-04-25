# Day-01

## 웹은 어떻게 작동할까?

1. Domain 입력 -> 방문하려는 웹사이트의 서버(백-엔드)에 방문하겠다는 Request를 보냄 -> 브라우저에 웹사이트의 작동을 위한 프로그래밍 언어를 Response함.

2. https://naver.com/sports (URL)

- **https://** : 원격 컴퓨터와 서버가 통신할 때 사용되는 프로토콜
- **naver.com** : <Domain> 웹 사이트를 식별하는 부분
- **/sports** : <Path> 웹 사이트의 특정 리소스, 여러 페이지를 웹 사이트에 표시
- IP Address : Internet Protocol/ 식별을 제어하는 표준
- 길고 복잡한 IP 주소를 대신하여 도메인으로 Request함.

  But, 모든 장치에는 IP주소가 있지만 도메인은 없을 수 있기 때문에 DNS서버를 이용한 도메인을 이용함.

- Domain Name System (DNS) 은 매핑 테이블이 포함된 서버.
