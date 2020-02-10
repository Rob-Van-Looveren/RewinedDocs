---
layout: default
title: Netwerk
author: schrijver
---

{% include nav-breadcrumbs.html %}

## Netwerk

| VM           | Software     | int IP        | IP           |Link|
|--------------|--------------|---------------|--------------|---|
| Firewall     | pfSense      | 192.168.3.100 | 10.10.10.1   | |
| Proxy        | Apache       | /             | 10.10.10.10  |[Web](http://rob-vl.synology.me:3400)|
| API          | ASP.net      | 192.168.3.101 | 10.10.10.101 |[API](http://rob-vl.synology.me:3401/swagger)|
| Frontend     | Angularjs    | 192.168.3.102 | 10.10.10.102 |[Front](http://rob-vl.synology.me:3402)|
| Database     | MySQL        | 192.168.3.103 | 10.10.10.103 |[db](http://rob-vl.synology.me:3403/phpmyadmin)|
| Visualisatie | Grafana      | 192.168.3.104 | 10.10.10.104 |[grafana](http://rob-vl.synology.me:3404)|


## Portforwarding Proximus modem

| Port | VM        | forward IP     | forward Port |
|------|-----------|----------------|--------------|
| 22   | Proxy     | 10.10.10.10    | 22           |
| 3400 | Proxy     | 10.10.10.10    | 3400         |
| 3401 | API       | 10.10.10.101   | 3401         |
| 3402 | Frontend  | 10.10.10.102   | 3402         |
| 3403 | Database  | 10.10.10.103   | 3403         |
| 3404 | Grafana   | 10.10.10.104   | 3404         |


## portforwarding pfSense

| Port | VM        | forward IP     | forward Port |
|------|-----------|----------------|--------------|
| 22   | Proxy     | 10.10.10.10    | 22           |
| 3400 | Proxy     | 10.10.10.10    | 80           |
| 3401 | API       | 10.10.10.101   | 3401         |
| 3402 | Frontend  | 10.10.10.102   | 3402         |
| 3403 | Database  | 10.10.10.103   | 3403         |
| 3404 | Grafana   | 10.10.10.104   | 3404         |


## 
* disable ipv6
* setup /etc/resolve
### h3


{% include footer.html %}
