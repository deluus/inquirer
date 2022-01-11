const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    // {
    //   type: 'input',
    //   message: 'What was your motivation?',
    //   name: 'motivation',
    // },
    // {
    //   type: 'input',
    //   message: 'why did you build this project?',
    //   name: 'project',
    // },
    // {
    //     type: 'input',
    //     message: 'what problems did it solve?',
    //     name: 'solve',
    //   },
      {
      type: 'input',
      message: 'what did you learn?',
      name: 'learn'
    },
    {
        type: 'input',
        message: 'what are the necessary dependencies you need to install?',
        name: 'install',
        choices : [ "inquirer", "badmath"]
      },
      {
        type: 'input',
        message: 'GitHub username',
        name: 'username'
      },
      {
        type: 'input',
        message: 'Email address',
        name: 'address'
      },
  ])
  .then((answers)  => {

       const readMeTemplate = `
# ${answers.title}


![Github License](https://img.shields.io/badge/license-MIT-blue/svg)

## Description
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation? 
 ${answers.motivation}
- Why did you build this project?
${answers.project}
- What problem does it solve?
 ${answers.solve}
- What did you learn?
${answers.learn}

## Table of Contents 
If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)

- [Tests](#tests)

- [Contact](#Contact)

## Installation
What are the necessaty dependencies you need to install? Provide a step-by-step description of how to get the development environment running.
${answers.install}

## Usage
Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it.
Then, using the relative filepath, add it to your README using the following syntax:
   md
    ![alt text](assets/images/screenshot.png)

   
## Credits
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project.
 If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).


🏆
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Check out the badges hosted by [shields.io](https://shields.io/). 

## Features
If your project has a lot of features, list them here.

## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. 
The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests


## Contacts
-  GitHub username :
${answers.username}

- Email adderss :
${answers.address}

    
 `



fs.writeFile( 
    'Contributer.README.md', readMeTemplate,(answers),
 (err) => {
 err ? console.error(err) : console.log('Generating README...');
 } )

  });


