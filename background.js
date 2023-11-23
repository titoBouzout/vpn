function FindProxyForURL(url, host) {
	var proxy = "SOCKS5 127.0.0.1:1337";
	switch (host) {
		case "www.youtube.com":
		case "youtube.com":
		case "shop.rewe.de":
			return proxy;
	}

	if (/googlevideo\.com$/.test(host)) {
		return proxy;
	}
	return "DIRECT";
}

chrome.proxy.settings.set(
	{
		value: {
			mode: "pac_script",
			pacScript: {
				data: FindProxyForURL.toString(),
			},
		},
		scope: "regular",
	},
	function () {},
);
