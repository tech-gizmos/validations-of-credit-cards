## here is a replit link to the code
https://replit.com/@jideofornonso00/validation-of-credit-cards#index.js

## Visa Pattern (visaPattern):

^: Asserts the start of the string.
4: Matches the first digit of Visa card numbers.
\d{12}: Matches exactly 12 digits after the initial '4'.
(\d{3})?: Optionally matches an additional group of 3 digits, enclosed in parentheses.
$: Asserts the end of the string.
This pattern validates Visa card numbers with 13 to 16 digits.

## Mastercard Pattern (mastercardPattern):

^: Asserts the start of the string.
5[1-5]: Matches the first two digits of Mastercard card numbers, where the second digit is in the range 1 to 5.
\d{14}: Matches exactly 14 digits after the initial '5'.
$: Asserts the end of the string.
This pattern validates Mastercard card numbers with 16 digits, starting with '51' to '55'.
