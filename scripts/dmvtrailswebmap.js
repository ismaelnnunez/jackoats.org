// Map
let map = L.map('map').setView([38.87995, -77.10681], 10);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20,
}).addTo(map);

let destinationPlaces = [
	{
		"name": "Mason District Park",
		"desc": "A cool park!",
		"coord": [38.83302, -77.17324],
	},
	{
		"name": "Haycock Longfellow Park",
		"desc": "Another cool park!",
		"coord": [38.90689, -77.17685],
	},
	{
		"name": "Wakefield Park",
		"desc": "Woo!",
		"coord": [38.81744, -77.22428],
	},
	{
		"name": "Lake Accotink Park",
		"desc": "!!!",
		"coord": [38.79406, -77.21543],
	},
	{
		"name": "Lake Fairfax Park",
		"desc": "Wow.",
		"coord": [38.96148, -77.31802],
	},
	{
		"name": "Great Falls Park (Virginia)",
		"desc": "So cool!",
		"coord": [38.98383, -77.24850],
	},
	{
		"name": "Roundtree Park",
		"desc": "Woot!",
		"coord": [38.85130, -77.19089],
	},
	{
		"name": "Scott's Run Nature Preserve'",
		"desc": "Weeee!",
		"coord": [38.961181, -77.197750],
	}
]

let placeName, placeDesc, placeCoord, placePopup;
let destinationIconStyle, destinationIcon;

for (place in destinationPlaces) {
	placeName = destinationPlaces[place].name;
	placeDesc = destinationPlaces[place].desc;
	placeCoord = destinationPlaces[place].coord;
	placePopup = `<b>${placeName}</b><br>${placeDesc}`;
	placeIconDia = 10;
	placeIconHtml = `<div style="width: ${placeIconDia}px; height: ${placeIconDia}px; border: 1px solid white; border-radius: 50%; background-color: blue;"></div>`;

	destinationIconStyle = L.divIcon({
		className: "",
		iconSize: placeIconDia,
		iconAnchor: [placeIconDia / 2, placeIconDia / 2],
		html: placeIconHtml,
	});

	destinationIcon = L.marker(placeCoord, {icon: destinationIconStyle});
	destinationIcon.bindTooltip(placePopup);

	map.addLayer(destinationIcon);
}

