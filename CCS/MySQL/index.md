---
layout: default
title: MySQL
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# MySQL
![MySQL](/{{ site.RepoName }}/media/logo/mysql.png) &nbsp;&nbsp;&nbsp;
![phpMyAdmin](/{{ site.RepoName }}/media/logo/phpmyadmin.png)

## Wat
We gebruiken de MySQL database voor dit project, dit is een open-source relationeel database management system. Daarnaast kunnen we gebruikmaken van de webinterface van phpmyadmin om eenvoudig de data te bekijken, zonder de kennis van SQL queries.

## Installatie
Om de installatie van MySQL, phpMyAdmin, en het instellen van de backups te vereenvoudigen hebben we een 'script' opgestelt. Bij het aanmaken van een nieuwe VM kan je eenvoudig de installatie uitvoeren, en bekom je altijd dezelfde installatie/configuratie. Het script bestaat uit verschillende onderdelen die je kan kopieren en in de terminal plakken (en eventueel enter drukken).

### stap 1: Sudo rechten
Tijdelijk overschakkelen naar sudo rechten voor uitvoeren van het script. Na invullen van correct wachtwoord verandert de promt en ga je als root verder.
```
sudo -i
password: *****
```
### stap 2: MySQL installeren
Installeren van MySQL op non-interactieve wijze, root wachtwoord opgegeven via variabele.
```
sudo apt update
MySQLRootPwd=project
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password $MySQLRootPwd"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $MySQLRootPwd "
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server
```

### stap 3: SQL users aanmaken
user project heeft alle rechten; user grafana heeft enkel leesrechten
```
sudo mysql -u root -p$MySQLRootPwd -e "CREATE USER 'project'@'%' IDENTIFIED BY 'project';"
sudo mysql -u root -p$MySQLRootPwd -e " GRANT ALL PRIVILEGES ON *.* TO 'project'@'%';"
sudo mysql -u root -p$MySQLRootPwd -e "CREATE USER 'grafana'@'%' IDENTIFIED BY 'grafana';"
sudo mysql -u root -p$MySQLRootPwd -e " GRANT select ON *.* TO 'grafana'@'%';"
```

### Stap 4: phpMyAdmin
installeren van phpMyAdmin 
```
App_Pwd="project"
Root_Pwd="project"
AppDB_Pwd="project"
echo "phpmyadmin phpmyadmin/dbconfig-install boolean true" | debconf-set-selections
echo "phpmyadmin phpmyadmin/app-password-confirm password $App_Pwd" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/admin-pass password $Root_Pwd" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/app-pass password $AppDB_pwd" | debconf-set-selections
echo "phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2" | debconf-set-selections
apt-get install -y phpmyadmin
```

### stap 5: Allow Remote connections & fix phpMyAfdmin error
Andere machines toegang geven tot MySQL Server.
Error in default phpMyAdmin configuratie repareren.
```
echo 'bind-address            = 10.10.10.103' >> /etc/mysql/mysql.conf.d/mysqld.cnf
sudo sed -i "s/|\s*\((count(\$analyzed_sql_results\['select_expr'\]\)/| (\1)/g" /usr/share/phpmyadmin/libraries/sql.lib.php
sudo service mysql restart
```

## Zie ook
* [Back-up MySQL database](/{{ site.RepoName }}/CCS/backup#Database-Backup)
* [API verbinden met Database](/{{ site.RepoName }}/app/ASP_DB/)


## Bronnen
* [Website MySql](https://www.mysql.com/)
* [Website phpMyAdmin](https://www.phpmyadmin.net/)
* [Remote access debugging](https://www.cyberciti.biz/tips/how-do-i-enable-remote-access-to-mysql-database-server.html)


{% include footer.html %}
