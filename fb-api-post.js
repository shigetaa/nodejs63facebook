require('dotenv').config();
var FB = require('fb');
// 以下、設定を書き換えること
FB.setAccessToken(process.env.ACCESS_TOKEN);

// 任意のメッセージをポストする
var msg = "APIを使ってメッセージを投稿するテストです。";
FB.api('me/feed', 'post', { message: msg }, function (res) {
	if (!res) {
		console.log("error"); return;
	}
	console.log(res);
});
