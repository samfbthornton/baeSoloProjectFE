## CRAFT BEER TRACKER
## CRUD APPLICATION PROJECT

### OBJECTIVE

To create a CRUD application with the utilisation of supporting tools, methodologies and technologies that encapsulate all core modules covered during training.

The project will involve concepts from all the core training modules; more specifically, this will involve:

* Project Management
* Databases
* Java SE
* Spring Boot
* Front-End Development
* Automated Testing

### PROJECT MANAGEMENT - JIRA

For the project, I used a scrum project on Jira. Once compiling my user stories in my backlog, including story point estimations, I assigned them to three Epics: Database, Back-End, and Front-End. I then created a Sprint, that lasted for 3 days.

During the project, I returned to my Sprint board to update issues to identify them as "In Progress" or "Done" when appropriate. I also linked my GitHub and Jira accounts together, in order to comment on issues when pushing code to GitHub.

Here's a link to my
[Jira Project](https://bootcampbae.atlassian.net/jira/software/projects/HP/boards/2)

### DATABASES

During testing I created an H2 Console, which made it easy to test the the Back-End while compiling. With a data.sql and schema.sql file, it meant that a atble could be pre-populated in order to test request functions. This database would only exist when the app was running, and would start "afresh" each time.

MySQL was used for a persistent database, which meant data would stay in the database, even when the app wasn't running.

The images below show an Entity Relationship diagram, and a populated table in MySQL.

![ERD](https://i.imgur.com/PenMBED.png)

![SQLSTable](https://i.imgur.com/owr0pNs.png)

### BACK-END

The Back-End was created using the Spring-Boot framework in Java. As a framework, this made integration to the Front-End a lot simpler, as I was able to call methods from this framework.

The Back-End has all the functionality to Create, Read, Update and Delete objects in the database. It also includes the methods for HTTP requests, which allows the Front-End to access the database, via the Back-End.

### FRONT-END

For the Front-End, I used HTML and JavaScript. I also used the CSS Bootstrap framework in order to stylise my webpage.

I created two forms in HTML, to allow the user to create and update a beer. All beers are shown on the page as Cards, using the Bootstrap framework.

In JavaScript, the functions for Create, Read(GetAll), Update(Replace) and Delete were created in order for the user to access and manipulate data in the database.

I also added a History section at the bottom, which would inform the user what they have done in that sessiom.

See below for some screenshots of my Front-End:

![Imgur](https://i.imgur.com/giybgkE.png)
The final Front-End, with a background photo.

![history](https://i.imgur.com/ohaLjIv.png)
A creenshot of "History" before the phot was added.

### TESTING

Two types of testing were employed during the project.

Unit testing used mockito and an H2 database to test the funcionality each method(unit). e.g., testCreate would pass if the function added a new object to the table.

Integration testing used MockMVC in Spring Boot to test the integration of HTTP requests and Database.

See below for screenshots of testing:

![unit](https://i.imgur.com/hHs0Bgi.png)
Unit testing

![integration](https://i.imgur.com/1hWSNmB.png)
Integration testing

![Imgur](https://i.imgur.com/1fAGgO8.png)
Testing coverage

### STRETCH GOALS

Further improvemts could include:

* Adding warnings to confirm whether a user wants to delete or update a beer.
* Turning the beer "cards" into a table, for neater presentation.
* Adding an update function for single data items, and in-table editing.


### ACKNOWLEDGEMENTS

I am forever grateful to Jordan Harrison and Jordan Benbelaid for their training and patience.

I would also like to thank the BAE12 cohort, but in particular the members of Team 4. 

Samuel Thornton