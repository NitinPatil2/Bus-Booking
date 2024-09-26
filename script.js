document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const routeForm = document.getElementById("routeForm");
    const busList = document.getElementById("bus-list");
    const loginError = document.getElementById("login-error");

    const loginPage = document.getElementById("login-page");
    const bookingPage = document.getElementById("booking-page");
    const availableBusesDiv = document.getElementById("available-buses");

    const validUsername = "admin";
    const validPassword = "12345";

    // Predefined buses data
    const buses = [
        { id: 1, source: "City A", destination: "City B", time: "9:00 AM" },
        { id: 2, source: "City A", destination: "City C", time: "10:30 AM" },
        { id: 3, source: "City B", destination: "City C", time: "11:00 AM" },
        { id: 4, source: "City B", destination: "City A", time: "12:00 PM" },
        { id: 5, source: "City C", destination: "City A", time: "1:00 PM" },
    ];

    // Handle login form submission
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === validUsername && password === validPassword) {
            loginPage.classList.add("hidden");
            bookingPage.classList.remove("hidden");
            loginError.textContent = ""; // Clear any previous error message
        } else {
            loginError.textContent = "Invalid username or password!";
        }
    });

    // Handle route form submission
    routeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const source = document.getElementById("source").value;
        const destination = document.getElementById("destination").value;

        if (source && destination) {
            // Filter buses based on source and destination
            const availableBuses = buses.filter(bus => bus.source === source && bus.destination === destination);

            // Clear previous bus list
            busList.innerHTML = '';

            // If buses are found, display them
            if (availableBuses.length > 0) {
                availableBusesDiv.classList.remove("hidden");
                availableBuses.forEach(bus => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                        Bus ID: ${bus.id} - Time: ${bus.time}
                        <button onclick="bookBus(${bus.id})">Book</button>
                    `;
                    busList.appendChild(li);
                });
            } else {
                availableBusesDiv.classList.add("hidden");
                alert("No buses available for the selected route.");
            }
        }
    });
});

// Function to handle bus booking
function bookBus(busId) {
    alert(`Bus ${busId} has been successfully booked!`);
}
