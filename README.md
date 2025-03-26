# nmstimesheet-browser-extension
 A simple vanilla JavaScript extension that works with NMS-Timesheet.com to facilitate punch-in and punch-out.

## About
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

## Punch in
![Punch IN](./Punch%20IN.png)

## Punch out
![Punch OUT](./Punch%20OUT.png)

## Installation in Developer Mode

To install the extension in developer mode from the GitHub repository, follow these steps:

 1. **Download or Clone the Repository**:
	- Open a terminal and run the following command to clone the repository:
	  ```bash
	  git clone https://github.com/SebastienPlourde/nmstimesheet-browser-extension.git
	  ```
	- Alternatively, download the repository as a ZIP file and extract it.
	  ```
		https://github.com/SebastienPlourde/nmstimesheet-browser-extension
	  ```

 2. **Open Chrome Extensions Page**:
	- Open Google Chrome and navigate to `chrome://extensions/` in the address bar.
	- Enable **Developer mode** by toggling the switch in the top-right corner.

 3. **Load the Extension**:
	- Click on the **Load unpacked** button.
	- Select the folder where you cloned the repository (`nmstimesheet-browser-extension`).

 4. **Verify Installation**:
	- The extension should now appear in the list of installed extensions.
	- Pin the extension to the toolbar for easy access.

 5. **Setup the Extension**:
	- Open the extension by clicking its icon in the toolbar.
	- Enter your session key, project number, and task details to start using the extension.

 You're all set to use the extension in developer mode!