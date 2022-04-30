# FAVS API

This API was build to use for anybody. The instuctions to use well are show below:

### Requirements

- You need to install NodeJS,VsCode,MongoDB,Postman and also Git.
- Once you clone the repository in your computer, open the folders in the VsCode editor and then don't forget install packages `npm i`
- Then you need to create a file called `.env`. Inside create a variable call `JWT_SECRET="put your secret here"` and also if you want add `DATABASE="URL of the database"`
- Once you install everything that you need, run the application using `npm start`.
- To test the API you can use some program like Postman.
- To use Postman first you need to pass the URL and the endpoint: `Example to create a new user:  http://localhost:3000/auth/local/register`

### Routes

This section is to describe the routes presents is this API

| Route               | HTTP Verb | Description                                                               |
| --------------------| --------- | --------------------------------------------------------------------------|
| /api/favs           | GET       | Get all list of favorites for a user                                      |
| /api/favs           | POST      | Creates a new list of favorites for a user                                |
| /api/favs/:id       | GET       | Get a single list of favorites, here :id is the id of a list of favorites |
| /api/favs/:id       | DELETE    | Deletes a list of favorites, here :id is the id of a list os favorites    |
| /auth/local/login   | POST      | Login user by email/password                                              |
| /auth/local/register| POST      | Register user by email/password                                           |

Enjoy the API.
