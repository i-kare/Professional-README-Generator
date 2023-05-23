// TODO: Include packages needed for this application
const inquirer = require('inquirer');;
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
.prompt([
    {
        type:'input',
        message:'What is the title of your project?',
        name:'title',
    validate: (titleInput) => {
        if (titleInput) {
            return true;
        }else{
            console.log('Enter the title of your project.');
            return false;
        }
        }
    },

    {
        type:'input',
        message:'Please provide a description of your project?',
        name:'descriptions',   
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            }else{
                console.log('Provide a description of your project.');
                return false;
            }
            }
    },
    {
        type:'input',
        message:'Provide a table of contents for your project.',
        name:'Contents',   
        validate: (contentsInput) => {
            if (contentsInput) {
                return true;
            }else{
                console.log('Please provide a table of contents for your project?');
                return false;
            }
            }
    },
    {
        type:'input',
        message:'Please provide installation instructions?',
        name:'installation', 
        validate: (installationInput) => {
            if (installationInput) {
                return true;
            }else{
                console.log('Provide instructions on how to install your project');
                return false;
            }
            }  
    },
    {
        type:'input',
        message:'Provide usage information.',
        name:'usage',  
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            }else{
                console.log('Please provide inforamation regarding how your project can be used?');
                return false;
            }
            } 
    },
    {
        type:'list',
        message:'Choose a license.',
        name:'license',
        choices:[
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "revised" License',
        ],  
        validate: (licenseInput) => {
            if (licenseInput) {
                return true;
            }else{
                console.log('Please select a license for your project?');
                return false;
            }
            } 
    },
    {
        type:'input',
        message:'Please provide contributing guidelines?',
        name:'guidelines',
        validate: (guidelinesInput) => {
            if (guidelinesInput) {
                return true;
            }else{
                console.log('Provide contributing guidlines.');
                return false;
            }
            }    
    }, 
    {
        type:'input',
        message:'Provide tests instructions.',
        name:'tests', 
        validate: (testsInput) => {
            if (testsInput) {
                return true;
            }else{
                console.log('Please provide tests instructions?');
                return false;
            }
            }   
    },
    {
        type:'input',
        message:'Enter your Github username.',
        name:'github', 
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            }else{
                console.log('Please provide your Github username?');
                return false;
            }
            }   
    },{
        type:'input',
        message:'Enter your E-mail address.',
        name:'email', 
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            }else{
                console.log('Please provide your E-mail address?');
                return false;
            }
            }   
    },


])


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

.then((answers) => {
    const badge = renderBadge(answers.license) //produces specifically the license
    const readmePageContent = generateReadMe(...answers,badge); // produces all the answers and the respective license-badge
    fs.writeFile('ReadMe.md',readmePageContent,(err)=> //Function to generate Readme.md via
        err ? console.log(err) : console.log('Sucessfully created ReadMe!')
        );
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
