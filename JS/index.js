console.log("hello");
const inquirer = require('inquirer');
const fs = require('fs');

 inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'LOCATION',
        },
        {
            type: 'input',
            message: 'Tell us a little about yourself!',
            name: 'BIO',
        },
        {
            type: 'input',
            message: 'What is your LinkdIn url?',
            name: 'LINKDINURL'

        },
        {
            type: 'input',
            message: 'What is your GitHub url?',
            name: 'GITHUBURL',
        }
    ])
    .then (answers => {
        console.log(answers)
        fs.writeFile(`./{answers.username}.html`, JSON.stringify(answers,null,2), (err,data) => {
            if(err) {
                throw err;
            }
            console.log("Generating HTML...")
        }) 
    })