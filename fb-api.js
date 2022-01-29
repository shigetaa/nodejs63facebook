require('dotenv').config();
var FB = require('fb');
// 以下、設定を書き換えること
FB.setAccessToken(process.env.ACCESS_TOKEN);

// 自分の投稿を取得して表示
FB.api('me/feed', 'get', {}, function (feed) {
	if (!feed) {
		console.log("error"); return;
	}
	var data = feed.data;
	for (var i in data) {
		var row = data[i];
		console.log(row);
		console.log("----------------");
	}
});
