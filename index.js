#! /usr/bin/env node
import inquirer from "inquirer";
console.log('\n\tI AM PLEASED TO WELCOME YOU TO MY CURRENCY CONVERTER\t\n');
const currency = {
    USD: 1, //  <-------- base currency
    PKR: 278.36,
    QR: 3.64,
    SAR: 3.75,
    TRY: 32.54,
    AED: 3.67,
    GBP: 0.80,
    INR: 83.64,
    AZN: 1.70,
    CNY: 7.24
};
let userAnswer = await inquirer.prompt([
    {
        name: "convert_currency_from",
        message: "Select the currency you want to convert from ",
        type: "list",
        choices: ["USD", "PKR", "QR", "SAR", "TRY", "AED", "GBP", "INR", "AZN", "CNY"]
    },
    {
        name: "convert_currency_to",
        message: "Select the currency you want to convert in ",
        type: "list",
        choices: ["USD", "PKR", "QR", "SAR", "TRY", "AED", "GBP", "INR", "AZN", "CNY"]
    },
    {
        name: "Amount",
        message: "Enter the Amount",
        type: "number"
    }
]);
let amountFrom = currency[userAnswer.convert_currency_from];
let amountTo = currency[userAnswer.convert_currency_to];
let amount = userAnswer.Amount;
let base_amount = amount / amountFrom;
let converted_amount = base_amount * amountTo;
console.log(converted_amount.toFixed(2)); //.toFixed funtion will set decimal value
