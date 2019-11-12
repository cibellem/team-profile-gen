// NPM Modules
const inquirer = require("inquirer");

// Local Modules
const render = require("./lib/htmlrenderer");

// Constructors
const Manager = require("./lib/constructors/Manager");
const Engineer = require("./lib/constructors/Engineer");
const Intern = require("./lib/constructors/Intern");

// Global Variables
const teamMembers = [
  // new Manager("jamon", 150, "brent@gmail.com", 150),
  // // new Engineer("Tucker", 2, "tbeauchamp@2u.com", "tuckerbeauchamp"),
  // // new Intern("Becky", 3, "becky@becky.com", "UofA"),
  // // new Intern("Shelly", 4, "shelly@shelly.com", "UofA")
];

const jobTitle = [

  {
    type: "list",
    name: "title",
    message: "What is your Job title?",
    choices: [

      "Manager",
      "Engineer",
      "Intern",

    ]
  },

]
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your Name?",
  },

  {
    type: "number",
    name: "id",
    message: "What is your ID?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your e-mail?",
  },
  {
    type: "number",
    name: "office",
    message: "What is your office number?",
  },
]

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your Name?",
  },

  {

    type: "number",
    name: "id",
    message: "What is your ID?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your e-mail?",
  },

  {
    type: "input",
    name: "github",
    message: "What is your gitHub Account?",
  },




]

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your Name?",
  },

  {

    type: "number",
    name: "id",
    message: "What is your ID?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your e-mail?",
  },
  {
    type: "input",
    name: "school",
    message: "What is your School?",
  },
]

inquirer.prompt(jobTitle).then(function (data) {

  if (data.title === "Manager") {
    inquirer.prompt(managerQuestions).then(function (res) {
      teamMembers.push(new Manager(res.name, res.id, res.email, res.office));
    });

  }
  if (data.title === "Engineer") {
    inquirer.prompt(engineerQuestions);
  }
  if (data.title === "Intern") {
    inquirer.prompt(internQuestions);
  }
})

async function init() {
  render(teamMembers);
}


init();
