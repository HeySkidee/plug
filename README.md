# Plug

a wrapper around the native `fetch` api that i made for fun

right now it only supports GET requests

---

To use Plug, just add this script tag to your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/HeySkidee/plug/plug.js"></script>
```
---

You can make a GET request like this:

```javascript
const response = await plug.get('https://jsonplaceholder.typicode.com/posts/1');
```

### Example

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
