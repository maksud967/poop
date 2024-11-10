function handleResponse(response) {
    if (response === 'yes') {
        // Redirect to the "Yes" page with a kissing sign and money background
        window.location.href = "yes.html";
    } else {
        // Redirect to the "No" page with a poop sign and crying emojis background
        window.location.href = "no.html";
    }
}
