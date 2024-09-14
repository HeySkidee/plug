# Plug

A wrapper for the fetch API that simplifies HTTP requests 

---

## Installation

use npm: 
```bash
npm i the-plug
```
or cdn:
```html
<script src="https://cdn.jsdelivr.net/npm/the-plug@1.0.7/plug.js"></script>
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
    <script src="https://cdn.jsdelivr.net/npm/the-plug@1.0.7/plug.js"></script>
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