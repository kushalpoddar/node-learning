/*
This is Drishti Kapoor
These are some of the sample code I created for learning NodeJS
Used ES6 syntax.
I have already installed NodeJS server and express
*/

//Including Express
const express = require('express')
const app = express()
//Using middleware to for dealing with json strings in the request object
app.use(express.json())
//Defining a port variable to listen the server on the particular port
const port = process.env.PORT || 7000 //If environment var is set up else running on port 7000

app.listen(port, () => {
	console.log(`App running on port ${port}`)
})

let users = [{
	name : "Kushal Poddar",
	email : "kushal160200@gmail.com",
},{
	name : "Kushal Poddar",
	email : "drishtikapoor@gmail.com",
},{
	name : "ABCD",
	email : "abcd@gmail.com",
}]

app.get('/users', (req, res) => {
	res.send(users)
})

app.get('/users/:id', (req, res) => {
	if((req.params.id >= 0) && (req.params.id < users.length)){
		res.send(users[req.params.id])	
	}else{
		//Returning 400 response
		res.status(400).send("Invalid ID")
	}
	
})
app.get('/', (req, res) => {
	//rendering the first page
	res.send("Hey how are you")
})

//Dynamic pages with the help of params
app.get('/:no', (req, res) => {
	res.send(`The number is ${req.params.no}`)
})

