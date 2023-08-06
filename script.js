document.addEventListener("DOMContentLoaded", function () {

    // countDown timer
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date();
        const deadline = new Date("2023-08-10T23:59:59"); // Example deadline: August 10, 2023, 23:59:59

        const timeDifference = deadline - now;

        if (timeDifference <= 0) {
            countdownElement.textContent = "Time's up!";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // submission

    const assignmentForm = document.getElementById("assignmentForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const deadline = new Date("2023-08-10T23:59:59"); // Example deadline: August 10, 2023, 23:59:59

    assignmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const currentTime = new Date();
        
        if (currentTime > deadline) {
            confirmationMessage.textContent = "Assignment submission is closed. The deadline has passed.";
        } else {
            // Simulate submission process
            setTimeout(function () {
                confirmationMessage.textContent = "Assignment submitted successfully!";
            }, 1500);
        }
    });
});
