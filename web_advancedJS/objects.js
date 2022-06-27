// const job = {
//   title: "developer",
//   location: "seoul",
//   salary: 50000,
// };

// console.log(new Date().toISOString());

// const job2 = {
//   title: "cook",
//   location: "anyang",
//   salary: 25000,
// };

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    (this.location = place), (this.salary = salary);
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`
    );
  }
}

const developer = new Job("Developer", "New York", 50000);
const cook = new Job("cook", "anyang", 35000);

developer.describe();
cook.describe();
