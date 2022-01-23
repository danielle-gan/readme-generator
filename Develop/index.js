// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Describe your project"
    },
    {
        type: "input",
        name: "projectInstallation",
        message: "How do you install and run your project?"
    },
    {
        type: "input",
        name: "projectUsage",
        message: "Describe how to use your project"
    },
    {
        type: "list",
        name: "projectLicense",
        message: "What licenses did you use if any?",
        choices: [
            "Apache",
            "GNU",
            "MIT",
            "ISC",
            "Mozilla"
        ]
    },
    {
        type: "input",
        name: "projectContributors",
        message: "List the people who contributed to this project."
    },
    {
        type: "input",
        name: "projectTests",
        message: "Describe any tests for your project and how to run them."
    },
    {
        type: "input",
        name: "issues",
        message: "What would someone do if they had any issues with your project?"
    },
    {
        type: "input",
        name: "userGithub",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
