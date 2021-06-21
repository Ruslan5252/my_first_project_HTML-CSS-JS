function authentication() {
	var log = document.getElementById("login").value
	var passw = document.getElementById("password").value
	if (log=="Ruslan5252" && passw=="admin"){
		window.location.href = 'forma.html'	
	}
	else{
		alert("Неверный логин или пароль")
	}
}

function to_form(){
	window.location.href = 'forma.html'
}
function to_login(){
	window.location.href = 'form.html'
}
let posts = []
posts.push({'title':'Title 1', 'content':'Content 1'});
posts.push({'title':'Title 2', 'content':'Content 2'});

function updatePosts() {
    let htmlCode = '';
    for (i=posts.length-1;i>-1;i--){
        htmlCode+="<h1>"+posts[i]['title']+"</h1>";
        htmlCode+="<p>"+posts[i]['content']+"</p>";
        htmlCode+="<hr>"
    }
    document.getElementById('result').innerHTML = htmlCode;
}

function addPost() {
    let title = document.getElementById('title_input');
    let content = document.getElementById('content_input');

    posts.push({'title':title.value, 'content':content.value});
    updatePosts();
}