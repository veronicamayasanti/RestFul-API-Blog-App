# User API Spec
## Register User API

Endpoint: POST /api/user/register

Request Body:
``` json
{
    "email": "maya@mail.com",
    "password" : "rahasia"
}
```
Response Body Success:
``` json
{ 
    "message" : "Register Success"
}
```
Response Body Error:
```json
{
    "message": "Email already exists"
}
```

## Login User API
Endpoint: POST /api/user/login

{
    "email": "maya@mail.com",
    "password" : "rahasia"
}
```
Response Body Success:
``` json
{ 
    "data" : {
        "token": "unique-token"
    }
}
```
Response Body Error:
```json
{
    "message": "Email or password wrong"
}
```

### Logout User API
Endpoint: PUT /api/user/me

Headers:
* Authorization: token


Response Body Success:
```json
{
    "message": "logout  success",
}
```
Response Body Error: 
```json 
{
    "message": "Unauthorized"
}
```