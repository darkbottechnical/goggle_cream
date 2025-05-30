(function() {
    let degrees = prompt("Enter rotation degrees:", "180");

    if (degrees !== null && !isNaN(degrees.trim()) && degrees.trim() !== "") {
        degrees = Number(degrees);
        document.querySelectorAll('*').forEach(element => {
            element.style.transform = `rotate(${degrees}deg)`;
        });
    } else {
        alert("Invalid input! Please enter a number.");
    }
})();
