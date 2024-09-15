// submitting form...

document
  .getElementById("resume-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;

    const instituteElement = document.getElementById(
      "institute"
    ) as HTMLInputElement;
    const degreeElement = document.getElementById("degree") as HTMLInputElement;
    const completionElement = document.getElementById(
      "completion"
    ) as HTMLInputElement;

    const jobTitleElement = document.getElementById(
      "jobTitle"
    ) as HTMLInputElement;
    const companyElement = document.getElementById(
      "company"
    ) as HTMLInputElement;
    const workDatesElement = document.getElementById(
      "workDates"
    ) as HTMLInputElement;
    const jobDescriptionElement = document.getElementById(
      "jobDescription"
    ) as HTMLTextAreaElement;

    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      addressElement &&
      instituteElement &&
      degreeElement &&
      completionElement &&
      jobTitleElement &&
      companyElement &&
      workDatesElement &&
      jobDescriptionElement &&
      skillsElement
    ) {
      const name = nameElement.value.trim();
      const email = emailElement.value.trim();
      const phone = phoneElement.value.trim();
      const address = addressElement.value.trim();
      const institute = instituteElement.value.trim();
      const degree = degreeElement.value.trim();
      const completion = completionElement.value.trim();
      const jobTitle = jobTitleElement.value.trim();
      const company = companyElement.value.trim();
      const workDates = workDatesElement.value.trim();
      const jobDescription = jobDescriptionElement.value.trim();
      const skills = skillsElement.value.trim();

      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureUrl = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      // Resume Output....

      const resumeOutput = `
            <h2>Resume</h2>
            ${
              profilePictureUrl
                ? `<img src="${profilePictureUrl}" alt="Profile Picture" class="profilePicture">`
                : ""
            }
            <p><strong>Name:</strong> <span id="editName" contenteditable="true">${name}</span></p>
            <p><strong>Email:</strong> <span id="editEmail" contenteditable="true">${email}</span></p>
            <p><strong>Phone:</strong> <span id="editPhone" contenteditable="true">${phone}</span></p>
            <p><strong>Address:</strong> <span id="editAddress" contenteditable="true">${address}</span></p>
            <h3>Education</h3>
            <p><strong>Institute:</strong> <span id="editInstitute" contenteditable="true">${institute}</span></p>
            <p><strong>Degree:</strong> <span id="editDegree" contenteditable="true">${degree}</span></p>
            <p><strong>Completion:</strong> <span id="editCompletion" contenteditable="true">${completion}</span></p>
            <h3>Experience</h3>
            <p><strong>Job-Title:</strong> <span id="editJobTitle" contenteditable="true">${jobTitle}</span></p>
            <p><strong>Company:</strong> <span id="editCompany" contenteditable="true">${company}</span></p>
            <p><strong>WorkDates:</strong> <span id="editWorkDates" contenteditable="true">${workDates}</span></p>
            <p><strong>Job-Description:</strong> <span id="editJobDescription" contenteditable="true">${jobDescription}</span></p>
            <h3>Skills</h3>
            <p><strong>Skills:</strong> <span id="editSkills" contenteditable="true">${skills}</span></p>
        `;

      const resumeOutputElement = document.getElementById("resumeOutput");

      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hidden");

        const buttonsContainer = document.createElement("div");
        buttonsContainer.id = "buttonsContainer";
        resumeOutputElement.appendChild(buttonsContainer);

        // Download as PDF
        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download as PDF";

        // Adding the CSS class to the button....

        downloadButton.classList.add("download-btn");

        downloadButton.addEventListener("click", () => {
          window.print(); // Adjust this as needed for more refined printing
        });

        buttonsContainer.appendChild(downloadButton);

        // Shareable link button.

        // Create the shareable link button...

        const shareableLinkButton = document.createElement("button");
        shareableLinkButton.textContent = "Copy Shareable Link";
        shareableLinkButton.classList.add("shareable-link-btn");

        // Listen for the click event
        shareableLinkButton.addEventListener("click", async () => {
          try {
            // Get the name input element and check if it's not null
            const nameInput = document.getElementById(
              "nameInput"
            ) as HTMLInputElement | null;

            // If the element does not exist, show an error and return early
            if (!nameInput) {
              alert("Name input element not found");
              return; // Exit if the element is not found
            }

            // Get the value from the input
            const name = nameInput.value.trim();

            // Ensure the name is not empty.

            if (!name) {
              alert("Please enter a name");
              return; // Exit if no name is provided
            }

            // Generate a random string
            const randomString = Math.random().toString(36).substring(2, 10);

            // Generate the shareable link with query parameters...

            const origin = window.location.origin;
            const path = "/index.html"; // Path to my HTML file.
            const shareableLink = `${origin}${path}?user=${encodeURIComponent(
              name
            )}&id=${randomString}`;

            // Copy the shareable link to the clipboard
            await navigator.clipboard.writeText(shareableLink);
            alert(`Shareable link copied: ${shareableLink}`);
          } catch (err) {
            console.error("Error: Failed to copy", err);
            alert("Failed to copy link to clipboard");
          }
        });

        // Append the button to the container
        const actionButtonsContainer = document.getElementById(
          "actionButtons"
        ) as HTMLElement;
        if (actionButtonsContainer) {
          actionButtonsContainer.appendChild(shareableLinkButton);
        } else {
          console.error("Action buttons container not found");
        }

        buttonsContainer.appendChild(shareableLinkButton);
      }
    }
  });
