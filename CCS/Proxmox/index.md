---
layout: default
title: Proxmox
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}



# Proxmox

![Proxmox](/{{ site.RepoName }}//media/logo/proxmox.png)


## Wat
Proxmox VE is een linux based open-source virtualisatie oplossing. In principe is het een debian (Ubuntu) distro met aangepaste kernel waar een viertualisatie omgeving bovenop gebouwd is. De distro is zo aangepast dat het virtuele machines en containers kan draaien in de virtuele omegeving. Daarnaast kan Proxmox deze machines en containers ook beheren, dit kan via de commandline of via een web-interface waar een tal van opties mogenlijk zijn. 

* Proxmox wordt gratis aangeboden en heeft een betalende support dienst.
* Proxmox VE 6.1 is de recentste versie
* Eenvoudig te beheren & installeren
* Bevat veel ingeboude opties zoals 
    * Backup
    * live migration
    * High Availibility
    * Firewall
* kan zowel window, mac als linux machines virualiseren


## Installatie 
Proxmox is eenvoudig te installeren aan de hand van de [ISO image](https://www.proxmox.com/en/downloads/category/iso-images-pve) die je kan downloaden via de [proxmox website](https://www.proxmox.com/en/). De installatie zelf spreekt voor zich en is eenvoudig te voltooiten via de installatie wizard.

### ISO booten
Je kan de ISO op 2 manieren booten, er zijn namelijk 2 bootmedia; USB of CD/DVD.

#### CD/DVD
Download de iso op een pc met CD/DVD writer, en plaats een lege CD/DVD in de lezer.
rechterklik op de gedownloade ISO en kies 'Burn disc Image', kies het juiste station en geeft eventueel een naam in.
Klik branden en wacht tot branden van CD/DVD is afgelopen.

#### USB
Voor het maken van een bootable USB maken we gebruik van het programma [BalenaEtcher](https://www.balena.io/etcher/), download dit programma en installeer.
Open BalenaEtcher na installatie, selecteer je ISO image en kies de USB die je wil gebruiken. Kies daarna voor 'flash' of 'branden' en wacht tot het klaarmaken van de bootable USB is afgerond.
__DIT FORTMATEERD DE USB EN DAARMEE DUS ALLE AANWEZIGE DATA, ZORG DAT JE DE JUISTE USB SELECTEERD__

### Installatie op host
Plaats de USB of CD/DVD in de host waar je Proxmox wil installeren. Stel de boot-order zo in dat de USB of CD/DVD eerst gekozen wordt in de bootprocess.
Start de host op en wacht tot het Proxmox logo verschijnt met een keuze menu.
* kies 'Install Proxmox VE'.
* Seleteer op welke schijf je Proxmox wil installeren
* Geef plaats, tijd & toetsenbord instellingen in
* Stel een wachtwoord voor de root account & geef emailadress op.
* Stel netwerk informatie in
* bekijk overzicht met de gemaakte keuzes
* Voltooi de installatie 

![install](/{{ site.RepoName }}/media/proxmox/install.gif)

### Web interface
Na de installatie kan je de web-interface bezoeken via een je browser, via ```https://IP.Adress:8006```

Je wordt gevraagt om in te loggen, dit kan met je de username root, en het ingestelde wachtwoord.
![install](/{{ site.RepoName }}/media/proxmox/login.png)
![install](/{{ site.RepoName }}/media/proxmox/interface.png)

## Zie ook
[Backup Vm's](/{{ site.RepoName }}/CCS/Backup)

## Bronnen 
* [Proxmox install guide](https://pve.proxmox.com/wiki/Installation)
* [Installation video tutorial](https://www.youtube.com/watch?v=I-e1_CTa4s0)
* [Interface overview video](https://www.youtube.com/watch?v=GHzMaTar0fw)
{% include footer.html %}
