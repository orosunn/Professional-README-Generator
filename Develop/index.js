const inquirer = require('inquirer');
const fs = require('fs');

function init() {console.log('README Generator Initialized')};

init();

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter a title for your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Enter contributor names:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'GPL', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((data) => {
      const readmeTemplate= `
# ${data.title}

## Description
${data.description}
      
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Questions](#questions)
      
## Installation
${data.installation}
      
## Usage
${data.usage}
      
## License
This application is covered under the ${data.license} license.
      
## Contributors
${data.contributors}
      
## Questions
For additional questions, contact [${data.github}](https://github.com/${data.github}) or email at ${data.email}.
`;
     fs.writeFile('README.md', readmeTemplate, (err) =>
       err ? console.log(err) : console.log('README file generated'));
  });