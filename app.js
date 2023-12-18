document.addEventListener('DOMContentLoaded', function() {
    // Your code goes here. For example:
    function send() {
        var input = document.getElementById("input").value;
        document.getElementById("output").innerHTML = input;
    }

    var sendButton = document.querySelector(".main_button");
    sendButton.addEventListener('click', send);
});
