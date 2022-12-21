let url = new URL(location.href);
let post = url.searchParams.get('post');
let parse = JSON.parse(post);

let postInnerDiv = document.createElement('div');
document.body.appendChild(postInnerDiv);
postInnerDiv.classList.add('postInnerDiv');
