#!/usr/bin/env bash

# Update the box
# --------------
# Downloads the package lists from the repositories
# and "updates" them to get information on the newest
# versions of packages and their dependencies
apt-get update

# Apache
# ------
# Install
apt-get install -y apache2

# Remove /var/www default
rm -rf /var/www

# Symlink /vagrant to /var/www
ln -fs /vagrant /var/www

# Add ServerName to httpd.conf
echo "ServerName localhost" > /etc/apache2/httpd.conf

# Setup hosts file
VHOST=$(cat <<EOF
<VirtualHost *:80>
  DocumentRoot "/vagrant"
  ServerName localhost
  <Directory "/vagrant">
    AllowOverride All
  </Directory>
</VirtualHost>
EOF
)
echo "${VHOST}" > /etc/apache2/sites-enabled/000-default

# Enable mod_rewrite
a2enmod rewrite

# Restart apache
service apache2 restart

#Install PHP
sudo apt-get install php5-cli -y
sudo apt-get install -y libapache2-mod-php5