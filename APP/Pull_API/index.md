---
layout: default
title: Pull API 
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# Pull & deploy 
![bash](/{{ site.RepoName }}/media/logo/bash.png)
![github](/{{ site.RepoName }}/media/logo/github.png)

## Pull script
Om de nieuwste versie van onze Angular code online te brengen moeten we enkele stappen uitvoeren. Om dit process te vereenvoudigen maken we gebruik van onderstaant script. Dit script zal dan volgende stappen uitvoeren
* De oude build omgeving opkuisen en verwijderen
* Recentste code van github downloaden
* Development omgeving omzetten naar productie 
* Dotnet dependacy installeren
* Melding om manueel te deployen of met Run.sh script

### Pull script
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

### Run script
```
#! /bin/bash

echo -e "\e[32mStopping old dotnet processes\e[39m"
sudo killall -9 dotnet

echo -e "\e[32mMoving to project folder\e[39m"
cd /home/project/Project-4.0-Backend/Backend/

echo -e "\e[32mDeploying \e[39m"
dotnet run
```

### Git credentials opslaan
Standaard zal Linux de opgeven username en wachtwoord niet bewaren. Echter kan je er voor zorgen dat eenmaal de juiste credentials ingeven worden, deze ook worden opgeslagen zodat deze niet elke keer ingegeven moeten worden. Let er wel op dat je credentials dan als tekst bestand in je home directory terecht komen. Door volgend commando in te geven zullen credentials binnen jou linux account worden opgeslagen. 

```
git config --global credential.helper store
```


## Zie ook
* [Installatie ASP.net](/{{site.RepoName}}/CCS/ASP_net/)
* [Angular - Pull & Deploy script](/{{site.RepoName}}/APP/Pull_Angular/)


## Bronnen
* [Credentials opslaan](https://git-scm.com/docs/git-credential-store)


{% include footer.html %}
