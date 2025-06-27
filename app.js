function loadOpportunities() {
    fetch(`http://localhost:3000/opportunities`)
     .then (function(response) {
         console.log("Response:", response);
        return response.json();
     })
     .then (function(allOpportunities) {
        console.log("Fetched opportunities:", allOpportunities);

        const filteredOpportunities = applyFilters(allOpportunities);

        const opportunitiesList = document.getElementById("opportunity-list");

        console.log("opportunityList:", opportunitiesList);

        if (!opportunitiesList) {
            console.error("opportunities-list element not found in the DOM.");
            return;
        }
        opportunitiesList.innerHTML = "";


        filteredOpportunities.forEach(function(opportunity) {

            const card = document.createElement("div");

            card.className = "opportunity-card";

            const saveBtn = document.createElement("button");

            saveBtn.textContent = opportunity.saved ? "Saved" : "Save";

            saveBtn.className = opportunity.saved ? "save-btn saved" : "save-btn";

        
            saveBtn.addEventListener("click", () => toggleSavedStatus(opportunity.id, saveBtn));

            card.innerHTML = `
            
               <h3>${opportunity.title}</h3>
               <p><strong>Cause:</strong> ${opportunity.cause}</p>
               <p><strong>Location:</strong> ${opportunity.location}</p>
               <p><strong>time:</strong> ${opportunity.time}</p> 
               <p>${opportunity.description}</p>
               `;
               card.appendChild(saveBtn);
               opportunitiesList.appendChild(card);

        });
     })
        .catch(function(error) {
            console.error(" there was an error loading opportunities:", error);
        });
    }
 

function setupFormSubmission() {
    const form = document.getElementById("opportunity-form");
    if (!form) {
        console.error("Form element not found in the DOM.");
        return;
    }
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        const title = document.getElementById("title").value.trim();
        const cause = document.getElementById("cause").value.trim();
        const location = document.getElementById("location").value.trim();
        const time = document.getElementById("time").value.trim();
        const description = document.getElementById("description").value.trim();
        console.log("Form submitted with values:", { title, cause, location, time, description });

        //  opportunity object
        const newOpportunity = {
            title,
            cause,
            location,
            time,
            description,
            saved: false
        };
        // post to the server
        fetch(`http://localhost:3000/opportunities`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOpportunity)
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(savedOpportunity => {
            console.log("Opportunity saved:", savedOpportunity);
            loadOpportunities(); 
            form.reset(); 
        })
        .catch(function(error) {
            console.error("There was an error saving the opportunity:", error);
        });
    });
}
function applyFilters(opportunities) {
  const causeFilter = document.getElementById("cause-filter").value.toLowerCase();
  const locationFilter = document.getElementById("location-filter").value.toLowerCase();
  const savedFilter = document.getElementById("saved-filter").value;

  return opportunities.filter(opportunity => {
    const matchesCause = !causeFilter || opportunity.cause.toLowerCase() === causeFilter;
    const matchesLocation = !locationFilter || opportunity.location.toLowerCase().includes(locationFilter);
    const matchesSaved = savedFilter === "saved" ? opportunity.saved : true;

    return matchesCause && matchesLocation && matchesSaved;
  });
}
// load data
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    loadOpportunities(); 
    setupFormSubmission(); 
});