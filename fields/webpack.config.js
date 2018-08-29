module.exports = {
    mode: 'production',
    entry: [
        "./src/fields/BaseField.js",
        "./src/fields/BooleanField.js",
        "./src/fields/ChoiceField.js",
        "./src/fields/NumberField.js",
        "./src/fields/CurrencyField.js",
        "./src/fields/FileField.js",
        "./src/fields/HiddenField.js",
        "./src/fields/MultiTextField.js",
        "./src/fields/TextField.js",
    ],
    output: {
        filename: "fields.js"
    }
}
