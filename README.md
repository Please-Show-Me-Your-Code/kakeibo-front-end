# Kakeibo Frontend App

The Kakeibo frontend app is a simple personal finance tracking app built using React.js. It allows users to keep track of their daily expenses by adding transactions, viewing a list of all transactions, and viewing the total expenses.

## Features

Add transactions: Users can add new transactions by specifying the date, category, and amount.
View transactions: Users can view a list of all transactions, which includes the date, category, and amount.
Total expenses: Users can view the total expenses calculated from all the transactions.

## Code structure

The code for the `Kakeibo` frontend app consists of a single React component called Kakeibo. It uses React's `useState` hook to manage the state of the app, which includes the list of transactions and the form data for adding a new transaction.

The component is divided into several functions:

- `renderTransaction`: Renders a single transaction as a table row.
- `handleInputChange`: Handles changes to the form input fields and updates the form data in the component state.
handleSubmit: Handles the submission of the form to add a new transaction.
- `totalExpense`: Calculates the total expenses from all the transactions.


## Usage

To run the Kakeibo frontend app, simply import the component and render it in your React app. The component does not have any dependencies, so it can be easily integrated into any React app.