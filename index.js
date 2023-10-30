const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const examples = './examples'
const shapes = require('./lib/shapes')


inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter logo text. (cannot exceed 3 characters)',
            validate: (input) => {
                if(input.length > 3) {
                    return 'Text cannot exceed 3 characters!'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color should the text be?'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape should the logo be?',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color should the shape be?'
        }
    ])
    .then((data) => {
    const filename = path.join(examples, `logo.svg`);


    const logoData = {
        text: data.text,
        textColor: data.textColor,
        shape: data.shape,
        shapeColor: data.shapeColor
    }
    console.log(logoData)


    // insert the logoData into some svg that has been created.


    console.log(logoData.textColor);

    const logoCode = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
     <circle cx="150" cy="100" r="80" fill="${logoData.shapeColor}" />
    
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoData.textColor}">${logoData.text}</text>
    
    </svg>`;
    console.log(shapes.circle)

    if (logoData.shape == 'circle') {
        fs.writeFile(filename, logoCode, (err) =>
    err ? console.log(err) : console.log('Success!'));
    } else console.log('sorry no shape')
    

    
});

