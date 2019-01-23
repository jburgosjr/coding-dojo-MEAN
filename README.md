# Coding Dojo MEAN (MongoDb, Express.js, Angular, Node.js)
### Learning and using MEAN to create full scale web applications

#### Main concepts were:
* ##### Understand Client-side JavaScript and JavaScript OOP
* ##### Understand building MVC frameworks with Node and Express
* ##### Understand the separation between the client and the server by building separate applications with Angular
* ##### Build full MEAN applications

# Projects

#### Landing Page
  > Create a small node server capable of handling the following request URLs:
  >- localhost:6789/    This route should serve a view file called index.html and display a greeting.
  >- localhost:6789/ninjas    This route should serve a view file called ninjas.html and display information about ninjas.
  >- localhost:6789/dojos/new    This route should serve a view file called dojos.html and have a form (don't worry about where the form should be sent to).
  
#### Cars and Cats 
  > Create a small node server capable of handling the following request URL's
  >- Have localhost:7077/cars go to a simple HTML page that shows some cool pictures of different cars.  These car pictures should be stored in your images folder on your server.  
  >- Have localhost:7077/cats show a simple HTML page with some cool pictures of cats.  Again, make sure these pictures are stored on your server.  
  >- Have localhost:7077/cars/new show a simple form where the user can add a new car information. For the /cars/new HTML page, no need to store this information in the database nor is there a need to validate the entries. Simply have the form there.
  
#### Express Cars and Cats
  > Repeat the Cars and Cats assignment but with express. 
  
  >- localhost:8000/cars.html - A simple HTML page that shows some cool pictures of different cars.  These car pictures should be stored in your static directory.  DON'T just link to pictures of cars stored somewhere else! Even better, put them in a directory called 'images' inside of your static directory.

  >- localhost:8000/cats.html - A simple HTML page with some cool pictures of cats.  Again, make sure these pictures are stored on your server.

  >- localhost:8000/form.html - A simple form where the user can add new car information. For this page, there is no need to have the form do anything. Simply display the form there
  
#### EJS Cars and Cats
  > Repeat the previous assignment, but this time use EJS and include a views directory. 
  
  >- Have '/cars' show your pictures of cars.
  >- Have '/cats' show your pictures of cats.
  >- Have 'cars/new' show a form to create a new car. The form does not have to do anything yet.
  >- Keep your index.html file in the static directory. It should render even when your server does not explicitly handle the '/' route
  
#### EJS Cat Data 
  > Create an application that shows all the cats on /cats and make all the images clickable
  
  >- Clicking an image of a cat should navigate to a unique route in the server, which may be hardcoded
  >- Each of the cat's unique routes should render the same template and pass it data about that cat. This data may be hardcoded in the server.
  >- Display the data about the cat in the template
  >- Include at least one array in the cat's data and iterate over it in the template with ejs
  
#### Counter
  > Build an Express application that counts the number of times the root route ('/') has been viewed by the user
  
  >- Add a +2 button underneath the counter that reloads the page and increments counter by 2. Add another route to handle this functionality.  
  >- Add a reset button that resets the counter back to 1. Add another route to handle this functionality.  
  
#### Survey Form
  >- Have the server render views/index.ejs that has the form for the user to fill out
  >- The user fills out the form and submits
  >- The submitted form gets sent to /result
  >- The server recognizes when someone posts things to /result, grabs information from the POST, and sends the POST data back as it renders views/results.ejs 
  
#### Survey Form Socket
  >- Have the server render views/index.ejs that has the form for the user to fill out
  >- The user fills out the form and submits
  >- The form information is EMITTED to the server with the event name "posting_form"
  >- The server listens for an event 'posting_form' and when this event gets triggered, organizes all the emitted information to form a single message and sends this single message with the event called 'updated_message'. It also EMITs an event called 'random_number' with random number between 1-1000.
  >- The client listens for an event called 'random_number' and when this event gets triggered, shows the number in the HTML.
  >- The client listens for an event called 'updated_message' and when this event gets triggered, displays the message somewhere in the HTML
  
#### Epic Button Game
  > Your app should serve only a single view, index.ejs.  Any time the epic button is pushed, the count should update on every user who is connected via sockets.  This should happen in real time.  If a user clicks the reset button, the count should reset to 0 for every user as well!
  > use Express and Sockets
  
#### Colors
  > Create a socket application that presents the user with 3 buttons for color options. When a user clicks on one of the color options, all currently connected socket users should have their entire background change to that color.
  > As soon as a new user connects to our server, update their color with the most recent color previously selected by the last user
  
#### Group Chat 
  > Create a simple app where multiple people can go to your nodeJS app and start chatting with each other. You could connect to your web app from multiple browsers (one from Safari, one from Firefox, one from Chrome for example) to mimic multiple people visiting your site. Use javascript 'prompt' to get the user's name. Your chat board should update in real time and even show all the chats that occurred before the user joined the room.
  
#### Quoting Dojo
  > build a simple app that allows users to add quotes to a database and display them on a separate page.  
  > When you create a new quote, if there are errors in the .save() method, use flash messages to display the errors.
  
  > Use the following URLs for your project:
  >- GET ' / ' for the screen on top
  >- POST '/quotes' for the method of the form to make a new quote.
  >- GET '/quotes' for the screen on the right (where all the quotes are rendered).
  
#### Sasquatch Dashboard
  > utilize all 4 CRUD methods with Mongoose. In this exercise, you'll build an app which manages a pack of some kind of animal (think otter, rabbit, or owl). You need to be able to add a new animal, update it, and delete it. You should use the following routes to build this app:

  >- GET '/' Displays all of the mongooses.
  >- GET '/mongooses/:id' Displays information about one mongoose.
  >- GET '/mongooses/new' Displays a form for making a new mongoose.
  >- POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
  >- GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
  >- POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
  >- POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
  
#### Message Board
  > create a simple single page message board that allows users to create messages, and comment on existing messages. Remember to put some time into planning out your database to play to Mongo's strengths. Include validations so empty fields are not permitted
  
  >- Plan your database structure to play to Mongo's strengths
  >- Include backend validations to make sure all fields are completed
  >- When the page loads, show all messages and their comments
  
#### LogReg
  > Create a login and registration that uses back-end validation, catches errors, and displays them to the client.
  > Required Registration Fields:
  >- email
  >- first_name
  >- last_name
  >- password
  >- birthday
  
  > Each registration field should have at least one back-end validation on it
  > Emails should be unique and valid emails.
  > The login form should just have fields for password and email
  > For this assignment, we recommend that you write all your own code to check for possible errors. 
  > After you have successfully checked for errors with your own code and passed back error messages to the user, implement mongoose validations.
  
#### Ninja Gold
 > For this assignment, use your knowledge of event handlers, angular components, and services to re-create the beloved Ninja Gold assignment using Angular, Node and MongoDB. The data should be stored in the database. For now, have a new game begin every time the page is refreshed - you may change this later if you choose.
 
#### Rate my cakes 
  > Create an application that allows users to submit pictures of cakes. All the cakes may be viewed, rated from 1-5 stars, and commented upon. When a cake image is clicked, have a nested details component show the image, the baker of the cake, the average rating, and all the different ratings and comments. Include backend validations. Include a search bar to display the cakes only by a certain baker.
  
  >- Create an application that allows users to submit cakes
  >- Allow users to rate and comment upon cakes
  >- Add a nested component to show the details of a particular cake
  
#### choiCoin
  > Create your very own crypto currency website, ShintoCoins, where guests can gain new coins, buy, sell and view the transaction history of ShintoCoins. You do not have to include a database for this assignment. Instead, you may use the Service to hold data needed for multiple partials.
  
  >- Practice using Angular routing to navigate to different components
  >- The service may hold data that can be accessed by the components
  
#### Authors
  > Create an application where users submit their favorite authors. List all the authors on the first page. From there, the user may click on a button to edit or delete each author. The edit form must be pre-populated with the existing data for the author. Use backend validations to ensure that all author names and quotes are at least three characters long. If the user does not pass validations, display an error message. Validations must also be applied when editing an author.
  
  >- Create a full CRUD app with Angular, Express, Node, and MongoDB
  >- Include backend validations
  

  
  
  
  
  
  
  
  
  
