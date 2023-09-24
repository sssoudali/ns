let openContentId = null; // Store the ID of the currently open content

function toggleCollapse(id) {
    const content = document.getElementById(`content${id}`);
    
    if (openContentId !== null) {
        // Hide the currently open content
        const openContent = document.getElementById(`content${openContentId}`);
        openContent.classList.remove('active');
    }

    // Show the clicked content
    content.classList.toggle('active');
    
    // Update the openContentId
    openContentId = (openContentId === id) ? null : id;
}
