---
layout: default
title: Backups
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# Backup
waarom?
voordeel?

## Proxmox Backup
Proxmox heeft de optie om backups in te plannen en automatisch uit te voeren.
Via volgende stappen stellen we in dat we dagelijks de VM’s backupen naar een lokale NAS die onafhankelijk is van de Proxmox omgeving 

### Backup planning maken
Ga naar je proxmox web interface en selecteer 'datacenter' kies dan de optie 'backup'. Nu krijg je een overzicht van bestaande backup planningen, je kan deze bewerken of verwijderen via de actie knoppen bovenaan. Kies hier voor 'Add' om een nieuwe backup planning aan te maken. 
![Backup](/{{ site.RepoName }}/media/proxmox_screenshots/backup_1.png)

### Backup planning instellen
Het volgende scherm toont alle opties die je kan instellen bij het aanmaken van een backup planning. de belangrijkste zijn hier gemakeerd. 
* Storage: waar je de backups gaat opslaan, in dit geval een NAS smb share
* Day: welke dagen van de week je de backup wil uitvoeren
* Hour: op welk uur wil je de backup uitvoeren
* Mail: email adress om op de hoogte gehouden te worden
    * Notification: enkel bij backup fail of bij elk backup event
* VMs: Alle VM's die je met deze backup planning wilt backuppen. 

![Backup](/{{ site.RepoName }}/media/proxmox_screenshots/backup_2.png)

### Backup planning bevestigen
als alle instellingen naar wens zijn, druk je op oke. Nadien kom je terug op de overzicht pagina waar je de instellingen kan bekijken.
![Backup](/{{ site.RepoName }}/media/proxmox_screenshots/backup_3.png)

## Proxmox Restore
## Database Backup



{% include footer.html %}
