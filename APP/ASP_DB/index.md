---
layout: default
title: Database Verbinding ASP.NET 
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# ASP.Net verbinden met database
![DBs](../../media/logo/asp_db.png)


## Instellen
Om te verbinden met de database moeten we de ASP.net code van onze API nog aanpassen en een extra dotnet package installeren. Na deze 3 wijzigingen kan de API met database verbinden.

### package installeren
Ga naar de map waar je project staat en via dotnet add package installeren we het volgende packet 'Pomelo.EntityFrameworkCore.MySql versie 2.2.6'. Dit packet zorgt ervoor dat het DOTNET framework met de mysql database kan communiceren.
```
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 2.2.6-rc1-final
```
### appsettings.json
in het bestand appsettings.json moeten we opgeven met welke database we gaan verbinden. 
Verander de DefaultConnection string naar volgende indeling en geef de juiste gegevens op.
```
"DefaultConnection": "server=192.168.3.130;port=3306;database=Rewined;uid=***;password=***"
```

### Startup.cs
in het bestand Startup.json moeten we opgeven dat we met MySQL werken in plaats van een Microsoft SQL database.
Daarom moeten we bij *'AddDbContext'* de optie *'UseSqlServer'* vervangen door *'UseMySql'*
```
services.AddDbContext<RewinedContext>(options =>  options.UseMySql(Configuration.GetConnectionString("DefaultConnection")));
```

## Zie ook
* [Installatie ASP.NET](/{{site.RepoName}}/CCS/ASP_net/)
* [Installatie MySQL](/{{site.RepoName}}/CCS/MySQL/)


## Bronnen
* [Nuget page - Pomelo.EntityFrameworkCore.MySql](https://www.nuget.org/packages/Pomelo.EntityFrameworkCore.MySql/2.2.6)
* [Github Pomelo](https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql)

{% include footer.html %}
