---
layout: default
title: Proxmox
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}



# Proxmox

![Proxmox](../../media/logo/proxmox.png)


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
De API is geschreven in .netcore 2.2 en is dus de versie die we installeren 

### Repository toevoegen
```
wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
```

### Installeren .NET, ASP.net & SDK
```
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install apt-transport-https
sudo apt-get install dotnet-runtime-2.2
sudo apt-get install aspnetcore-runtime-2.2
sudo apt-get install dotnet-sdk-2.2
```

## Uitleg werking a.d.h.v testapp
* Maak en ga naar nieuwe map
* Create nieuwe app via ```dotnet new webapp ```
    * we kiezen het template webapp, dit gebruikt ASP.net
* Start app via ```dotnet run```
    * de applicatie draait nu
    * maar is enkel alleen voor localhost bereikbaar
    * andere machines kunnen er dus niet naartoe browsen
* Onderbreek de app via crl + c
* Open ```Properties/launchSettings.json``` in een editor
* De regel applicationUrl bepaald de URL, http protocol en poort
    * verander localhost naar *, zo kan iedere machine de app bereiken 
    * je kan zelf poorten aanpassen
    * je kan ook enkel http gebruiken door https te verwijderen
* start de app opnieuw via ```dotnet run```
    * Nu kan je met een ander machine aan de applicatie

## Sammengevat
* ```dotnet new webapp``` maakt app aan
* ```dotnet new run``` start de applicatie
* ```Properties/launchSettings.json``` bevat de URL eigenschappen


## Zie ook
[API verbinden met Database](link)

## Bronnen 
* [.NET Core 2.2 Download page](https://dotnet.microsoft.com/download/dotnet-core/2.2)
* [Install instructions (Ubuntu 18.04)](https://docs.microsoft.com/nl-nl/dotnet/core/install/linux-package-manager-ubuntu-1804)
* [Deploy Video tutorial](https://www.youtube.com/watch?v=6VK370-Yk3A)

{% include footer.html %}
