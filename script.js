// script.js
function respond(answer) {
    let responseText = '';

    if (answer === 'yes') {
        responseText = 'Aww Bujjiima, I love you more, Rupunzel!';
    } else if (answer === 'absolutely') {
        responseText = 'You got a date, love. Wear that white top!';
    }

    document.getElementById('response').innerText = responseText;
}
