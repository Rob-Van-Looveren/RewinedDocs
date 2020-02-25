---
layout: default
title: Configuratie pfSense Rules
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# Firewall Rules
![pfSense](../../../media/logo/pfSense.png)

## Wat
Om er voor te zorgen dat niet al het verkeer wordt geblokeerd door de firewall, moeten we enkel regels definieren. Deze regels verklaren wel verkeer toegelaten is van buitenaf, in dit geval http(s) queries naar de Proxy VM.

![pfSense](../../../media/pfSense/rules.png)

Op bovenstaande screenshot zie je de aanwezige regels die bepalen welk verkeer wordt tegelaten en geforward wordt naar de ingestelde IP's en Ports.

## Zie ook
* [Installatie pfSense](/{{site.RepoName}}/CCS/pfSense/)
* [Netwerk](/{{site.RepoName}}/CCS/Netwerk/)

## Bronnen 
* [pfSense in Proxmox guide ](https://docs.netgate.com/pfsense/en/latest/virtualization/virtualizing-pfsense-with-proxmox.html)
* [pfSense installation guide ](https://docs.netgate.com/pfsense/en/latest/install/installing-pfsense.html)


{% include footer.html %}
