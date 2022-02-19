let express = require('express');
// var compress = require('compression');
let app = express();
let bodyParser = require('body-parser');
let ejsLint = require('ejs-lint');
// app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/'));

// const axios = require('axios');
// const postgres = require("./resources/js/db-config");


app.get('/', 			function (req, res) { render_home_page(res) });
app.get('/Footprint', 	function (req, res) { render_footprint(res) });

module.exports = app.listen (process.env.PORT || 3000, () => {
	console.log(`3000 is tHe MaGiCaL pOrT~ ★☆★☆★☆`);
})

function render_page(res, page, title, tab, status=200, css="", script="", search_data=[], search_placeholder="", input_text="", loading_text="") {
	res.render(page, {
		page_title: title,
		page_tab: tab,
		page_status: status,
		page_css: css,
		page_script: script,
		search_data: search_data,
		search_placeholder: search_placeholder,
		search_term: input_text,
		load_text: loading_text
	});
}

function render_home_page(res, status=200) {
	render_page(res,
		"pages/home",			// File Location
		"T9Hacks",				// Page Title
		"Home",					// Page Tab
		status, 				// HTTP Status
		"home"					// Page CSS
	);
}
function render_footprint(res, status=200) {
	render_page(res,
		"pages/footprint",		// File Location
		"Carbon Footprint",		// Page Title
		"Footprint",			// Page Tab
		status, 				// HTTP Status
	);
}