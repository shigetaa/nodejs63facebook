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

### fb モジュールのインストール
Node.js で Facebook を操作するモジュールも、いくつか公開されていますが、ここでは fb モジュールを利用してみます。

以下のコマンドを実行して、インストールしましょう。

```bash
npm i fb
```

### Facebook で自分の投稿を表示するプログラム
