import Click from "./Scripts/Single/Click.js";
Click('.Menu__Btn','clicked');
Click('.SubMenu__Container','active');

import Nav from "./Scripts/Single/Nav.js";
Nav('.Animais__Imgs img', '.Text__single');

import tooltip from './Scripts/Single/Tootip.js';
tooltip();

import Accordion from './Scripts/Single/Accordion.js';
Accordion();

import Scrool from "./Scripts/Single/Scroll.js";
Scrool();

import Numbers from "./Scripts/Single/Numbers.js";
Numbers();

import FetchBTC from "./Scripts/Single/FetchBTC.js";
FetchBTC('https://blockchain.info/ticker', '.BTC')

import Date from './Scripts/Single/Date.js';
Date('#Date');