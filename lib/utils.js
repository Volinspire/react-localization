"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInterfaceLanguage = getInterfaceLanguage;
exports.validateTranslationKeys = validateTranslationKeys;
function getInterfaceLanguage() {
  if (typeof navigator !== "undefined" && !!navigator.language) {
    return navigator.language;
  } else if (typeof navigator !== "undefined" && !!navigator.languages && !!navigator.languages[0]) {
    return navigator.languages[0];
  } else if (typeof navigator !== "undefined" && !!navigator.userLanguage) {
    return navigator.userLanguage;
  } else if (typeof navigator !== "undefined" && !!navigator.browserLanguage) {
    return navigator.browserLanguage;
  }
  return "en-US";
}

function validateTranslationKeys(translationKeys) {
  var reservedNames = ["_interfaceLanguage", "_language", "_defaultLanguage", "_defaultLanguageFirstLevelKeys", "_props"];
  translationKeys.forEach(function (key) {
    if (reservedNames.indexOf(key) !== -1) {
      throw new Error(key + " cannot be used as a key. It is a reserved word.");
    }
  });
}