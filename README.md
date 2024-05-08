# nextjs-twitter-clone

## Description

This project is a mini Twitter clone that aims to practice Next.js and make the graduation project Yona submitted better.


## Backlog
- Homepage ("/") : Checks if the user is logged in, and if so, displays the homepage where users can view all the tweets in the database and post new tweets. Otherwise displays a page with a Create Account / Login button.
- Account creation page ("/create-account") for users to register new accounts.
- Login page ("/log-in") for users to authenticate and log into their accounts.
- Tweet detail page ("/tweet/[id]") where users can view the details of a specific tweet and like it.


## Routes
### /:
- When the user is not logged in, the homepage should display a page with a Create Account / Login button.
- After logging in, in the Home Page, the user should see all the Tweets on the database
- The tweets should be displayed in reverse chronological order, with the most recent tweets at the top.
- Each tweet should show the username of the author, the content of the tweet, the number of likes it has, and the timestamp of when it was posted.
- The user should be able to click on a button ("Write a tweet") that redirects them to a page ("/tweet/add") where they can write a new tweet.

### /create-account:
- The user should be able to fill out a form with their desired username, email, and password.
- Upon submitting the form, the user's account information should be validated and saved to the database.
- If the account creation is successful, the user should be redirected to the homepage ("/").
- If there are any validation errors or issues with saving the account information, appropriate error messages should be displayed to the user.

### /log-in:
- The user should be able to fill out a form with their username and password.
- Upon submitting the form, the user's credentials should be validated against the database.
- If the login is successful, the user should be redirected to the homepage ("/").
- If there are any authentication errors, appropriate error messages should be displayed to the user.

### /tweet/add:
- In the tweet add page users can enter the content in a text input field and click a "Post" button.
- Upon posting a new tweet, it should be added to the database and the user should be redirected to the tweet detail page ("/tweet/[id]") to view the newly created tweet.

### /tweet/[id]:
- The user should be able to see the tweet corresponding to its ID and a Like button.
- When the Like button is pressed, save the like on the database and update the UI accordingly.