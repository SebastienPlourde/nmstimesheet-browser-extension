/*

NMS-Timesheet is a time tracking tool that allows you to track time spent on projects.

This extension is a quick way to track time without having to open the app. It allows you to start and stop tracking time directly from your browser.

On punchin, the time is rounded to the previous half hour. On punchout, the time is rounded to the next half hour. It won't bother you with minute and seconds.

To use this extension, you need to have a session key. 
 - This key is unique to your account and is used to authenticate you.
 - To get your session key, login to app.nms-timesheet.com and go to the project details page. The key is located in the 'Webhooks' section.
 - The key is regenerated every time you relogin.
 - To start tracking time, enter the project number and task you are working on, and click 'PUNCH IN'. To stop tracking time, click 'PUNCH OUT'.
 - If you need to update your session key, enter the new key and click 'SAVE KEY'.
 - If you have any questions or need help, please contact

Important: This extention require the user to have an account on app.nms-timesheet.com. If you don't have an account, please create one before using this extension.

*/

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
			find_the_key: "Please login to app.nms-timesheet.com The key is located in project details, under the 'Webhooks' section. The key is regenerated every time you relogin"
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
			find_the_key: "Veuillez vous connecter à app.nms-timesheet.com La clé se trouve dans les détails du projet, sous la section 'Webhooks'. La clé est régénérée à chaque fois que vous vous reconnectez" 
 
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
