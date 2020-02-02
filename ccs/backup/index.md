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

Ga naar je proxmox web interface en selecteer 'datacenter' kies dan de optie 'backup'. Nu krijg je een overzicht van bestaande backup planningen, je kan deze bewerken of verwijderen via de actie knoppen bovenaan. Kies hier voor 'Add' om een nieuwe backup planning aan te maken. 
![Backup](/{{ site.RepoName }}/media/proxmox_screenshots/backup_1.png)

![Backup](/{{ site.RepoName }}/media/proxmox_screenshots/backup_2.png)
![Backup](/{{ site.RepoName }}/media/proxmox_screenshots/backup_3.png)

## Proxmox Restore
## Database Backup



{% include footer.html %}
