document.addEventListener("DOMContentLoaded", function () {

    // Check system dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
    }

    // Listen for system dark mode changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });

    const punchInForm = document.getElementById("punchin-form");
    const punchOutForm = document.getElementById("punchout-form");
    const punchUpdatekeyForm = document.getElementById("punchUpdatekeyForm");

    const projectInput = document.getElementById("project");
    const taskInput = document.getElementById("task");
    const keyInput = document.getElementById("key");

    const updateKeyButton = document.getElementById("updateKey");
    const newKeyInput = document.getElementById("newKey");

    const punchInButton = document.getElementById("punchin");
    const punchOutButton = document.getElementById("punchout");

    //const URL = "https://app.nms-timesheet.com";
    const URL = "http://localhost:4001";

    punchInForm.style.display = "none";
    punchOutForm.style.display = "none";
    punchUpdatekeyForm.style.display = "none";


    // Run on page load

    chrome.storage.sync.get(['key'], function(result) {
        if (!result.key) {
            punchUpdatekeyForm.style.display = "block";
            return;
        }

        document.querySelectorAll('#key').forEach(input => {
            input.value = result.key;
        });

        fetch(`${URL}/api/punchstatus`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${result.key}`,
                "Content-Type": "application/json"
            }

        }).then(response => response.json())
            .then(data => {
                if (data.status === "error" && data.message === "Unauthorized access") {
                    // Handle unauthorized access
                    punchOutForm.style.display = "none";
                    punchInForm.style.display = "none";
                    punchUpdatekeyForm.style.display = "block";

                } else if (data.status === "error" && data.message === "Invalid authorization header") {
                    punchOutForm.style.display = "none";
                    punchInForm.style.display = "none";
                    punchUpdatekeyForm.style.display = "block";

                } else if (data.punch_status === "OUT") {
                    getAssignedProjects();
                    punchOutForm.style.display = "none";
                    punchInForm.style.display = "block";
                    punchUpdatekeyForm.style.display = "none";

                } else {
                    punchInForm.style.display = "none";
                    punchOutForm.style.display = "block";
                    punchUpdatekeyForm.style.display = "none";
                }
            })
            .catch(error => {
                console.error('Error fetching punch status:', error);
                // Default to showing punch-in form on error
                punchInForm.style.display = "block";
                punchOutForm.style.display = "none";
                punchUpdatekeyForm.style.display = "none";
            });
    });

    punchInButton.addEventListener("click", function () {
        const project = projectInput.value;
        const task = taskInput.value.replace(/[^a-zA-Z0-9]/g, '_');
        const key = keyInput.value;

        if (!project || !task) {
            alert("Please enter project and task.");
            return;
        }

        fetch(`${URL}/api/punchin/${project}/${task}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${key}`,
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                chrome.storage.sync.set({ punchedIn: true });
                chrome.storage.sync.set({ key: key });
                punchInForm.style.display = "none";
                punchOutForm.style.display = "block";
            } else {
                // Parse the error response and show the specific message
                response.json().then(data => {
                    alert(data.message || "Punch In failed. Please check project and task.");
                }).catch(() => {
                    alert("Punch In failed. Please check project and task.");
                });
            }
        }).catch(error => {
            alert(`Network error: ${error.message}`);
        });
    });

    punchOutButton.addEventListener("click", function () {
        const key = keyInput.value;
        fetch(`${URL}/api/punchout`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${key}`,
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                chrome.storage.local.set({ punchedIn: false });
                getAssignedProjects();
                punchInForm.style.display = "block";
                punchOutForm.style.display = "none";
            } else {
                alert("Punch Out failed.");
            }
        });
    });

    updateKeyButton.addEventListener("click", function() {
        const newKey = newKeyInput.value;
        if (newKey) {
            chrome.storage.sync.set({ key: newKey }, function() {
                // Update all key input fields with new value
                document.querySelectorAll('#key').forEach(input => {
                    input.value = newKey;
                });
                // Hide update form and show punch-in form
                punchUpdatekeyForm.style.display = "none";
                punchInForm.style.display = "block";
                punchOutForm.style.display = "none";
            });
        } else {
            alert("Please enter a valid key");
        }
    });

    function getAssignedProjects () {
        const key = keyInput.value;
        fetch(`${URL}/api/assigned_projects`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${key}`,
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                const projectSelect = document.getElementById('project');
                // Clear existing options except the first one
                projectSelect.innerHTML = '';
                
                // Add new options
                data.projects.forEach(project => {
                    const option = document.createElement('option');
                    option.value = project.project;
                    option.textContent = `${project.project} - ${project.name}`;
                    projectSelect.appendChild(option);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
        });
    }
});

