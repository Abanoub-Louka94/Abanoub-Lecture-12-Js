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

let downloadButton = new Button('#273c75', '#dcdde1', 'submit');

let uploadButton = new Button('#273c75', '#dcdde1', 'submit');


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

container.appendChild(buttonContainer);
