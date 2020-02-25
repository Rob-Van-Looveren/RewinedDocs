---
layout: default
title: Netwerk Interfaces
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}


# Netwerk interfacess
![Netplan](/{{ site.RepoName }}/media/logo/netplan.png)

## Interfaces instellen  
*__IP adressen __*
Via netplan worden de IP instellingen geconfigureerd, in het bestand /etc/netplan/*.yaml
Hieronder vind je een voorbeeld van een configuratie.
```
network:
    ethernets:
        ens18:
            optional: true
            dhcp4: false
            addresses: [192.168.3.101/24]
            gateway4: 192.168.3.1
            nameservers:
                addresses: [8.8.8.8, 1.1.1.1]
        ens19:
            optional: true
            dhcp4: false
            addresses: [10.10.10.101/24]
    version: 2
```
Nadien kan je via de commando's ```netplan generate``` en ``` netplan apply``` de wijzigen doorvoeren



* disable ipv6
* setup /etc/resolve

## zie ook 

## bronnen 

{% include footer.html %}
