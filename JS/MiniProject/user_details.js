let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then((value) => value.json())
    .then((value) => {

        let container = document.createElement('div');
        document.body.appendChild(container);
        container.classList.add('container');

        for (const item in value) {
            let userDiv = document.createElement('div');
            container.appendChild(userDiv);
            userDiv.classList.add('userDiv');

            if (typeof value[item] !== 'object'){
                userDiv.innerText = `${item} ~ ${value[item]}`;
            }
            else {
                userDiv.innerText = `${item}`;
                for (const element in value[item]) {
                    userDivInner = document.createElement('div');
                    userDiv.appendChild(userDivInner);

                    if (typeof value[item][element] !== 'object'){
                        userDivInner.innerText = `${element} ~ ${value[item][element]}`;
                    }
                    else{
                        userDivInner.innerText = `${element}`;
                        for (const key in value[item][element]) {
                           let userDivInnerInner = document.createElement('div');
                           userDivInner.appendChild(userDivInnerInner)
                           if (typeof value[item][element][key] !== 'object') {
                               userDivInnerInner.innerText = `${key} ~ ${value[item][element][key]}`;
                           }
                        }
                    }
                }
            }
        }
        let url1 = new URL(location.href);
        let id1 = url1.searchParams.get('id') +'/posts';

        fetch('https://jsonplaceholder.typicode.com/users/' + id1)
            .then((request) => request.json())
            .then((request) => {

                let button = document.createElement('div');
                document.body.appendChild(button);
                button.classList.add('button');

                let buttonButton = document.createElement('button');
                button.appendChild(buttonButton);
                buttonButton.classList.add('userButton');
                buttonButton.innerText = 'post of current user';

                buttonButton.onclick = function () {
                    let divContainer = document.createElement('div');
                    document.body.appendChild(divContainer);
                    divContainer.classList.add('divContainer');

                    for (const element of request) {
                        let divDetail = document.createElement('div');
                        divContainer.appendChild(divDetail);
                        divDetail.classList.add('divDetail');
                        divDetail.innerText = `${element.id} ~ ${element.title}`;

                        let buttonDetail = document.createElement('button');
                        divContainer.appendChild(buttonDetail);
                        buttonDetail.classList.add('buttonDetail');
                        buttonDetail.innerText = 'post details';
                        buttonDetail.onclick = function () {
                            window.location = 'post_details.html?post=' + JSON.stringify(element)
                        }
                    }
                    
                }
            });
    });
