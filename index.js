// NPM Modules
const inquirer = require("inquirer");

// Local Modules
const render = require("./lib/htmlrenderer");
const questions = require("./lib/questions")

// Constructors
const Manager = require("./lib/constructors/Manager");
const Engineer = require("./lib/constructors/Engineer");
const Intern = require("./lib/constructors/Intern");

// Global Variables
const teamMembers = [];

async function init() {

  //starts by asking the manager his info and store into the array teamMembers
  const response = await inquirer.prompt(questions.managerQuestions)
  const manager = new Manager(response.name, response.id, response.email, response.office)
  teamMembers.push(manager);
  console.log(teamMembers)

  //created a variable to state the condition it's true so I can stop at the end 
  let newPerson = true;


  //the loop will keep going until user states no longer wants to add a new person
  while (newPerson) {
    const member = await inquirer.prompt(questions.addPeople)
    console.log(member)

    //if engineer person being added ask the eng questions and them push to the team member's array
    if (member.addmore === "Engineer") {

      const res = await inquirer.prompt(questions.engineerQuestions)
      const engineer = new Engineer(res.name, res.id, res.email, res.github);
      teamMembers.push(engineer);
    }

    //if intern person being added ask the intern questions and them push to the team member's array
    else if (member.addmore === "Intern") {

      const res = await inquirer.prompt(questions.internQuestions);
      const intern = new Intern(res.name, res.id, res.email, res.school);
      teamMembers.push(intern);
    }

    //when user not longer wants to add people, stop the while loop and call the render function so HTML it's created.
    else {
      newPerson = !newPerson
      render(teamMembers)

    }

  }


}



init();