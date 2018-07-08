var timer = new Date();

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