# Project1-Animal-Shelter-FrontEnd

# QA Personal CRUD Project

This is my README regarding my Yorkshire Animal Shelter Project with QA Training.

## Contents

- [Introduction](#Introduction)
- [Scope](#Scope)
- [Technology](#Technology)
- [Kanban Board](#Kanban-Board)
- [Database](#Database)
- [Back-end](#Back-end)
- [Front-end](#Front-end)
- [Testing](#Testing)
- [Design](#Design)
- [Areas for Future Improvememt](#Areas-for-Future-Improvement)
- [Author and Acknowledgements](#Author-and-Acknowledgements)

## Introduction
My first project with QA was a fullstack project in which I have been required to create a web application. The specification for this project covers what we have learnt over the past 5 weeks of training. It focuses on CRUD functionality within both the front and back-end.

This README has been created to outline my project and provides guidance on how to run the web application made along with any future improvements I feel I could make to the project.

## Scope

My project had to include the following:

-A Jira board with full expansion on user stories, use cases and tasks needed to complete the project. Using SCRUM methodologies and Agile priniciples: https://qatrainingnsac11.atlassian.net/secure/RapidBoard.jspa?rapidView=5&projectKey=P1AS&view=planning.nodetail&issueLimit=100

-Clear Documentation from a design phase describing the architecture you will use for your project: This is covered using this README file. I also planned my project in my notebook to provide myself with a head start.

-A relational database used to store data persistently for the project.

-A functional application created in the OOP language, following best practices and design principles, that you have covered during training, this application needs to meet the requirements set on your Kanban Board

-The application must have a functioning front-end website and integrated API.

-Fully designed test suites for the application you are creating, as well as automated tests for validation of the application.

-You must meet an acceptable level of test coverage in your backend and provide consistent reports and evidence that you have done so.

-Code fully integrated into a Version Control System

## Technology

The following is the technology I have used for each element of my project:
-Kanban Board: Jira Software
-Version Controle: Github and Git
-Back-end API: Java Language with a Spring Framework on Eclipse Workbench
-Front-end: HTML, CSS, JS on Visual Studio
-Database: MySQL as my persistent and H2 database for my testing
-Test Suit: JUint
-Automation Testing: I did not get round to my automation testing however for this I would have used Selenium

## Kanban Board

My kanban board was created on Jira Software using a SCRUM methodology and agile principles

An example of my jira board is below:
![Jira user story example](./Pictures/kanbanboard.jpg)

An example of a user story is below:
![Jira user story](./Pictures/UserStories.jpg)

The Jira board was created to allow me to follow a plan with my project in a way which flows easily and allows me to move them from to-do into in-progress and finally into completed. 

## Database

Below is a picture of my entity relationship diagram (ERD) for my database. My project only required 1 table and therefore there will be no relationship links.
![MySQL Workbench ERD](./Pictures/MySQLDatabase.jpg)

## Back-end

My Github Repo can be found [here](https://github.com/MeganMette/Project1-Animal-Shelter)

My Database design used for this project was H2 console to complete my local testing. I then went on to use MySQL Workbench with my ShelterAnimal-data.sql script. This will automatically create case exaples for testing purposes.
I then used MySQL Workbench for my persistent database.

## Front-end

My Github Repo can be found [here](https://github.com/MeganMette/Project1-Animal-Shelter-FrontEnd)

The front-end of my project has been written in Hypertext Markup Langauge (HTML), Cascading Style Sheets (CSS) and Javascript (JS). This was done using the Visual Studio Code IDE.

I have used elements of Bootstrap for my styling. I was unsyure of where to start and how to style my project. I began using a navbar however, I didn't feel this portrayed me as a person as it is fairly plain and I am quite the oposite. That is why I have changed it to include more colour and a few pictures of animals. 

The JS has been used to make the project more functional and to allow the end user to interact. This is what provides the CRUD functionality within the project.

## Testing

I acheived my integration testing by using MockMvc in the JUnit Suite. I did this to make sure my methods worked correctly and would perform the CRUD functionalities as required. I ran the tests against the H2 database to ensure I didn't pollute the persistent data (on MySQL).

I used mockito for my unit tests to mock my methods.

I unfortunately did not get round to completing my automated testing with selenium as I was having trouble setting up my CRUD functionality.

## Design

The design of my web application, I hope, is a representation of me as a person. Creative and colourful. I have a big heart for animals and this is where my desire to create a shelter log page came from. I am a very creative individual and enjoy taking part in many different crafts and projects. This was another form of creativity in which I would like to test myself further and accomplish more. It is a new language of creativity to me and this is what I enjoy learning. 
This is a picture of initial front-end web application:
![Front-end Web Application](./Picture/frontend.jpg)

This is a picture of a simple about us page:
![Front-end Web Application About Us page](./Picture/frontendaboutus.jpg)

This is a picture of the modal used to update a pets details:
![Front-end Web Application modal](./Picture/modal.jpg)

This is a picture of the card that is created with the pets details:
![Front-end Web Application card](./Picture/card.jpg)

## Areas for Future Inprovement

There are a few improvements I would like to make on my project:
-I would like to include additional databases in order to separate out each animal that is within the shelter.
-I would also like to add additional html pages to the webpage so you can view the pets in the database.
-Additionally, I would like to add a function to allow images of the pet to be included.
-A filter function would also be beneficial as when the database grows it would allow you to view a specific set of animals.
-I woudl also like to apply a adopt function which allows customers to fill in a form of their details (which would require a second database) and links to the pets.


## Author and Acknowledgements
I would like to thank all the QA trainers that have helped us all through the past 5 weeks. I would expecially like to thank Jordan Harrison for the extra support he has provided me throughout this time.

I would also like to thank my fiance for the support he has provided me throughout and ensuring I keep going. He is truely amazing.

Yorkshire Animal Shelter Project By: Megan McCollin-Smith (Soon to be Richardson)