---
layout: default
title: Database Verbinding ASP.NET 
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# Pull Script API
![github](../../media/logo/github.png)
![git](../../media/logo/git.png)

## wat
Voor het werken, bewaren en samenwerken aan de code werken we met Github. Om deze code eenvoudig van Github te halen en te deployen maken we gebruik van een script. Dit script zorgt ervoor dat de recentste code van github gedownload wordt en deze klaar gemaakt word voor het deployen. 

## script

### pull.sh
```
#! Bin/bash

echo -e "\e[32mRemoving old repo\e[39m"
rm -rf /home/project/Project-4.0-Backend/

echo -e "\e[32mCloning new repo\e[39m"
git clone https://github.com/BoszS/Project-4.0-Backend.git

cd /home/project/Project-4.0-Backend/Backend/

echo -e "\e[32mChanching developing to production environment\e[39m"
mv Startup.cs.prod   Startup.cs
mv appsettings.json.prod appsettings.json
mv Properties/launchSettings.json.prod Properties/launchSettings.json

echo -e "\e[32mInstalling dotnet dependancy: Pomelo MySQL\e[39m"
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 2.2.6-rc1-final

echo -e "\e[32mDone\e[39m"
echo -e "\e[33mMove to /home/project/Project-4.0-Backend/Backend and enter 'dotnet run' to deploy\e[39m"
echo -e "\e[33mOr execute bash run.sh\e[39m"
```

### run.sh
```
#! /bin/bash

echo -e "\e[32mStopping old dotnet processes\e[39m"
sudo killall -9 dotnet

echo -e "\e[32mMoving to project folder\e[39m"
cd /home/project/Project-4.0-Backend/Backend/

echo -e "\e[32mDeploying \e[39m"
dotnet run
```

### Github credentials bewaren
Indien je niet telkens je github credentials wil ingeven kan je ook 1 maal volgend commando ingeven om deze te berwaren.
Volgende maal credentials worden opgevegen worden deze bewaard en gebruikt voor de volgende keren.
```
git config --global credential.helper store
```
Dit zorgt dat er een ```.git-credentials``` bestand in je home directory aangemaakt waar je gegevens worden opgeslagen.
Voor de API




## Zie ook


## Bronnen

{% include footer.html %}
