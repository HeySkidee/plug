# Plug

A wrapper for the fetch API that simplifies HTTP requests 

[![NPM Downloads](https://badgen.net/npm/dm/the-plug)](https://npmcharts.com/compare/the-plug?minimal=true)
[![NPM Version](https://badgen.net/npm/v/the-plug)](https://npmjs.org/package/the-plug)

---

## Installation

use npm: 
```bash
npm i the-plug
```
or cdn:
```html
<script src="https://cdn.jsdelivr.net/npm/the-plug@1.0.8/plug.js"></script>
```

---

## Usage:

### Example (express):

```javascript
const express = require('express')
const app = express()

const plug = require('the-plug')

app.get('/', async (req, res)=>{
    const response = await plug.get('https://official-joke-api.appspot.com/random_joke')

    res.json(response)
})

app.listen(3000)
```

### Example (HTML):
```html
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/the-plug@1.0.8/plug.js"></script>
</head>
<body>
    <h2>Random Joke</h2>
    <p></p>
    <p></p>

    <script>
        async function getJoke() {
            const joke = await plug.get('https://official-joke-api.appspot.com/random_joke');

            document.querySelectorAll('p')[0].innerHTML = joke.setup;
            document.querySelectorAll('p')[1].innerHTML = joke.punchline;
        }

        getJoke();
    </script>
</body>
</html>
```

## Additional Examples:

### POST Request

To send data to a server, you can use the `post` method:

```javascript
const data = { name: "John Doe", age: 30 };
const response = await plug.post('https://your-api-endpoint.com/users', data, {
    'Content-Type': 'application/json'
});
console.log(response);
```

### PUT Request

To update existing data, use the `put` method:

```javascript
const updatedData = { name: "John Doe", age: 31 };
const response = await plug.put('https://your-api-endpoint.com/users/1', updatedData, {
    'Content-Type': 'application/json'
});
console.log(response);
```

### DELETE Request

To delete data from a server, use the `delete` method:

```javascript
const response = await plug.delete('https://your-api-endpoint.com/users/1', {
    'Authorization': 'Bearer your-token-here'
});
console.log(response);
```