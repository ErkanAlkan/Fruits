const mongoose = require('mongoose');

//connect to MongoDB by specifying port to access MongoDB server
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB');
}


//create a SCHEMA that sets out the fields each document will have and their datatypes
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
})

//create a MODEL
const Fruit = new mongoose.model("Fruit", fruitSchema)

//create a DOCUMENT
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Great!"
})

//save the document
// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

//create a MODEL
const Person = mongoose.model('Person', personSchema);

//create a DOCUMENT
const person = new Person({
  name: "John",
  age: 37
});

//Save it
person.save();




const kiwi = new Fruit({
  name: 'Kiwi',
  score: 10,
  review: 'The best fruit!'
});

const orange = new Fruit({
  name: 'Orange',
  score: 4,
  review: 'Too sour for me'
});

const banana = new Fruit({
  name: 'Banana',
  score: 3,
  review: 'Weird texture'
});

Fruit.insertMany([kiwi, orange, banana], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully saved all the fruits to FruitsDB');
  }
});
