---
layout: default
title: Backups
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# Backup

Welkom!

Deze pagina toont u alle informatie omtrent het maken van backups.

## Waarom?
De reden om backups te plannen is redelijk voor de hand liggend. Het is simpelweg een garantie dat uw gegevens niet definitief verloren gaan wanneer het systeem ergens crasht.

Hierbij gaat het niet enkel om de data op zich, maar ook om het behoud van uw opstelling en applicatie. Een backup maken heeft ook betrekking op het garanderen van een server met de nodige services. 

## Voordeel?
Het nemen van een backup zorgt ervoor dat alle resources kunnen hersteld worden indien er grote fouten zijn opgetreden en de services niet meer functioneren. De data zelf kan ook via deze weg gewaarborgd worden.

## Proxmox Backup
Proxmox heeft de optie om backups in te plannen en automatisch uit te voeren.
Via volgende stappen stellen we in dat we dagelijks de VM’s backuppen naar een lokale NAS die onafhankelijk is van de Proxmox omgeving. 

### Backup planning maken
Ga naar uw proxmox web interface en selecteer 'datacenter', kies dan de optie 'backup'. Nu krijgt u een overzicht van bestaande backup planningen. U kunt deze bewerken of verwijderen via de actieknoppen bovenaan. Kies hier voor 'Add' om een nieuwe backup planning aan te maken. 

![Backup](/{{ site.RepoName }}/media/backup/backup_1.png)

### Backup planning instellen
Het volgende scherm toont alle opties die u kan instellen bij het aanmaken van een backup planning. De belangrijkste zijn hier gemarkeerd. 

* Storage: waar u de backups gaat opslaan, in dit geval een NAS smb share
* Day: op welke dagen van de week u de backup wilt uitvoeren
* Hour: op welk uur u de backup wilt uitvoeren
* Mail: email adress om op de hoogte gehouden te worden
    * Notification: enkel bij backup fail of bij elk backup event
* VMs: alle VM's die u met deze backup planning wilt backuppen. 

![Backup](/{{ site.RepoName }}/media/backup/backup_2.png)

### Backup planning bevestigen
Als alle instellingen naar wens zijn, drukt u op 'oke'. Nadien komt u terug op de overzichtspagina waar u de instellingen kan bekijken.

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
