# FlataBeer

Today you'll be building an app for viewing and editing beers. You will be using a local API and building out the frontend for our app, FlataBeer.

## Demo

Use this gif as an example of how the app should work.

![demo gif](assets/demo.gif)

## Setup

- Fork and clone this repository
- Run `json-server --watch db.json` to get the backend started
- Open `index.html` in your browser

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/beers/[:id]` (start with /beers/1)
- PATCH `/beers/[:id]`
- GET `/beers`

## Core Deliverables

As a user, I can:

- See the first beer's details, including its **name, image, description, and reviews**, when the page loads
- Change the beer's description and **still see that change when reloading the page**
- See a menu of all beers on the left side of the page -- clicking a beer's name replaces the currently displayed beer's details with the details of the beer I clicked on 

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills. Consider refactoring your current code before moving on.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I can:

- Add a review for the beer (no persistence needed)
- Still see the review after refreshing the page
- Delete a review

## Rubric

You can find the rubric for this assessment [here](https://github.com/learn-co-curriculum/se-rubrics/blob/master/module-3.md).
