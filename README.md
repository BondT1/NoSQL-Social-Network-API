# 18 NoSQL: Social Network API

## Description

The aim of this application was to create an API for a social network using a NoSQL database to help handle large amounts of unstructured data. The information was synced to a MongoDB databse. The API allows the creation and deletion of users, thoughts, friends, and reactions, while also allowing the user to search for these users and update information. 

The features used in this project were:

- Javascript
- NOSQL
- Mongoose
- MongoDB
- Node.js
- Express 

## Installation

To install the necesary packages, input 'npm i mongoose', 'npm i express', and 'npm i moment'. Also make sure you have Insomnia downloaded and the MongoDB client installed. Ensure that your MongoDB client is connected to your locaLhost, and that this connection url matches the url given in the code.

## Usage

Once the necessary packages and software are installed, and your MongoDB client is connected to your local host, enter the command 'npm run start' to start the server and sync the database to the MongoDb server.

Next head over to Insomnia.

In Insomnia you will firstly be able to find all users on the database, find a single user through ID, create a user, update a user, and delete a user. These are acheived by using the corresponding endponts in the code.

Using the same process, you can also add a friend or delete a friend corresponding to the different users.

Following on from this, the ability of creating thoughts or posts is possible too, as well as finding all thoughts or a single thought, updating a thought, and deleteing a thought.

Finally, you are also able to create reactions or comments to thoughts, as well as delete these reactions when desired. 


Here is a walkthrough video of the functional application - https://drive.google.com/file/d/1SbY20Vi9gswQQMMmJFArDS0Cx2zC2Vic/view


## Credits

N/A

## License

N/A

