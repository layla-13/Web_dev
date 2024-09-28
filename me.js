
function showAlert() {
    alert("Thank you for your interest in fighting global warming!");
}


function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}


window.onload = function() {
    changeBackgroundColor("#d0f0c0"); // Light green background
};

// Add an event listener to the menu items (for demonstration)
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("nav ul li a");
    
    menuItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            this.style.color = "#ff0000"; // Change text color on hover
        });
        
        item.addEventListener("mouseout", function() {
            this.style.color = ""; // Reset text color
        });
    });
});
