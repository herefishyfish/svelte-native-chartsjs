/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first page.
*/

import { svelteNativeNoFrame } from 'svelte-native'
import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-pluralrules/polyfill';
import "@formatjs/intl-numberformat/polyfill";

// Locale data for en
import "@formatjs/intl-pluralrules/locale-data/en";
import "@formatjs/intl-numberformat/locale-data/en";

import { registerNativeViewElement } from 'svelte-native/dom'
registerNativeViewElement('canvas', () => require('@nativescript/canvas').Canvas)

import App from './App.svelte'

svelteNativeNoFrame(App, {})
