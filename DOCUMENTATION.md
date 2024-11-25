# Lilly Technical Challenge Documentation Template

*This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!*

***Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary.***

## Approach
- Had to look up some guides for javascript
- Tackled both the first and second step together.
    - Firstly fetched and displayed the data to the front end and created a table in HTML and styled with CSS (used [devDocs](devdovs.io) to help with making a table and other HTML/JS/CSS syntax)
    - In the displayData function, I looped through the array, while creating the table cells for each data item. For missing entries, I use the fallback value
    - It was different for price due to it not being `''`, but rather `null` so i used the ternary operator.
    - To show the missing values clearer, I linked it with the id class `missing-value` to make it bold in css
- Created the create, remove, and update functions in js.
    - Includes basic validation, and updates after each action.
- Made it look nice through css by making a tab menu selecting through the CRUD operations.

## Objectives - Innovative Solutions
- I had to redo the css for customising how the tabs look, as well as recoding that same section in javascript 

## Problems Faced
- Faced a lot of problems with uploading it to my github repo
- Had to research and understand how to do `fetch... catch` and knowing what goes inside 

## Evaluation
- I found the challenge difficult, but I was able to use it as a learning opportunity using more javascript, html, and css.
- It took me a lot longer than I thought to complete the base objectives, but some of the javascript was nice and familiar due to mmy past home system project, as well as syntax being similar to dart.
- I would've hoped to have edited the python code, but I was unsure how to go about that unless I did the optional challenge