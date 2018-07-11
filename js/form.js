function getComment() {
    var text = document.getElementById('comment-field').value;
    var name = document.getElementById('comment-name').value;
    if (name.length && text.length) {
        var message = document.createElement('div');
        message.innerHTML = '<em>' + name + ': ' + '</em>' + text;
        message.className = 'message';
        messages.appendChild(message);
        document.getElementById('comment-field').value = '';
        document.getElementsByClassName('alert')[0].style.opacity = '0';
    } else {
        document.getElementsByClassName('alert')[0].style.opacity = '1';
    }

}