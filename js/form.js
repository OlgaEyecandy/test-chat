// jQuery one:
/* 
function CommentToMessage(n) {
    var element = document.createElement("div");
    element.innerText = element.textContent = n;
    n = element.innerHTML;
    return n;
}

function web_send_msg() {
    var name = $("#comment-name").val();
    var text = $("#comment-field").val();
    $("#comment-field").val("");
    $("#messages").append("<p><em>" + CommentToMessage(name) + ": </em>" + CommentToMessage(text) + "</p>");
}
*/
//JS one:
document.getElementById("btn").onclick = getComment;

function getComment() {
    var text = (document.getElementById("comment-field").value);
    var name = document.getElementById('comment-name').value;
    var message = document.createElement('div');
    message.innerHTML = '<em>' + name + ': ' + '</em>' + text;
    message.className = 'message';
    messages.appendChild(message);
    return text
}