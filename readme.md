# Facebook からのダウンロード
Facebook API を利用して、タイムラインを取得したり、書き込みを行ったりします。

## Facebook とは何か？
Facebookは、インターネット状のソーシャルネットワーキングサービス(SNS)です。
13才以上であれば無料で参加でき、実名登録制となっています。

## Facebook API
Facebook APIを利用する事で、Facebook の各種機能を利用出来るようになっています。
APIを使うためには、Facebook 開発者ページからアプリを新規作成して、設定キーを取得する必要があります。

[Facebook 開発者ページ<br>https://developers.facebook.com/](https://developers.facebook.com/)

### アプリケーションを新規作成
開発者ページで、新規アプリケーションを登録しましょう。
FacebookのアカウントでFacebookにログインし、開発者ページにアクセスしてページ上部にあるメニューから「My Apps > Register as Developer」をクリックして開発者登録をしてください。

[Facebook 開発者登録<br>https://developers.facebook.com/async/registration/](https://developers.facebook.com/async/registration/)

電話番号認証、メールアドレス認証を済ませると、新規アプリケーション作成の登録を済ませてください。
無事に、アプリ登録が完了すると、この画面状にある「App ID」「App Secret」を保存しておきましょう。
次に、Graph API Explorer にアクセスしましょう。

[Graph API Explorer<br>https://developers.facebook.com/tools/explorer/](https://developers.facebook.com/tools/explorer/)

ここで、先ほど登録したアプリ名を選択して「Generate Access Token」をクリックして「**ACCESS TOKEN**」を発行して、保存しておきましょう。

### dotenv モジュールをインストール
Node.js から環境変数を簡単に扱う為にモジュールをインストールします。
```bash
npm i dotenv
```
dotenv を利用することで`.env`と言うファイルで環境変数を定義手軽に認証情報などを設定する際に便利です。
ここでは、Facebookの認証情報を設定しておきます。

```txt
ACCESS_TOKEN = 'アクセストークン'
```

### fb モジュールのインストール
Node.js で Facebook を操作するモジュールも、いくつか公開されていますが、ここでは fb モジュールを利用してみます。

以下のコマンドを実行して、インストールしましょう。

```bash
npm i fb
```

### Facebook で自分の投稿を表示するプログラム
ここでは、自分の投稿を表示するプログラムを`fb-api.js`と言うファイル名で作成していきます。

```javascript
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
```
実行するには、以下のコマンドを実行します。
```bash
node fb-api.js
```
うまく実行出来ると、過去に自分が投稿した一覧を取得する事ができます。

### フィードに任意のメッセージを投稿するプログラム
Facebookに任意のメッセージを投稿するプログラムを`fb-api-post.js`と言うファイル名で作成します。

```javascript
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

```

実行するには、以下のコマンドを実行します。
```bash
node fb-api-post.js
```
うまく実行出来ると、タイムラインい投稿したメッセージが表示されます。

表示されない時は、Facebook 開発者ページにてアプリのアクセス許可を確認して権限を確認してみてください。