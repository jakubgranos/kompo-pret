import getWindowUserAgent from './modules/userAgent';
window.onload = () => {
	console.log('You are using:', getWindowUserAgent());
}

import sliders from "./modules/swiper"
sliders();

import  "./modules/hamburger-menu"
import  "./modules/stickyNav"