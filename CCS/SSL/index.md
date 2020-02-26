---
layout: default
title: SSL
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# SSL
![SSL](/{{ site.RepoName }}//media/logo/SSL.png)
![HTTPS](/{{ site.RepoName }}//media/logo/https.png)
![LE](/{{ site.RepoName }}//media/logo/LE.png)



## Wat
Met SSL gaan we er voorzorgen dat de verbinding tussen de client en de server beveiligd wordt. SSL (Secure Socket Layer), of tegenwoordig TLS (Transport Layer Security) is het achterliggende protocol dat dit tot standbrengt. Alle Communicatie tussen de Client en Server wordt geencyrpeerd door de zender en weer gedecrypteerd bij de ontvanger. Dit wordt gedaan door certificaten en public & private keys. In onze opstelling gebruiken we bestaande certificaten en keys van de synology url die al in het netwerk aanwezig is.

## SSL instellen 

### Certificaat downloaden of genereren 
Om te beginnen moeten we het bestaande certificaat exporteren van de Synology NAS. Het huidige certificaat is geldig tot 10 april, op de NAS wordt dit certificaat automatisch vernieuwd, door een nieuw certificaat aan te vragen bij de provider (lets encrypt). In realiteit zou dit ook zo ingesteld kunnen worden op de Proxy. 

![Cert](/{{ site.RepoName }}//media/netwerk/certificaat.png)
![keys](/{{ site.RepoName }}//media/netwerk/keys.png)

### Certificaat & Keys opslaan + rechten instellen 
Vervolgens maken we een map aan op de proxy server waar we het certificaat en keys gaan opslaan. We hebben ervoor gekozen voor volgende locatie. 
```sudo mkdir /var/www/cert/```

Nadien plaatsen we de bestanden in op deze locatie, en geven we apache lees rechten.
Het overzetten kan zowel via FTP, of door de inhoud te kopieren en te plakken binnen een SSH sessie.
Om snel leesrechten te geven kunnen we ```sudo chmod +r /var/www/cert/* ``` gebruiken, echter is het veilig om de user ```www-data``` eigenaar van het bestand te maken via ```sudo chown -R www-data /var/www/cert```

### SSL configureren binnen Apache2
Het eerste dat we moeten doen is er voor zorgen dat Apache met SSL certicaten en keys kan werken. Dit doen we door de module ssl binnen apache te activeren 
```sudo a2enmod ssl ```
Vervolgens kunnen we per vhost bepalen welke SSL instellingen we willen maken.
We doen dit binnen ```/etc/apache2/sites-enabled/000-default.conf```
* Eerst zetten we binnen onze vhost SSL aan
    * SSLEngine On
* Vervolgens geven we op de nodige bestanden staan, namelijk het certificaat, chain & private key
    * SSLCertificateFile /var/www/cert/cert.pem
    * SSLCertificateKeyFile /var/www/cert/privkey.pem
    * SSLCACertificateFile /var/www/cert/chain.pem

``` 
sudo nano /etc/apache2/sites-enabled/000-default.conf

```


![Cert](/{{ site.RepoName }}//media/netwerk/tree.png)





## Zie ook
* [Netwerk](/{{ site.RepoName }}/CCS/Netwerk)
* [Proxy](/{{ site.RepoName }}/CCS/Proxy)


## Bronnen 
* []()
* []()

{% include footer.html %}
