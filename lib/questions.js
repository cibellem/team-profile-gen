// const jobTitle = [

//     {
//         type: "list",
//         name: "title",
//         message: "What is your Job title?",
//         choices: [

//             "Manager",
//             "Engineer",
//             "Intern",

//         ]
//     },

// ]

const addPeople = [

    {
        type: "list",
        name: "addmore",
        message: "Select team member to add",
        choices: [

            "Engineer",
            "Intern",
            "I dont want to add more people"

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

module.exports = { addPeople, managerQuestions, internQuestions, engineerQuestions };