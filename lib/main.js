var pageMod = require("sdk/page-mod");

var data = require('sdk/self').data;

pageMod.PageMod({
  include: "http://www.reddit.com/r/pcmasterrace*",
  contentStyle: '#header {background: url(' +
				data.url('pcmr-banner.png') +
				') no-repeat scroll 0% 0% #000 !important; background-size: cover !important; }'
});