const btn = document.getElementById('get-fact');
const container = document.getElementById('fact');

btn.addEventListener('click', (e) => {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(jsonFactResponse => { 
            console.log('received a fact', jsonFactResponse);
            container.innerText = jsonFactResponse.fact;
        });
});