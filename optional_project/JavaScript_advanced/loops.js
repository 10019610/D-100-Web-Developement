for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["Max", "yj", "hj"];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "YJ",
  age: 27,
  isAdmin: true,
};

for (const property in loggedInUser) {
  console.log(property); // 결과값으로 속성 이름만 나옴. name,age,isAdmin
  console.log(loggedInUser[property]); // 속성의 값이 나옴. YJ, 27,true
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log("Done!");
