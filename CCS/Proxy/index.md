---
layout: default
title: Proxmox
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}



# Proxy

![apache](/{{ site.RepoName }}//media/logo/apache.png)

## Wat
Een proxy server is een tussenliggende server die de requests behandeld en verwerkt.
In onze opstelling werken met een reverse proxy, dit heeft als voordeel dat we op 1 machine alle requests kunnen beheren en sturen. 
Aangezien alle requets op de proxy uitkomen is dit ook de plaats waar we [SSL](/{{ site.RepoName }}//CCS/SSL)
 configureren, en dus HTTPS gebruiken in plaats van http.


![apache](/{{ site.RepoName }}//media/netwerk/proxy.png)


## Zie ook
[Netwerk](/{{ site.RepoName }}/CCS/Netwerk)
[Netwerk](/{{ site.RepoName }}/CCS/SSL)

## Bronnen 
* []()
* []()

{% include footer.html %}
