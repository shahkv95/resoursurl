// Toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.replace("light-theme", "dark-theme");
    } else {
        body.classList.replace("dark-theme", "light-theme");
    }
}

// Show resource details in a dedicated section and load into iframe
function showDetails(title, description, url) {
    document.getElementById('resource-title').textContent = title;
    document.getElementById('resource-description').textContent = description;
    document.getElementById('resource-iframe').src = url;
    document.getElementById('resource-link').href = url; // Set href for opening in new tab
    document.getElementById('resource-details').style.display = 'block';
}

// Filter resources based on selected category
function filterResources(category) {
    const cards = document.querySelectorAll('.resource-card');
    let showDetailsSection = false;

    cards.forEach(card => {
        if (card.dataset.category.startsWith(category)) {
            card.style.display = 'block';
            showDetailsSection = true; // Show cards and set the flag to true
        } else {
            card.style.display = 'none';
        }
    });

    // Reset iframe and details section
    if (showDetailsSection) {
        document.getElementById('resource-title').textContent = '';
        document.getElementById('resource-description').textContent = '';
        document.getElementById('resource-iframe').src = '';
        document.getElementById('resource-details').style.display = 'none'; // Hide details when parent is clicked
    }
}
