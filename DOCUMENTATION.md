# Lilly Technical Challenge Documentation Template

*This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!*

***Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary.***

## Approach
*How did you approach this challenge? Did you work through the objectives in any particular order? If so, why? Did you utilize any external resources, such as tutorials, guides, or other materials?*
- Had to look up some guides for basic javascript -> have yet to learn it
- Tackled both the first and second step together.
    - Firstly fetched and displayed the data to the front end and created a table in HTML and styled with CSS (used [devDocs](devdovs.io) to help with making a table and other HTML/JS/CSS syntax)
    - In the displayData function, I looped through the array, while creating the table cells for each data item. For missing entries, I use the fallback value
    - It was different for price due to it not being `''`, but rather `null` so i used the ternary operator.
    - To show the missing values clearer, I linked it with the id class `missing-value` to make it bold in css
- Created the create, remove, and update functions in js.
    - Includes basic validation, and updates after each action.

## Objectives - Innovative Solutions
*For the challenge objectives, did you do anything in a particular way that you want to discuss? Is there anything you're particularly proud of that you want to highlight? Did you attempt some objectives multiple times, or go back and re-write particular sections of code? If so, why? Use this space to document any key points you'd like to tell us about.*

## Problems Faced
*Use this space to document and discuss any issues you faced while undertaking this challenge and how you solved them. We recommend doing this proactively as you experience and resolve the issues - make sure you don't forget! (Screenshots are helpful, though not required)*.
- Faced a lot of problems with uploading it to my github repo

## Evaluation
*How did you feel about the challenge overall? Did some parts go better than others? Did you run out of time? If you were to do this again, and were given more time, what would you do differently?*