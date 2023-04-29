const express = require('express');
const app = express();

app.use(express.json());

let trainList = [
    {
		"trainName": "Hyderabad Exp",
		"trainNumber": "2341",
		"departureTime": {
			"Hours": 23,
			"Minutes": 55,
			"Seconds": 0
		},
		"seatsAvailable": {
			"sleeper": 6,
			"AC": 7
		},
		"price": {
			"sleeper": 554,
			"AC": 1854
		},
		"delayedBy": 5
	},
	{
		"trainName": "Chennai Exp",
		"trainNumber": "2344",
		"departureTime": {
			"Hours": 21,
			"Minutes": 35,
			"Seconds": 0
		},
		"seatsAvailable": {
			"sleeper": 3,
			"AC": 1
		},
		"price": {
			"sleeper": 2,
			"AC": 5
		}
    },
    {
		"trainName": "Rajdhani Exp",
		"trainNumber": "2348",
		"departureTime": {
			"Hours": 16,
			"Minutes": 12,
			"Seconds": 0
		},
		"seatsAvailable": {
			"sleeper": 1,
			"AC": 1
		},
		"price": {
			"sleeper": 0,
			"AC": 5
		}
    },
    {
		"trainName": "Patna Exp",
		"trainNumber": "2340",
		"departureTime": {
			"Hours": 19,
			"Minutes": 12,
			"Seconds": 0
		},
		"seatsAvailable": {
			"sleeper": 1,
			"AC": 1
		},
		"price": {
			"sleeper": 0,
			"AC": 5
		}
    },
    {
		"trainName": "JanSatabadi Exp",
		"trainNumber": "2320",
		"departureTime": {
			"Hours": 12,
			"Minutes": 12,
			"Seconds": 0
		},
		"seatsAvailable": {
			"sleeper": 1,
			"AC": 1
		},
		"price": {
			"sleeper": 0,
			"AC": 5
		}
    }
]

// Define routes
app.get('/train/trains', (req, res) => {
    return res.json({ allTrains: trainList });
});

//get train info ny id
app.get("/train/trains/:id", (req, res) => {
    const id = req.params.id;
    console.log('id')
    // Find train by ID
    const train = trainList.find(t => t.trainNumber === id);

    // If train not found, return 404
    if (!train) {
        res.status(404).send('Train not found');
        return;
    }

    // If train found, return train object
    res.send(train);
});

app.post('/train/register', (req, res) => {
    console.log('a::',req.body);
    if(!req.body){
        res.status(400).send('Please fill all the Details')
    }
    res.status(200).send('Register Successfully');
});

// Start server
app.listen(9000, () => {
  console.log('Server listening on port 9000');
});