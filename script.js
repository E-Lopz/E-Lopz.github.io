particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('about-link');
    const aboutSection = document.getElementById('about');
    const contactLink = document.getElementById('contact-link');
    const contactSection = document.getElementById('contact');
    const otherNavItems = document.querySelectorAll('nav a, nav span'); // Get all navbar items
    const projectsSection = document.getElementById('projects')
    const navbar = document.querySelector('nav'); // Select the navbar

    let isAboutVisible = false; // Track if the About section is visible
    let isContactVisible = false; // Track if the Contact section is visible

    function createProjects(projects) {
        const projectsContainer = document.getElementById('projects');
    
        projects.forEach(project => {
            // Create the project div
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('image');
            // Create the image div if image exists
            if (project.image) {
                imageDiv.style.backgroundImage = `url(${project.image})`; // Set the background image
                
            }
            projectDiv.appendChild(imageDiv);
            // Create the text div
            const textDiv = document.createElement('div');
            textDiv.classList.add('text');
    
            // Create the title div
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('title');
    
            // Create title span
            const titleSpan = document.createElement('span');
            titleSpan.classList.add('project-title');
            titleSpan.textContent = project.title;
            titleDiv.appendChild(titleSpan);
    
            // Create technologies span if technologies exist
            if (project.technologies && project.technologies.length > 0) {
                const techSpan = document.createElement('span');
                techSpan.classList.add('technologies');
                project.technologies.forEach(tech => {
                    const techItem = document.createElement('span');
                    techItem.classList.add('tech-item');
                    techItem.textContent = tech;
                    techSpan.appendChild(techItem);
                });
                titleDiv.appendChild(techSpan);
            }
    
            // Create year span if year exists
            if (project.year) {
                const yearSpan = document.createElement('span');
                yearSpan.classList.add('year');
                yearSpan.textContent = project.year;
                titleDiv.appendChild(yearSpan);
            }
    
            // Create link if it exists and change link text to 'link-text'
            if (project.link && project['link-text']) {
                const projectLink = document.createElement('a');
                projectLink.href = project.link;
                projectLink.textContent = project['link-text'];
                projectLink.target = '_blank'; // Open link in a new tab
                titleDiv.appendChild(projectLink);
            }
    
            // Append all title elements to titleDiv
            textDiv.appendChild(titleDiv);
    
            // Create description paragraph if description exists
            if (project.description) {
                const descriptionP = document.createElement('p');
                descriptionP.classList.add('description');
                descriptionP.textContent = project.description;
                textDiv.appendChild(descriptionP);
            }
    
            // Create collaborators paragraph if collaborators exist
            if (project.collaborators && project.collaborators.length > 0) {
                const collaboratorsP = document.createElement('p');
                collaboratorsP.innerHTML = `Collaborators: ${project.collaborators.map(colab => `<a href="#">${colab}</a>`).join(', ')}`;
                textDiv.appendChild(collaboratorsP);
            }
    
            // Append the text div to the project div
            projectDiv.appendChild(textDiv);
    
            // Append the projectDiv to the projects container
            projectsContainer.appendChild(projectDiv);
        });
    }
    
    // Fetch JSON data from the projects.json file
    fetch('assets/projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            createProjects(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    
    // Event listener for the About link click
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Toggle the visibility of the About section
        if (!isAboutVisible) {
            aboutSection.classList.remove('hidden');
            setTimeout(function() {
                aboutSection.classList.add('visible');
            }, 10);


            // Animate the text change to { Close }
            animateTextChange(aboutLink, '{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}');
            setTimeout(function() {
                animateTextChange(aboutLink, '{ Close }');
            }, 50);
            
            aboutLink.style.color = "white";

            navbar.style.backgroundColor = "rgb(250,75,29)";
            // Hide the rest of the navbar items
            otherNavItems.forEach(item => {
                if (item !== aboutLink) {
                    item.classList.add('hidden');  // Hide other items
                }
            });
            projectsSection.classList.add('hidden')

            isAboutVisible = true;
        } else {
            aboutSection.classList.remove('visible');
            setTimeout(function() {
                aboutSection.classList.add('hidden');
            }, 50); // Wait for the transition to complete before hiding

            // Animate the text change back to { General Info }
            animateTextChange(aboutLink, '{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}');
            setTimeout(function() {
                animateTextChange(aboutLink, '{ General Info }');
            }, 50);

            aboutLink.style.color = "black";

            navbar.style.backgroundColor = "white";

            // Show the rest of the navbar items again
            otherNavItems.forEach(item => {
                if (item !== aboutLink) {
                    item.classList.remove('hidden');  // Show other items
                }
            });
            projectsSection.classList.remove('hidden')

            isAboutVisible = false;
        }
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        console.log("click"); // Log click for debugging
    
        // Check if the contact section is hidden
        if (!isContactVisible) {
            contactSection.classList.remove('hidden');
            setTimeout(function() {
                contactSection.classList.add('visible');
            }, 10);

            

             // Animate the text change to { Close }
             animateTextChange(contactLink, '{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}');
             setTimeout(function() {
                 animateTextChange(contactLink, '{ Close }');
             }, 50);
    
            // Hide the rest of the navbar items
            otherNavItems.forEach(item => {
                if (item !== contactLink) {
                    item.classList.add('hidden');  // Hide other items
                }
            });
            projectsSection.classList.add('hidden')
            isContactVisible = true; // Mark that the section is now visible
        } else {
            // Hide the contact section
            setTimeout(() => {
                contactSection.classList.remove('visible'); // Ensure visible class is removed
                // Show other navbar items again
                otherNavItems.forEach(item => {
                    item.classList.remove('hidden'); // Show other items
                });
            }, 100); // Match the timeout to the CSS transition duration
            projectsSection.classList.remove('hidden')
            // Animate the text change back to { General Info }
            animateTextChange(contactLink, '{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}');
            setTimeout(function() {
                animateTextChange(contactLink, '{ Contact }');
            }, 100);
            isContactVisible = false; // Mark that the section is now hidden
        }
    });

    // Function to update the text content
    function animateTextChange(element, newText) {
        element.innerHTML = newText;  // Use innerHTML to correctly interpret &nbsp;
    }

    
});

