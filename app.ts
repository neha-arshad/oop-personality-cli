#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

class Person{
	private personality : string;

	constructor(){
		this.personality = "Mystery";
	}

	public askQuestion(ans:number){
		if(ans === 1){
			this.personality = "Extrovert";
		}

		else if(ans === 2){
			this.personality = "Introvert" 
		}
	else {
		this.personality = "Still A Mystery!!"
	}
}
public getPersonality(){
	return this.personality
}
}

class Student extends Person{
	private name : string = "";

 public setName(name:string){
	 this.name = name;
	}

 public getName(){
	return this.name
}
}

// function 
async function oop (){
	let ans : number;
	let name : any = "";

	let {userAns} = await inquirer.prompt(
		{
			name : "userAns",
			type : "number",
			message : chalk.magentaBright("Type 1 if you like to talk others and type 2 if you would rather keep to Yourself: "),
			validate : (input)=>{
				if(isNaN(input)){
					return "Please Enter An Integer Value!!"
		}
		else{
			return true;
		}
	}
}
)
ans = userAns;
let myPerson = new Person();


myPerson.askQuestion(ans);
console.log(chalk.blue(`You are ${myPerson.getPersonality()}`));
let {userName} = await inquirer.prompt(
	{
		name : "userName",
		type : "input",
		message : chalk.greenBright("What is your Name? ")
	}
)
name = userName;
let myStudent = new Student();
myStudent.setName(name) ;
console.log(chalk.magentaBright(`\n\tHi ${myStudent.getName()}, Your personality type is "${myPerson.getPersonality()}".`));
}
oop();