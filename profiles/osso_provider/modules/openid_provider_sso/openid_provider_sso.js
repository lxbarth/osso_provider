/**
 * @file
 * Javascript behaviors for OpenID Provider SSO.
 */

Drupal.behaviors.openid_provider_sso = function() {

  // Retrieve realm
  // Example: user&realm=http%3A%2F%2Flocalhost%2Frp%
  var vars = window.location.search.replace('?', '').split("&");

  for (i = 0; i < vars.length; i++) {

    var value = vars[i].split("=");

    if (value[0] == 'realm') {
      realm = vars[i];
      break;
    }
  }
      console.log(realm);
  // Attach realm to all user and user/register links.
  if (realm != '') {
    var basePath = Drupal.settings.basePath;
    $("a[href='" + basePath + "?q=user/register']").attr('href', basePath + '?q=user/register&' + realm);
    $("a[href='" + basePath + "user/register']").attr('href', basePath + 'user/register?' + realm);
    $("a[href='" + basePath + "?q=user']").attr('href', basePath + '?q=user&' + realm);
    $("a[href='" + basePath + "user']").attr('href', basePath + 'user?' + realm);
  }
}