let url = new URL(location.href);
let post = url.searchParams.get('post');
let parse = JSON.parse(post);

let innerDiv = document.createElement('div');
document.body.appendChild(innerDiv);
innerDiv.classList.add('innerDiv');

for (const element in parse) {
let innerDivSecond = document.createElement('div');
innerDiv.appendChild(innerDivSecond);
innerDivSecond.classList.add('innerDivSecond');
innerDivSecond.innerText = `${element} ~ ${parse[element]}`
}
 let url1 = parse.id + '/comments'
fetch('https://jsonplaceholder.typicode.com/posts/' + url1)
    .then((request) => request.json())
    .then((value) => {

     let buttonComments = document.createElement('div');
     document.body.appendChild(buttonComments);
     buttonComments.classList.add('buttonDiv');

     let commentsBtn = document.createElement('button');
     buttonComments.appendChild(commentsBtn);
     commentsBtn.classList.add('commentsBtn');
     commentsBtn.innerText = 'comments';

     commentsBtn.onclick = function () {
      let divComments = document.createElement('div');
      document.body.appendChild(divComments);
      divComments.classList.add('divComments');
      for (const element of value) {
       let innerDivComments = document.createElement('div');
       divComments.appendChild(innerDivComments);
       innerDivComments.classList.add('innerDivComments');
       innerDivComments.innerText = `${element.postId} ~ ${element.id} ~ ${element.name} ~ ${element.email} ~ ${element.body}`
      }
     }
    });


