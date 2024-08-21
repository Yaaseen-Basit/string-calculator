# DemoCalculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.
CalculatestringService is an Angular service that processes a string input to compute the sum of numbers. It supports default delimiters, custom delimiters, and handles errors for negative numbers.
Features
Empty String Handling: Returns 0 for empty input.
Single Number Handling: Returns the number itself.
Sum Calculation: Computes the sum of numbers separated by commas or newlines.
Custom Delimiters: Supports user-defined delimiters.
Negative Number Validation: Throws an error if negative numbers are present.
Installation
Add to Angular Project:
Ensure Angular CLI is installed and navigate to your project directory.
Install Dependencies:
Run npm install to install necessary dependencies.
Add Service:
Integrate the CalculatestringService into your Angular project as specified in your service documentation.

Usage
Inject the Service:
Inject CalculatestringService into your Angular component.

Call the Service Method:
Use the service method to process the string input and compute the sum.

Test Instructions
Run Unit Tests:
Use Angular CLI to run unit tests:
ng test
Test Cases:
Empty String: Verify that an empty string returns 0.
Single Number: Check that a single number returns that number itself.
Two Numbers: Confirm that the service correctly sums two numbers separated by a comma.
New Lines Handling: Ensure the service handles newlines between numbers correctly.
Custom Delimiters: Test the service with user-defined delimiters.
Negative Numbers: Validate that the service throws an error for negative numbers. The screenshot of the test cases can be seen here https://drive.google.com/file/d/1XETIZic-pKS8W85O6l6DyOG7CkflO_VV/view?usp=drive_link
