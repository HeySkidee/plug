const plug = {
    get: (url) =>{
        return new Promise((resolve, reject)=>{
            fetch(url, { method: "GET" })
            .then(response => response.json())
            .then(data => resolve(data))
        })
    }
}