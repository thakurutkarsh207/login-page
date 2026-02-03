document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin@tdc.com" && password === "password123") {
    alert("Login successful!");
  } else {
    alert("Invalid credentials. Please try again.");
  }
});