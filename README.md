
# Library RESTful API 

 A Simple RESTful API for managing a library system. 

 




## Authors

- [@Prabhat Kumar](https://www.github.com/prabhatsingh9304)



## Demo

Library API is deploy and server is live on render.

Render Link:- https://library-api-sakx.onrender.com

### 1. Retreive All books
     
    1.1. Install Postman
    
    1.2. Make a Get request on 
    
        https://library-api-sakx.onrender.com/api/books
    
    1.3. All books will get retreive in response json.

    Retreive All books demo Screenshot:- https://shorturl.at/vST36

### 2. Post a new book

    2.2 Make a post request

        https://library-api-sakx.onrender.com/api/books

    2.3 Pass raw json while making post request
    
        {
            "id": "2",
            "title": "The Power of Habit",
            "author": "Charles Duhigg",
            "publisher": "abc",
            "genre": "Self-Help",
            "ISBN": "12345"
        }
    
    Post a new book demo screenshot:- https://shorturl.at/epuvy

### 3. Update books details

    3.1 Make a put request
    
        https://library-api-sakx.onrender.com/api/books/{id}

        e.g. https://library-api-sakx.onrender.com/api/books/1
    3.2 Pass raw json while making put request
        
        {
            "id": "1",
            "title": "Atomic Habits",
            "author": "James Clear",
            "publisher": "abc",
            "genre": "Self-Help",
            "ISBN": "22"
        }

    Update books demo screenshot:- https://shorturl.at/fwBIX
    






## API Reference

#### Get all books

```http
  GET https://library-api-sakx.onrender.com/api/books
```


####  Add new book

```http
  POST https://library-api-sakx.onrender.com/api/books
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of book |
| `title`   | `string` | **Required**. title of book |
| `author`  | `string` | **Required**. author of book |
| `publisher`| `string` | **Required**. publisher of book |
| `genre`      | `string` | **Required**. genre of book  |
| `ISBN`      | `string` | **Required**. ISBN of book  |


####  Update book

```http
  PUT https://library-api-sakx.onrender.com/api/books/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of book |
| `title`   | `string` | **Required**. title of book |
| `author`  | `string` | **Required**. author of book |
| `publisher'| `string` | **Required**. publisher of book |
| `genre`      | `string` | **Required**. genre of book  |
| `ISBN`      | `string` | **Required**. ISBN of book  |

## Run Locally

Clone the project

```bash
  git clone https://github.com/prabhatsingh9304/library-api.git
```

Go to the project directory

```bash
  cd library-api/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```

