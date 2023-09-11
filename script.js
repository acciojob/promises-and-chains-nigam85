//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    const nameInput = document.getElementById('name').value;
    const ageInput = parseInt(document.getElementById('age').value);

    if (!nameInput || !ageInput) {
        alert('Please fill in both name and age.');
        return;
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageInput >= 18) {
                resolve(`Welcome, ${nameInput}. You can vote.`);
            } else {
                reject(`Oh sorry ${nameInput}. You aren't old enough.`);
            }
        }, 4000); // Simulate a delay of 4 seconds
    });

    promise
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            alert(error);
        });

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
});

