Installation Manual

![blue lady.png](blue%20lady.png)

Welcome to my calorie & health application!

Table of Contents
1. About the application
2. Getting started
3. Information on the backend
4. User access to the application
5. User roles
6. Admin access / admin roles
7. Api & API-key

------
1. About the application
With this application, users can calculate in a simple way their calorie or search for healthy recipes with cooking instructions.

It helps the user to cook healthy and know how much calories they consume.

See below the homepage, were the user can find all functionalities of the application.

![HOME page.png](src%2Fassets%2FHOME%20page.png)

2. Getting started
- To run this application you need an IDE, for example; Webstorm.
- U clone the git repository to your local machine
- install node_modules by running the following command:

npm install

Once finalized you will be able to start the application with the following command:

npm start

OR: use (if you use Webstorm) use the Webstorm button (npm start).
Open http://localhost:3000 to view the page in the browser.

If you want to stop running the page in the browser use CTRL + C in the terminal. You can rerun the browser with the command mentioned above.

3. Backend for the HappyHour App
   The educational backend of Novi Hogeschool has been used for this project. Please note: the manual to this backend are in Dutch only.

https://github.com/hogeschoolnovi/novi-educational-backend-documentation

4. Access for users
-Registration and Login
After registering to the application on the registration page, then user will be able to log in with his USERNAME and PASSWORD. A personal token is being saved automatically in the backend. The user will NOT need the access token to log in.

-Password reset:
There is no possibility to reset your password or to access it in another way (f.e. through a reset-email) once forgotten.

Please note:**
the personal token and therefore the access rights expire after a couple of hours.

-Making a new account after access rights expire:
The user can make a new account after his access rights expire. The system generates a new personal token that is connected to the user.

Note:
The user does not have to be able to retrieve the access token, as it will be automatically stored by the backend.


5. User roles
All users will be able to:

Register
Login
For non-registered users it is possible to:

1.Search for recipe or calories (searchbar on homepage). 
2.Search for recipe by ingredient (searchbar on search page). 
3.View newly added recipes (the latest button on homepage). 
4.View several favorite recipes of users (favorite recipes button on homepage).

A registered user can additionally:

Access all the features mentioned above.
Access his/her My Account page.
Access his/her Favourites page
Add and remove recipes to his/her Favourites page.
View, once recipes are saved to the Favourites page, the instructions for the preparation of the recipes.

6. Admin access / admin roles
There have been no admin roles created for this project.

7. Api & API-key
To acces the API key and API browser see the pdf-file of this frontend project and added to this section under "API-key".


