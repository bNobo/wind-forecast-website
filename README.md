# Paramétrage SSL

## Certbot

Installation : 

```bash
sudo apt-get install certbot
```

Paramétrage manuel :

```bash
sudo certbot certonly --manual
```

Suivre les instructions consistant à mettre à disposition un fichier avec un nom et un contenu spécifique afin de prouver que le domaine pour lequel on génère le certificat nous appartient bien. Un exemple se trouve dans le dossier `certbot/.well-known/acme-challenge`.

Récupérer le certificat et la clé privé générés depuis le dossier `/etc/letsencrypt/live/<mon.domain.suffix>`

> En utilisant un reverse proxy, comme par exemple nginx, il est possible de paramétrer certbot pour avoir un renouvellement automatique du certificat.

## Démarrer le site en utilisant un certificat SSL

```bash
http-server dist\wind-forecast-website --ssl -p 8080 -C fullchain.pem -K privkey.pem 
```
