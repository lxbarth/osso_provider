

OpenID Provider Trusted Web
===========================

Add trusted sites to a Drupal OpenID provider. Users enjoy a simplified sign on
process between trusted sites.

Installation
============

Install this module and dependencies. In your site's settings.php file, define a
list of trusted Relying Parties:

$conf['openid_provider_trusted_rps'] = array(
  'http://localhost/rp/'
);