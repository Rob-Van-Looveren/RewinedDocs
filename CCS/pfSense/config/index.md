---
layout: default
title: pfSense
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}



# pfSense
![pfSense](../../media/logo/pfSense.png)

## Wat
pfSense is een gratis en open-source firewall gebasseerd op FreeBDS distro's. Je kan de firewall op fysieke als ook virtuele machines installeren en runnen. Na de installatie kan je de firewall beheren via een eenvoudige web-interface. pfSense firewall heeft een tal van opties om netwerken te beveiligen, onderandere
* DPI (Deep packet inspection)
* Intrusion Detection System
* Intrusion Prevention System
* Geo Blocking
* DNS sinkhole
* IP blacklists
* Additional applications en features  

## Installatie 
De installatie van pfSense is eenvoudig te doorlopen, wat wel voor enige verwaringen kan veroorzaken is de virtualaisiatie dat voor een extra laag van abstractie zorgt. Het belangrijkste is het juist toewijzen van de netwerk interfaces, namelijk de WAN aan de WAN kant en niet omgekeerd. De installatie zelf verloop via een aantal stappen
* Download de recenste stabiele versie als ISO file via de [website](https://www.pfsense.org/download/)
* Maak een nieuwe VM in Proxmox met ISO gemount, en start de VM
* Accepteer de voorwaarden en kies install
* Volg de default settings en installeer
* Na de installatie en heropstarten moet je de interfaces instellen via de CLI
    * via optie 1 stel je de WAN en LAN interfaces in
    * via optie 2 kan je installen welke IP's of DHCP settings de interfaces krijgen
* Nadien kan je via de LAN kant de web-interface bereiken via het IP van de LAN interface
![pfSense](../../media/pfSense/menu.png)
![pfSense](../../media/pfSense/interface.png)



## Zie ook
configuratie rules

## Bronnen 
* [pfSense in Proxmox guide ](https://docs.netgate.com/pfsense/en/latest/virtualization/virtualizing-pfsense-with-proxmox.html)
* [pfSense installation guide ](https://docs.netgate.com/pfsense/en/latest/install/installing-pfsense.html)


{% include footer.html %}
