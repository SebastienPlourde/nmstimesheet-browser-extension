# nmstimesheet-browser-extension
Une extension simple et pratique en JavaScript vanilla pour vous aider à gérer vos pointages d'entrée et de sortie sur NMS-Timesheet.com directement depuis votre navigateur.

## Pourquoi utiliser cette extension ?
NMS-Timesheet est un outil puissant pour suivre le temps passé sur vos projets. Cette extension rend son utilisation encore plus rapide et intuitive ! Plus besoin d'ouvrir l'application : commencez et arrêtez le suivi du temps en un clic.

### Fonctionnalités principales :
- **Pointage simplifié** : L'heure d'entrée est arrondie à la demi-heure précédente, et l'heure de sortie à la demi-heure suivante. Pas de tracas avec les minutes ou secondes !
- **Authentification facile** : Utilisez votre clé de session unique pour vous connecter.
- **Gestion rapide des projets** : Entrez simplement le numéro de projet et la tâche, puis cliquez sur 'PUNCH IN' ou 'PUNCH OUT'.

### Comment obtenir votre clé de session ?
1. Connectez-vous à [app.nms-timesheet.com](https://app.nms-timesheet.com).
2. Rendez-vous sur la page des détails du projet.
3. Trouvez votre clé dans la section 'Webhooks'. Notez que cette clé est régénérée à chaque reconnexion.

> **Important** : Vous devez avoir un compte sur app.nms-timesheet.com pour utiliser cette extension. Si ce n'est pas encore fait, créez-en un dès maintenant !

## Aperçu de l'extension
### Pointage d'entrée
![Punch IN](./Punch%20IN.png)

### Pointage de sortie
![Punch OUT](./Punch%20OUT.png)

## Installation en mode développeur

Envie d'essayer l'extension ? Suivez ces étapes simples pour l'installer en mode développeur :

1. **Téléchargez ou clonez le dépôt** :
	- Clonez le dépôt avec cette commande :
	  ```bash
	  git clone https://github.com/SebastienPlourde/nmstimesheet-browser-extension.git
	  ```
	- Ou téléchargez le fichier ZIP depuis [GitHub](https://github.com/SebastienPlourde/nmstimesheet-browser-extension) et extrayez-le.

2. **Accédez à la page des extensions Chrome** :
	- Ouvrez Google Chrome et allez sur `chrome://extensions/`.
	- Activez le **mode développeur** en haut à droite.

3. **Chargez l'extension** :
	- Cliquez sur **Charger l'extension non empaquetée**.
	- Sélectionnez le dossier où vous avez extrait ou cloné le dépôt.

4. **Vérifiez l'installation** :
	- L'extension apparaîtra dans la liste des extensions installées.
	- Épinglez-la à la barre d'outils pour un accès rapide.

5. **Configurez et commencez à utiliser** :
	- Cliquez sur l'icône de l'extension.
	- Entrez votre clé de session, le numéro de projet et les détails de la tâche.
	- Vous êtes prêt à suivre votre temps efficacement !

Essayez dès maintenant et simplifiez votre gestion du temps avec nmstimesheet-browser-extension !
