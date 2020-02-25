---
layout: default
title: bi
author: -

---

{% include nav-breadcrumbs.html %}


# BI

Welkom!

Het BI-gedeelte houdt de visualisatie in van de gegevens met behulp van de software Grafana.

## Configuratie

Voordat u alle functionaliteiten van Grafana kunt gebruiken in de applicatie, moeten nog enkele configuraties aangepast worden.

Deze instellingen dienen aangemaakt te worden in de configuratiefile van Grafana. Deze kunt u vinden op de plaats waar u Grafana geïnstalleerd hebt. Deze file heeft als extensie '.ini'.

### Auth.anonymous

enabled false --> veranderen naar 'enabled true'

### Auth.Proxy

enabled false --> veranderen naar 'enabled true'

### Security

allow_embedding false --> veranderen naar 'allow_embedding true'

U kan controleren of de instellingen juist zijn aangepast door in de webinterface van Grafana naar het volgende te gaan: 'server admin -> settings'. Hier zult u een lijst vinden van alle settings en configuraties van Grafana.

_de webinterface bereikt u in uw browser via 'http://host-ip:3000'_

![Grafana_settings](/{{site.RepoName}}/media/bi/grafana_settings.png)

## Datasource instellen

Voordat u begint te werken met uw eigen database, moet u het juiste pad instellen zodat de applicatie verbinding kan maken met de gemeten data.

Dit kan onder het menu 'Configuration -> Data Sources'. Hier maakt u een nieuwe datasource.

Bij 'MySQL Connection' vul je het volgende in: 
```
Host: ip adres van de database
Database: naam van de database
User: gebruikersnaam om in te loggen
Paswoord: paswoord van deze gebruiker
```

## Visualisatie maken

Eerst klikt u in het menu p het + icoontje. Vervolgens kiest u voor 'new dashboard'. Om een grafiek toe te voegen, klikt u bovenaan de pagina op 'add panel' ![Grafana-add](/{{site.RepoName}}/media/bi/grafana-add.png)

Een nieuw paneel zal verschijnen. Wanneer u op 'choose visualisation' klikt, kunt u de keuze maken tussen een reeks grafieken om uw data te tonen. Als u deze selecteert, zullen er allerlei opties verschijnen om de grafiek verder te personaliseren.

Als u met uw eigen data source wilt werken, moet u op het linkse icoontje klikken:
![Grafana-source](/{{site.RepoName}}/media/bi/grafana-source.JPG). Vervolgens kiest u in het Query veld in de drop down list de data source die je net aangemaakt hebt.

De app zal er als volgt uitzien:

![Grafana-query](/{{site.RepoName}}/media/bi/grafana-query.png)

Je kan deze blokken slepen en toevoegen om zo het achterliggende SQL-script aan te passen. In het project hebben we ervoor gekozen om dit zelf te schrijven. Dit kunt u doen door onderaan op de blok 'Edit SQL' te klikken. Nu kunt u aan de hand van SQL queries de grafiek aanpassen. Bijvoorbeeld:

![Grafana-sql](/{{site.RepoName}}/media/bi/grafana-sql.png)









* Grafana handleiding


{% include footer.html %}
