// ライブラリの読み込み
var NCMB = require('ncmb');

// アプリケーションキー、クライアントキーはmBaaSの管理画面から取得してください。
var application_key = "AAAAAAA",
    client_key = "BBBBBBB";

// アプリケーションキー、クライアントキーを使って初期化します。
var ncmb = new NCMB(application_key, client_key);

// データストアを使います。"Message" というのは自分で自由に決められます。
// Messageはデータベースでいうところのテーブルです。
var Message = ncmb.DataStore("Message");

// messageを作成します。データベースで言うところのレコードです。
var message = new Message();

// setというメソッドを使ってmessageのデータを自由に定義できます。
// "text" というのは自由に変更できるカラム名です。
message.set("text", "Connected!");

// 保存を実行します。
message.save()
  // thenは保存処理が成功した時に呼ばれます。
  .then(function() {
    // 今回はconsole.logにメッセージを出しています。
    console.log("Save sucessful. Check console panel.");
  })
  // catchは保存処理が失敗した時に呼ばれます。
  .catch(function(err) {
    // 引数のerrにエラーメッセージが入ります。
    console.error("Error: ", err);
  });
