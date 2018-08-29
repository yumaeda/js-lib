module.exports = {
    mode: 'production',
    entry: [
        "./BaseField.js",
        "./BooleanField.js",
        "./ChoiceField.js",
        "./NumberField.js",
        "./CurrencyField.js",
        "./FileField.js",
        "./HiddenField.js",
        "./MultiTextField.js",
        "./TextField.js",
    ],
    output: {
        filename: "fields.js"
    }
}
