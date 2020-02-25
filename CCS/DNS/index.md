---
layout: default
title: DNS
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}


# DNS

Welkom op de informatiepagina van DNS.

![DNS](/{{site.RepoName}}/media/logo/dns.png)
![WWW](/{{site.RepoName}}/media/logo/www.png)

Waarom DNS? Om uw applicatie publiek bereikbaar te maken, hebt u natuurlijk en Url nodig. Het is niet handig om steeds een ip adres in te geven. 
=======
## Wat
DNS staat voor Domain Name System, Het zorgt er voor dat een domainnaam naar een IP vertaalt wordt.
Zonder DNS zouden we enkel IP's zelf kunnen gebruiken, daarom is het handiger en gebruiksvriendelijker om domeinnamen te gebruiken. Deze zijn veel handiger in gebruik en zijn makkelijk te onthouden voor de gebruikers. 
>>>>>>> c354384d6819ee9090ec4670a285c5eaba1c28e3

## Waarom
Aangezien we het dashboard via het publieke internet willen bereiken willen we dus een eenvoudige url kunnen gebruiken. 
Een andere en technisch belangrijkere reden is dat we voor het PoC uiteraard geen statisch IP hebben en dus een dynamisch IP krijgen van de ISP. In dit geval wordt alles gehost op het home-netwerk van een van onze teamleden, en is Proximus de ISP bepaald welk IP gebruikt moet worden. omdat we niet telkens een ander IP willen opgeven kunnen we beide problemen in 1 klap oplossen.
* Problemen door Dynamisch IP voorkomen 
* Domeinnaam ipv IP

## Hoe
Om het probleem van het dynamische IP op te lossen kunnen we gebruik maken van DDNS.
Dit staat voor Dynamic DNS, en zorgt er voor de DNS server het bijhorende IP van een domeinnaam gaat updaten wanneer dit IP veranderd. Telkens de modem een ander IP adres krijgt van de ISP zal via DDNS het IP adres in DNS ook worden aangepast.
In ons PoC hebben we gebruik gemaakt van de DDNS service van Synology, aangezien er al een Synology NAS aanwezig is binnen het netwerk met DDNS. Deze NAS decetereed wanneer het publiek IP gewijzigt is en brengt de Synology DNS server op de hoogte van de wijzing en het nieuwe IP adress. _een andere populaire DDNS provider is noip.com_ We kunnen dus eenvoudig de zelfde URL gebruiken om het IP te bekomen, ook hebben we meteen een gratis URL.


_Synology online status_
![DDNS](/{{site.RepoName}}/media/netwerk/synology-ddns.png)


_Synology Diskstation configuratiescherm_
![DDNS](/{{site.RepoName}}/media/netwerk/ddns.png)

## Zie ook
* [Netwerk](/{{site.RepoName}}/CCS/Netwerk)


## Bronnen 
* [Synology DDNS](https://www.synology.com/nl-nl/knowledgebase/DSM/help/DSM/AdminCenter/connection_ddns)
* [DDNS Explained](https://www.lifewire.com/definition-of-dynamic-dns-816294)

{% include footer.html %}