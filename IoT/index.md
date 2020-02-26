---
layout: default
title: IoT
author: -
---

{% include nav-breadcrumbs.html %}


# IoT

Welkom!

Op deze pagina vindt u informatie met betrekking tot het IoT-gedeelte.

Voor onze demo opstelling hebben we gekozen te werken met potentiometers. Deze vervangen de effectieve sensoren, daar het moeilijk was om deze te integreren in onze opstelling. 

Het zal dus nodig zijn dat u, bij gebruik van de echte sensoren, opzoekt hoe u deze moet connecteren met de Raspberry Pi.

## IoT schema

Hier ziet u het schema dat onze demo opstelling weergeeft. Elk vat heeft een eigen Raspberry Pi, die de gegevens van de sensoren zal verzenden naar de applicatie. Verder op deze pagina vindt u de instellingen hiervan.

![Iot-schema](/{{site.RepoName}}/media/bi/iot-schema.png)

_Hier ziet u hoe u alles dient aan te sluiten op de Raspberry Pi._

## Installatie Raspberry Pi

In deze sectie trachten we u zo duidelijk mogelijk uit te leggen hoe u met de Raspberry Pi aan de slag dient te gaan om deze voor te bereiden.

### Vereisten

* SD kaartje
* Ethernet kabel
* Micro USB naar USB kabel

### Installatie

Eerst moet u de laatste versie van Raspbian downloaden en mounten op uw SD kaartje. De laatste versie kunt u op de volgende link vinden: https://www.raspberry.org/downloads/raspbian.
Wanneer u deze op uw SD kaart hebt gezet, kan de ethernet- en powerkabel aangesloten worden aan uw PC en uw Raspberry Pi.

Nu kan je de Raspberry Pi updaten en gereed maken voor het verdere gebruik van de omgeving. Verbinding maken met de Raspberry Pi kan met programma's zoals Putty of Moba Xterm. Dit doet u door het IP adres van de Raspberry Pi in te geven. De standaard username is 'raspberry' en het standaard wachtwoord is 'pi'. 

Wanneer dit gelukt is, komt u in een terminal terecht waar u Linux commando's kunt doorgeven aan de Raspberry Pi.

Omdat de Raspberry Pi niet automatisch met wifi verbonden is, is het gemakkelijk om bij de eerste setup via een ethernetkabel de Raspberry Pi te configureren. Hiervoor moet u naar uw netwerkinstellingen gaan op uw PC en de wifi delen met de ethernetpoort waar de Raspberry Pi op aangesloten is.

![Iot-adapter](/{{site.RepoName}}/media/bi/iot-adapter.JPG)




{% include footer.html %}
