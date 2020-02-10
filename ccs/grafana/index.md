---
layout: default
title: Grafana
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}



# Grafana

![Grafana_logo](../../media/logo/grafana_logo.png)

## Wat

Grafana is een open-sourceplatform voor gegevensbewaking, -analyse en -visualisatie dat wordt geleverd met een webserver waarmee het overal toegankelijk is.
In de webinterface kunnen gebruikers Grafana-dashboards met panelen maken om statistieken in de loop van de tijd weer te geven.

## Installatie

Hier vind je hoe je deze software installeert. We gaan ervan uit dat je het OS ‘Ubuntu’ reeds hebt geïnstalleerd. Zo niet, moet je eerst deze installatie doen. Onderaan de pagina bij 'Bronnen' vind je een link voor deze installatie.

### Ubuntu up to date zetten
```
sudo apt update
```

### Voeg de gpg key toe zodat je gesigneerde pakketten kan afhalen & installeer de repository
```
sudo apt-get install -y gnupg2 curl software-properties-common
curl https://packages.grafana.com/gpg.key | sudo apt-key add –
sudo add-apt-repository “deb https://packages.grafana.com/oss/deb stable main”

```

## Zie ook
[API verbinden met Database](link)

## Bronnen 
* [Grafana v6.6 Download & installation page](https://grafana.com/docs/grafana/latest/installation/debian/)
* [Grafana what is](https://techexpert.tips/nl/grafana-nl/grafana-monitoring-snmp-apparaten/)
* [Deploy Video tutorial](https://www.youtube.com/watch?v=zq_Ft-GJCho)
* [Ubuntu installation](https://www.fosslinux.com/6406/how-to-install-ubuntu-server-18-04-lts.htm)

{% include footer.html %}
