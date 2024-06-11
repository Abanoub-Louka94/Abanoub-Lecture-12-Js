function Button(background_color, text_color, text) {
    this.background_color = background_color,
    this.text_color = text_color,
    this.text = text
};

Button.prototype.setBgColor = function() {
    return '#192a56'
};

Button.prototype.setTextColor = function() {
    return '#f5f6fa'
};

Button.prototype.setText = function() {
    return this.button.text = 'click me'
};

let myButton = new Button('#273c75', '#dcdde1', 'submit');
