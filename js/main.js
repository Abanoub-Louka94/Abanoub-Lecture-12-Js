function Button(background_color, text_color, text) {
    this.background_color = background_color,
    this.text_color = text_color,
    this.text = text,

    Button.prototype.setBgColor = function(background_color) {
        return this.background_color = background_color
    },
    
    Button.prototype.setTextColor = function(text_color) {
        return this.text_color = text_color
    },
    
    Button.prototype.setText = function(text) {
        return this.text = text
    };
};

let downloadButton = new Button('#8c7ae6', 'white', 'download');

let uploadButton = new Button('#4cd137', 'white', 'upload');

let clickButton = new Button('#e84118', 'white', 'click');


// creating container
const container = document.createElement('div');

container.classList.add('container');

document.body.appendChild(container);

// creating header
const header = document.createElement('h1');

const headerNode = document.createTextNode('buttons');

header.appendChild(headerNode);

header.classList.add('header');

document.body.appendChild(header);

container.appendChild(header)

// creating buttons container
const buttonsContainer = document.createElement('div');

buttonsContainer.classList.add('buttons-container');

document.body.appendChild(buttonsContainer);

container.appendChild(buttonsContainer);



// ------------------ creating buttons ----------------

// download button
const dButton = document.createElement('button');

dButton.classList.add('download');

document.body.appendChild(dButton);

buttonsContainer.appendChild(dButton);

dButton.innerText = downloadButton.text;

dButton.style.color = downloadButton.text_color;

dButton.style.backgroundColor = downloadButton.background_color;

// upload button
const upButton = document.createElement('button');

upButton.classList.add('upload');

document.body.appendChild(upButton);

buttonsContainer.appendChild(upButton);

upButton.innerText = uploadButton.text;

upButton.style.color = uploadButton.text_color;

upButton.style.backgroundColor = uploadButton.background_color;

// click button
const cButton = document.createElement('button');

cButton.classList.add('click');

document.body.appendChild(cButton);

buttonsContainer.appendChild(cButton);

cButton.innerText = clickButton.text;

cButton.style.color = clickButton.text_color;

cButton.style.backgroundColor = clickButton.background_color

