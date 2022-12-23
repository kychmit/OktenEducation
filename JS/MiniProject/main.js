let container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container')

fetch('https://jsonplaceholder.typicode.com/users')
    .then((value) => value.json())
    .then((value) => {
            for (const item of value) {

                let userDiv = document.createElement('div');
                userDiv.classList.add('userDiv');
                container.appendChild(userDiv);

                userDiv.innerText = `${item.id} - ${item.name}`;
                let userButton = document.createElement('button');

                userDiv.appendChild(userButton);
                userButton.classList.add('userButton');
                userButton.innerText = 'my details';
                userButton.onclick = function () {
                    window.location = 'user_details.html?id=' + item.id;
                }
            }
        }
    )