document.getElementsByClassName("submit")[0].addEventListener("click", function() {
    console.log("Button clicked");
    const message = document.getElementById("message").value;
    const formattedMessage = encodeURIComponent(message).replace(/%20/g, "+");
    const url = `https://wa.me/310657966956?text=${formattedMessage}`;
    window.open(url, "_blank");
});