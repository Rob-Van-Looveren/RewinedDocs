---
layout: default
title: Pull angular 
author: Rob V.L.
---

{% include nav-breadcrumbs.html %}

# Pull & deploy 
![bash](../../media/logo/bash.png)
![github](../../media/logo/github.png)
![bash](../../media/logo/git.png)

## Pull script


```
#! /bin/bash

echo -e "\e[32mDeleting old Repo\e[39m"
sudo rm -rf /home/project/Project-4.0-Frontend

echo -e "\e[32mcloning new files from git\e[39m"
git clone https://github.com/BoszS/Project-4.0-Frontend.git

echo -e "\e[32mchanching rights\e[39m"
sudo chown project Project-4.0-Frontend
sudo chmod 774 Project-4.0-Frontend

echo -e "\e[32mMoving to git repo\e[39m"
cd /home/project/Project-4.0-Frontend

echo -e "\e[32minstalling dependancies\e[39m"
npm install @angular-devkit/build-angular@0.801.1

echo -e "\e[32mEditing node_modules\e[39m"
sed -i 's/    private setPage(page);/    public setPage(page);/g' /home/project/Project-4.0-Frontend/node_modules/jw-angular-pagination/lib/jw-pagination.component.d.ts

echo -e "\e[32mBuilding\e[39m"
sudo ng build --prod=true

echo -e "\e[32mDeleting old files\e[39m"
sudo rm -rf /var/www/html/

echo -e "\e[32mCopying files to /var/www/html\e[39m"
sudo cp -r /home/project/Project-4.0-Frontend/dist/Frontend /var/www/html
```

git config --global credential.helper store


## Zie ook

## Bronnen


{% include footer.html %}
