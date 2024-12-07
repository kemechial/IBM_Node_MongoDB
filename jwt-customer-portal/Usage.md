## Running the App
First change to the project directory from terminal:

`$ cd jwt-customer-portal`

`$ node index.js`

## Accessing API
Create a test user:

```
curl -X POST \
  localhost:3000/register \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "example_user",
    "password": "example_password"
  }'
```
Now login as this user:

```
curl -X POST \
  localhost:3000/login \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "example_user",
    "password": "example_password"
  }'
```
This login will return a jwt token, keep it. Then access the protected route using this token:

```
curl -X GET \
  localhost:3000/dashboard \
  -H 'Authorization:  YOUR_JWT_TOKEN'
```
