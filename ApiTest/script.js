'use strict'

let request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1:8000/users');
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.send();

request.addEventListener('readystatechange', function() {
    if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.response);
        console.log(data);
    }
});