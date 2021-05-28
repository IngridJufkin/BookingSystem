# BookingSystem

Service booking system

npm install dotenv
npm install express
npm install -g nodemon
npm install mongoose
npm install body-parser

## Postman

#### Post new service name

POST http://localhost:3001/API/service

```
{
    "serviceName":"Haircut"
}
```

#### Post new service

POST http://localhost:3001/API/serviceOrder

```
{
    "serviceName":"Soeng",
    "serviceTime":"10:00",
    "date":"2021-07-07",
    "status":0
}

```

#### Get service by name, date and status

GET http://localhost:3001/API/serviceOrder/2021-05-07/Massage/0

#### Update service. Adding name, email, mobile no and changing status

PATCH http://localhost:3001/API/serviceOrder/60b11093cdd20853a8bc02a7

```
{
    "userName":"Jane2",
    "userEmail":"jane.jane@vikk.ee",
    "userMobile":55512345,
    "status": 1
}
```
