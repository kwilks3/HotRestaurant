const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tablesApi = [
	// {
	// 	customerName: 'dsadsa',
	// 	phoneNumber: 'gdfgdf',
	// 	customerEmail: 'gfdgd',
	// 	customerID: 'gfdgd',
	// },
	// {
	// 	customerName: 'dsadsa',
	// 	phoneNumber: 'gdfgdf',
	// 	customerEmail: 'gfdgd',
	// 	customerID: 'gfdgd',
	// },
	// {
	// 	customerName: 'dsadsa',
	// 	phoneNumber: 'gdfgdf',
	// 	customerEmail: 'gfdgd',
	// 	customerID: 'gfdgd',
	// },
	// {
	// 	customerName: 'dsadsa',
	// 	phoneNumber: 'gdfgdf',
	// 	customerEmail: 'gfdgd',
	// 	customerID: 'gfdgd',
	// },
	// {
	// 	customerName: 'dsadsa',
	// 	phoneNumber: 'gdfgdf',
	// 	customerEmail: 'gfdgd',
	// 	customerID: 'gfdgd',
	// },
];
var waitlistApi = [
    {
		customerName: 'dsadsa',
		phoneNumber: 'gdfgdf',
		customerEmail: 'gfdgd',
		customerID: 'gfdgd',
	},
	{
		customerName: 'dsadsa',
		phoneNumber: 'gdfgdf',
		customerEmail: 'gfdgd',
		customerID: 'gfdgd',
	},
	{
		customerName: 'dsadsa',
		phoneNumber: 'gdfgdf',
		customerEmail: 'gfdgd',
		customerID: 'gfdgd',
	},
	{
		customerName: 'dsadsa',
		phoneNumber: 'gdfgdf',
		customerEmail: 'gfdgd',
		customerID: 'gfdgd',
	},
	{
		customerName: 'dsadsa',
		phoneNumber: 'gdfgdf',
		customerEmail: 'gfdgd',
		customerID: 'gfdgd',
	},
];

const port = process.env.PORT || 8000;

// view routes
app.get('/', (req, res) => {
	console.log('home');
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', (req, res) => {
	console.log('tables');
	res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reservations', (req, res) => {
	console.log('reservations');
	res.sendFile(path.join(__dirname, 'reservation.html'));
});

// api post routes
// app.post('/api/waitlist', (req, res) => {
// 	var newWaitlist = req.body;
// 	newWaitlist.routeName = newWaitlist.name.replace(/\s+/g, '').toLowerCase();
// 	console.log(newWaitlist);
// 	waitlistApi.push(newWaitlist);
// 	res.json(waitlistApi);
// });

app.post('/api/tables', (req, res) => {
	var newTables = req.body;
    console.log(newTables);
    if (tablesApi.length >= 5) {
        waitlistApi.push(newTables);
        res.send("Our 5 tables are taken, you're on the waitlist!");
    } else {
        tablesApi.push(newTables);
        res.send("You're on the list!");
    }
});

// api get routes
app.get('/api/waitlist', (req, res) => {
	res.json(waitlistApi);
});

app.get('/api/tables', (req, res) => {
	res.json(tablesApi);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
