---
layout: default
title: html titel
author: schrijver
---

{% include nav-breadcrumbs.html %}

# Titel

![ASP.net](/media/logo/asp.net.png)
![foto](../iets)
![logo](pad/naar/foto)


## 1ste hoofding
Asp.net is een framework dat draait bovenop het dotnet core framework van Microsoft. Het is crossplatform en kan dus op zowel Windows, Linux als Mac runnen.

### 2de hoofding

#### 3de hoofding

### lijsten
* item
* item
    * sub item
    * sub item
        * sub sub item


1. item
1. item
1. item
    1. sub item
    1. sub item

```
Code block
sudo apt update
kan heel lange commado's tonen, er wordt indien nodig een horizontale scrollbar getoont op de web pagine. zou deze zin al lang genoeg zijn?
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

## Uitleg werking a.d.h.v testapp
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
    * Nu kan je met een ander machine aan de applicatie

## Sammengevat
* ```dotnet new webapp``` maakt app aan
* ```dotnet new run``` start de applicatie
* ```Properties/launchSettings.json``` bevat de URL eigenschappen

# Bronnen 
* [.NET Core 2.2 Download page](https://dotnet.microsoft.com/download/dotnet-core/2.2)
* [Install instructions (Ubuntu 18.04)](https://docs.microsoft.com/nl-nl/dotnet/core/install/linux-package-manager-ubuntu-1804)
* [Deploy Video tutorial](https://www.youtube.com/watch?v=6VK370-Yk3A)

{% include footer.html %}
