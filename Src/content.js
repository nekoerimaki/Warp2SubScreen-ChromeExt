/**
 * このスクリプトは、background.jsからの指示でページに挿入されます。
 * 1. 最初に実行されたとき：動画プレイヤーを探し、見つかればフルスクリーン化の準備をする。
 * 2. メッセージを受け取ったとき：準備した処理を実行してフルスクリーンにする。
 */

function prepareFullscreen() {
  console.log("Warp2SubScreen: 動画プレイヤーを探し、フルスクリーン化を準備します...");
  // YouTubeのプレイヤーコンテナ(#movie_player)を優先的に探す
  let playerElement = document.getElementById('movie_player');

  // 見つからなければ、汎用的な<video>タグを探す
  if (!playerElement) {
    playerElement = document.querySelector('video');
  }

  if (playerElement) {
    console.log("Warp2SubScreen: フルスクリーン対象の要素が見つかりました。", playerElement);

    // フルスクリーン化を実行する関数
    const goFullscreen = () => {
      // YouTubeなど、より複雑なサイトでは、動画をラップしているコンテナ要素を
      // フルスクリーンにする必要がある場合があります。
      // ここでは最もシンプルな <video> 要素を対象とします。
      if (playerElement.requestFullscreen) {
        playerElement.requestFullscreen().catch(err => console.error("Fullscreen failed:", err));
      } else {
        console.error("Warp2SubScreen: この要素はフルスクリーンに対応していません。");
      }
      // イベントリスナーを削除
      document.removeEventListener('click', goFullscreen);
    };

    // ユーザー操作のコンテキスト内でフルスクリーンをトリガーするためのリスナーを設定
    // このスクリプトがユーザー操作（アイコンクリック）によって実行されているため、
    // ここで追加したイベントリスナー内での処理はユーザー操作起因と見なされる。
    document.addEventListener('click', goFullscreen, { once: true, capture: true });

    // background.js に動画が見つかったことを伝える
    return true;
  }
  return false;
}

// background.jsからメッセージを受け取ったときの処理
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "triggerFullscreen") {
    console.log("Warp2SubScreen: フルスクリーン化のトリガーを受け取りました。");
    // 準備段階で設定した 'click' イベントを発火させる
    document.documentElement.click();
    sendResponse({ status: "clicked" });
  }
});

// スクリプトが注入されたときにメインの準備関数を実行
prepareFullscreen();
