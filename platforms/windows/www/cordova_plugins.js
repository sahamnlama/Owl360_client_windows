﻿cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-badge.Badge",
    "file": "plugins/cordova-plugin-badge/www/badge.js",
    "pluginId": "cordova-plugin-badge",
    "clobbers": [
      "cordova.plugins.notification.badge"
    ]
  },
  {
    "id": "cordova-plugin-badge.Badge.Proxy",
    "file": "plugins/cordova-plugin-badge/src/windows/BadgeProxy.js",
    "pluginId": "cordova-plugin-badge",
    "runs": true
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-device.DeviceProxy",
    "file": "plugins/cordova-plugin-device/src/windows/DeviceProxy.js",
    "pluginId": "cordova-plugin-device",
    "runs": true
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
    "file": "plugins/cordova-plugin-inappbrowser/src/windows/InAppBrowserProxy.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "runs": true
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Core",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Util",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
    "pluginId": "cordova-plugin-local-notification",
    "merges": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Proxy",
    "file": "plugins/cordova-plugin-local-notification/src/windows/LocalNotificationProxy.js",
    "pluginId": "cordova-plugin-local-notification",
    "merges": [
      ""
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-badge": "0.8.8",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-plugin-local-notification": "0.9.0-beta.2",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});