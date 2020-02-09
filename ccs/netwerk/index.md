---
layout: default
title: Netwerk
author: schrijver
---

{% include nav-breadcrumbs.html %}

## Netwerk

| VM           | Software     | int IP        | IP           |
|--------------|--------------|---------------|--------------|
| Firewall     | pfSense      | 192.168.3.100 | 10.10.10.1   |
| Proxy        | Apache       | /             | 10.10.10.10  |
| API          | ASP.net      | 192.168.3.101 | 10.10.10.101 |
| Frontend     | Angularjs    | 192.168.3.102 | 10.10.10.102 |
| Database     | MySQL        | 192.168.3.103 | 10.10.10.103 |
| Visualisatie | Grafana      | 192.168.3.104 | 10.10.10.104 |

 ## portforwarding Proximus modem

 | Port | VM        | forward IP     | forward Port |
 |------|-----------|----------------|--------------|
 | 22   | Proxy     | 10.10.10.10    | 22           |
 | 3400 | Proxy     | 10.10.10.10    | 80           |
 | 3400 | API       | 10.10.10.101   | #            |
 | 3400 | Frontend  | 10.10.10.102   | #            |
 | 3400 | Database  | 10.10.10.103   | #            |
 | 3400 | Grafana   | 10.10.10.104   | #            |


 ## portforwarding pfSense

 | Port | VM        | forward IP     | forward Port |
 |------|-----------|----------------|--------------|
 | 22   | Proxy     | 10.10.10.10    | 22           |
 | 3400 | Proxy     | 10.10.10.10    | 80           |
 | 3400 | API       | 10.10.10.101   | #            |
 | 3400 | Frontend  | 10.10.10.102   | #            |
 | 3400 | Database  | 10.10.10.103   | #            |
 | 3400 | Grafana   | 10.10.10.104   | #            |


## iets anders
### h3


{% include footer.html %}
