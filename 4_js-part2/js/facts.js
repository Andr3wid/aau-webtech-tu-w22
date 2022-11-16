const btn = document.getElementById('get-fact');
const container = document.getElementById('fact');

btn.addEventListener('click', (e) => {
    fetch('http://localhost:3000/randomfact')
        .then(response => response.json())
        .then(jsonFactResponse => { 
            console.log('received a fact', jsonFactResponse);
            container.innerText = jsonFactResponse.catfact;
        });
});
