# Plug

A wrapper for the fetch API that simplifies HTTP requests 

i made this for fun. right now it only supports GET requests

---

## Installation

use npm: 
```bash
npm i the-plug
```
or cdn:
```html
<script src="https://cdn.jsdelivr.net/gh/HeySkidee/plug/plug.js"></script>
```

---

## Usage:

### Example (express):

```javascript
const express = require('express')
const app = express()

const plug = require('the-plug')

app.get('/', async (req, res)=>{
    const response = await plug.get('https://jsonplaceholder.typicode.com/posts/1')

    res.json(response)
})

app.listen(3000)
```

### Example (HTML):
```html
<html>
<head>
    <script src="https://cdn.jsdelivr.net/gh/HeySkidee/plug/plug.js"></script>
</head>
<body>
    <p></p>

    <script>
        async function getData() {
            const res = await plug.get('https://jsonplaceholder.typicode.com/posts/1');

            console.log(res);
            document.querySelector('p').innerHTML = res.body;
        }

        getData();
    </script>
</body>
</html>
```