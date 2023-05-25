// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
    if (license === 'Apache License 2.0'){
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'GNU General Public License v3.0' ) {
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else if (license === 'MIT License') {
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === 'BSD 2-Clause "Simplified" License') {
       badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    } else if (license === 'BSD 3-Clause "New" or "revised" License') {
       badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else {
       badge = ''
  }
  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## Description
        ${data.description}

      ## Table of Contents 
        -[Installation](#installation)
        -[Usage](#usage)
        -[License](#license)
        -[Contributing](#contributing)
        -[Test](#tests)
        -[Questions](#questions)

      ## Installation
        ${data.installation}

      ## Usage
        ${data.usage}

      ## License
        ${data.license}

      ## Contributing
        ${data.contributing}

      ## Tests
        ${data.tests}

      ## Questions
        This is my github profile link github.com/${data.github}
        You can reach me at ${data.email}
      `;
}


module.exports = generateMarkdown;
