const express = require('express');
const bodyParser = require('body-parser');
const db = require("./models");

// import apiPost from "./app/api/post";
// import apiAuthor from "./app/api/author";

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));

const routes = require('./routes')
app.use('/api', routes);


// apiPost(app, db);
// apiAuthor(app, db);

db.sequelize.sync().then(() => {
  // populate author table with dummy data
  // db.author.bulkCreate(
  //   times(10, () => ({
  //     firstName: faker.name.firstName(),
  //     lastName: faker.name.lastName()
  //   }))
  // );
  // // populate post table with dummy data
  // db.post.bulkCreate(
  //   times(10, () => ({
  //     title: faker.lorem.sentence(),
  //     content: faker.lorem.paragraph(),
  //     authorId: random(1, 10)
  //   }))
  // );
  app.listen(8080, () => console.log("App listening on port 8080!"));
});