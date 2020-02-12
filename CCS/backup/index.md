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
Via volgende stappen stellen we in dat we dagelijks de VM’s backuppen naar een lokale NAS die onafhankelijk is van de Proxmox omgeving. 

### Backup planning maken
Ga naar je proxmox web interface en selecteer 'datacenter', kies dan de optie 'backup'. Nu krijg je een overzicht van bestaande backup planningen, je kan deze bewerken of verwijderen via de actie knoppen bovenaan. Kies hier voor 'Add' om een nieuwe backup planning aan te maken. 

![Backup](/{{ site.RepoName }}/media/backup/backup_1.png)

### Backup planning instellen
Het volgende scherm toont alle opties die je kan instellen bij het aanmaken van een backup planning. De belangrijkste zijn hier gemarkeerd. 
* Storage: waar je de backups gaat opslaan, in dit geval een NAS smb share
* Day: welke dagen van de week je de backup wilt uitvoeren
* Hour: op welk uur wil je de backup uitvoeren
* Mail: email adress om op de hoogte gehouden te worden
    * Notification: enkel bij backup fail of bij elk backup event
* VMs: Alle VM's die je met deze backup planning wilt backuppen. 

![Backup](/{{ site.RepoName }}/media/backup/backup_2.png)

### Backup planning bevestigen
Als alle instellingen naar wens zijn, druk je op oke. Nadien kom je terug op de overzichtpagina waar je de instellingen kan bekijken.

![Backup](/{{ site.RepoName }}/media/backup/backup_3.png)

## Proxmox Restore
![Backup](/{{ site.RepoName }}/media/backup/restore_1.png)

## Database Backup

Commando's als Root uitvoeren
```
sudo -i
password: ***
```

Cifs installeren zodat SMB share gemount kan worden
```
apt install cifs-utils
```

SMB mount instellen aan de hand van /etc/fstab
```
echo  '//192.168.3.4/backup /mnt/nas        cifs    credentials=/root/.smbcredentials,vers=1.0,uid=33,gid=33,rw,nounix,iocharset=utf8,file_mode=0777,dir_mode=0777 0 0 '  >> /etc/fstab
echo 'username=***' >>/root/.smbcredentials
echo 'password=***'  >>/root/.smbcredentials
mkdir /mnt/nas
mount -a
```

Backup script aanmaken, maakt backup via mysqldump op smb share
```
mkdir /home/project/script	
touch /home/project/script/backup.sh
echo ' #!/bin/bash
date=`date +"%d-%m-%y__%H-%M-%S"`
naam=database_`echo "$date"`.sql.gz
path="/mnt/nas/DB-backup-4.0/"`echo "$naam"`

mysqldump -u project -pproject --all-databases | gzip > /mnt/nas/DB-backup-4.0/`echo $naam`
'>>/home/project/script/backup.sh
chmod  +x /home/project/script/backup.sh
```

Laat backup script om het halfuur uitvoeren via crontab/cronjobs
```
(crontab -l 2>/dev/null; echo "*/30 * * * * /home/project/script/backup.sh ") | crontab -
```

### Resultaat 
![Backup](/{{ site.RepoName }}/media/backup/backup_4.png)

## Zie ook
* [Back-up MySQL database](../backup#Database-Backup)
* [Verbind ASP.NET met database](../)


## Bronnen

{% include footer.html %}