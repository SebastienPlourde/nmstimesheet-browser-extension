document.addEventListener("DOMContentLoaded", function () {
    const languages = {
        en: {
            project_label: "Project number",
            task_label: "Task",
            session_key_label: "Session Key",
            save_key_button: "SAVE KEY",
            punch_in_button: "PUNCH IN",
            punch_out_button: "PUNCH OUT",
            project_placeholder: "Project Number",
            task_placeholder: "Task",
            session_key_placeholder: "Enter new session key",
			find_the_key: "The key is located in project details, under the 'Webhooks' section."
        },
        fr: {
            project_label: "Numéro de projet",
            task_label: "Tâche",
            session_key_label: "Clé de session",
            save_key_button: "SAUVEGARDER",
            punch_in_button: "PUNCH IN",
            punch_out_button: "PUNCH OUT",
            project_placeholder: "Numéro de projet",
            task_placeholder: "Tâche",
            session_key_placeholder: "Entrer la nouvelle clé de session",
			find_the_key: "La clé se trouve dans les détails du projet, sous la section 'Webhooks'."
        }
    };

    const browserLang = navigator.language.slice(0, 2);
    const lang = languages[browserLang] || languages.en;

    document.querySelector('label[for="project"]').textContent = lang.project_label;
    document.querySelector('label[for="task"]').textContent = lang.task_label;
    document.querySelector('label[for="newKey"]').textContent = lang.session_key_label;
    document.querySelector('#updateKey').textContent = lang.save_key_button;
    document.querySelector('#punchin').textContent = lang.punch_in_button;
    document.querySelector('#punchout').textContent = lang.punch_out_button;
	document.querySelector('#find_the_key').textContent = lang.find_the_key
    
    // Update placeholders
    document.querySelector('#project').placeholder = lang.project_placeholder;
    document.querySelector('#task').placeholder = lang.task_placeholder;
    document.querySelector('#newKey').placeholder = lang.session_key_placeholder;


});
