---
layout: default
title: MySQL
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# MySQL
![MySQL](../../media/logo/mysql.png) &nbsp;&nbsp;&nbsp;
![phpMyAdmin](../../media/logo/phpmyadmin.png)

## Wat
We gebruiken de MySQL database voor dit project, dit is een open-source relationeel database management system. Daarnaast kunnen we gebruikmaken van de webinterface van phpmyadmin om eenvoudig de data te bekijken, zonder de kennis van SQL queries.

## Installatie
Om de installatie van MySQL, phpMyAdmin, en het instellen van de backups te vereenvoudigen hebben we een 'script' opgestelt. Bij het aanmaken van een nieuwe VM kan je eenvoudig de installatie uitvoeren, en bekom je altijd de zelfde installatie/configuratie. Het script bestaat uit verschillende onderdelen die je kan kopieren en in de terminal plakken (en eventueel enter drukken).

### stap 1: Sudo rechten
Tijdelijk overschakkelen naar sudo rechten voor uitvoeren van script. Na invullen van correct wachtwoord veranderd de promt en ga je als Root verder.
```
Sudo -i
password: *****
```
### stap 2: MySQL installeren
Installeren van MySQL op non-interactive wijze, root wachtwoord opgegeven via variabele.
```
sudo apt update
MySQLRootPwd=project
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password $MySQLRootPwd"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $MySQLRootPwd "
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server
```

{% include footer.html %}
