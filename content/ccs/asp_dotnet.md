---
layout: post
title: ASP.net
---

# ASP.net

![ASP.net](../../media/logo/asp.net.png)
![ASP.net](../../media/logo/dotnet.png)

## wat
Asp.net is een framework dat draait bovenop het dotnet core framework van Microsoft. Het is crossplatform en kan dus op zowel Windows, Linux als Mac runnen.

## Installatie 
De API is geschreven in .netcore 2.2 en is dus de versie die we installeren 

### Repository toevoegen
```
wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
```

### Installeren .NET, ASP.net & SDK
```
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install apt-transport-https
sudo apt-get install dotnet-runtime-2.2
sudo apt-get install aspnetcore-runtime-2.2
sudo apt-get install dotnet-sdk-2.2
```

# Uitleg werking a.d.h.v testapp
* Maak en ga naar nieuwe map
* Create nieuwe app via ```dotnet new webapp ```
    * we kiezen het template webapp, dit gebruikt ASP.net
* Start app via ```dotnet run```
    * de applicatie draait nu
    * maar is enkel alleen voor localhost bereikbaar
    * andere machines kunnen er dus niet naartoe browsen
* Onderbreek de app via crl + c
* Open ```Properties/launchSettings.json``` in een editor
* De regel applicationUrl bepaald de URL, http protocol en poort
    * verander localhost naar *, zo kan iedere machine de app bereiken 
    * je kan zelf poorten aanpassen
    * je kan ook enkel http gebruiken door https te verwijderen
* start de app opnieuw via ```dotnet run```


abc
