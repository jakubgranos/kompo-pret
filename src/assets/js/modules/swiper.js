import Swiper from 'swiper';
const sliders = function() {
	const slider = new Swiper('.swiper1', {
		effect: 'fade',
		pagination: {
			el: '.swiper-pagination1',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
	});
}
export default sliders;