/**
 * @file
 * Javascript behaviors for OpenID Provider SSO.
 */

Drupal.behaviors.openid_provider_sso = function() {

  // Retrieve realm
  // Example: user&realm=http%3A%2F%2Flocalhost%2Frp%
  var vars = window.location.search.replace('?', '').split("&");
  var realm = '';
  for (i = 0; i < vars.length; i++) {
    var value = vars[i].split("=");
    if (value[0] == 'realm') {
      realm = vars[i];
      break;
    }
  }

  // Attach realm to all user and user/register links.
  if (realm != '') {
    var base = Drupal.settings.basePath;
    $("a[href='" + base + "?q=user/register']").attr('href', base + '?q=user/register&' + realm);
    $("a[href='" + base + "user/register']").attr('href', base + 'user/register?' + realm);
    $("a[href='" + base + "?q=user']").attr('href', base + '?q=user&' + realm);
    $("a[href='" + base + "user']").attr('href', base + 'user?' + realm);
  }
}