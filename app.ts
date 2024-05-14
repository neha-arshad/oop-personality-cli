import inquirer from "inquirer";

type Mind = "Socializing" | "Alone time";

class Person {
  //Represent the Personality//

  private _personality: string;

  constructor() {
    this._personality = "Mystery";
  }

  askQuestion(answer: Mind) {
    console.log(answer);
		
    if (answer === "Socializing") {
      this._personality = "Extrovert";
    } else if (answer === "Alone time") {
      this._personality = "Introvert";
    } else {
      this._personality = "You are still a mystery";
    }
  }

  //Reutrun the value
  get personality() {
    return this._personality;
  }

  set personality(value: string) {
    this._personality = value;
  }
}

class Student extends Person {
  private _name: string;

  constructor() {
    super();
    this._name = "";
  }
  //Return the value///
  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

class Main {
  async ask() {
    const { mind } = await inquirer.prompt<{
      mind: Mind;
    }>({
      type: "list",
      message: "What do you prefer?",
      choices: ["Socializing", "Alone time"],
      name: "mind",
    });
    if (mind) {
      const person = new Person();
      person.askQuestion(mind);

      const { name } = await inquirer.prompt<{
        name: string;
      }>({
        message: "What is your name?",
        name: "name",
      });
      const student = new Student();
      student.name = name;
      console.log(
        `Hello ${student.name}! your personality is ${student.personality}!`
      );
      const { again } = await inquirer.prompt<{
        again: boolean;
      }>({

        message: "Would you like to try again?",
        name: "again",
        type: "confirm",
      });
      if (again) {
        this.ask();
      }
    }
  }
}

const main = new Main();
main.ask();
