const plug = {
    request: (url, method = 'GET', body = null, headers = {}) => {
        return new Promise((resolve, reject) => {
            const options = {
                method: method.toUpperCase(),
                headers: {
                    ...headers
                }
            };

            if (!headers['Content-Type'] && body) {
                options.headers['Content-Type'] = 'application/json';
            }

            if (body && method !== 'GET' && method !== 'DELETE') {
                options.body = headers['Content-Type'] === 'application/json' ? JSON.stringify(body) : body;
            }

            fetch(url, options)
                .then(response => {
                    if (!response.ok) {
                        return reject(new Error(`HTTP error! Status: ${response.status}, URL: ${url}`));
                    }

                    const contentType = response.headers.get('Content-Type') || '';
                    return contentType.includes('application/json') ? response.json() : response.text();
                })
                .then(resolve) 
                .catch(error => reject(new Error(`Request failed: ${error.message}`)));
        });
    },

    get: (url, headers = {}) => plug.request(url, 'GET', null, headers),
    post: (url, body, headers = {}) => plug.request(url, 'POST', body, headers),
    put: (url, body, headers = {}) => plug.request(url, 'PUT', body, headers),
    delete: (url, headers = {}) => plug.request(url, 'DELETE', null, headers)
};

module.exports = plug;
