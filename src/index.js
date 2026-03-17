import { loadHomeTab } from "./home.js";
import { loadMenuTab } from './menu.js';
loadHomeTab();
const homeTabButton = document.querySelector('#home-tab-button');
const menuTabButton = document.querySelector('#menu-tab-button');
const contactTabButton = document.querySelector('#home-tab-button');
homeTabButton.addEventListener('click', loadHomeTab);
menuTabButton.addEventListener('click', loadMenuTab);