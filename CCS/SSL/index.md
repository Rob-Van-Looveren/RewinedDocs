---
layout: default
title: SSL
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# SSL
![SSL](/{{ site.RepoName }}//media/logo/SSL.png)
![HTTPS](/{{ site.RepoName }}//media/logo/https.png)


## Wat
Met SSL gaan we er voorzorgen dat de verbinding tussen de client en de server beveiligd wordt. SSL (Secure Socket Layer), of tegenwoordig TLS (Transport Layer Security) is het achterliggende protocol dat dit tot standbrengt. Alle Communicatie tussen de Client en Server wordt geencyrpeerd door de zender en weer gedecrypteerd bij de ontvanger. Dit wordt gedaan door certificaten en public & private keys. In onze opstelling gebruiken we bestaande certificaten en keys van de synology url die al in het netwerk aanwezig is.

## instellen 
Om te beginnen moeten we het bestaande certificaat exporteren van de Synology NAS.
![apache](/{{ site.RepoName }}//media/logo/https.png)




## Zie ook
[Netwerk](/{{ site.RepoName }}/CCS/Netwerk)
[Proxy](/{{ site.RepoName }}/CCS/Proxy)


## Bronnen 
* []()
* []()

{% include footer.html %}
