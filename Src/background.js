// 拡張機能の状態を管理する変数
const warpedTabs = new Map(); // { tabId: { originalWindowId, originalIndex } }

chrome.action.onClicked.addListener(async (currentTab) => {
  try {
    // 最初にcontent scriptを注入して、動画プレイヤーの有無を確認し、
    // フルスクリーン化の準備をさせる
    const injectionResults = await chrome.scripting.executeScript({
      target: { tabId: currentTab.id },
      files: ['content.js']
    });

    // 1. 接続されているディスプレイ情報を取得
    const displays = await chrome.system.display.getInfo();

    // 2. 2つ以上のモニターが存在するかチェック
    if (displays.length < 2) {
      console.log("サブモニターが見つかりませんでした。");
      // ここでユーザーに通知する処理を追加することも可能です。
      // 例: chrome.notifications.create(...)
      return;
    }

    // 3. サブモニターを取得 (isPrimaryがfalseの最初のディスプレイ)
    const subScreen = displays.find(display => !display.isPrimary);

    if (!subScreen) {
      console.log("サブモニターを特定できませんでした。");
      return;
    }

    // 4. 現在のタブを新しいウィンドウとして分離
    const newWindow = await chrome.windows.create({
      tabId: currentTab.id,
      // state: 'normal' を指定して、フルスクリーン化する前に位置とサイズを設定
      left: subScreen.bounds.left,
      top: subScreen.bounds.top,
      width: subScreen.bounds.width,
      height: subScreen.bounds.height,
      state: 'normal', // 'fullscreen' にする前に 'normal' で作成
      type: 'popup' // アドレスバーなどがないシンプルなウィンドウ
    });

    if (!newWindow || !newWindow.id) {
        console.error("新しいウィンドウの作成に失敗しました。");
        return;
    }

    // 5. 新しいウィンドウをフルスクリーンにする
    // 少し待機時間を設けることで、ウィンドウの移動とフルスクリーン化が確実に行われるようにします。
    setTimeout(async () => {
      await chrome.windows.update(newWindow.id, {
        state: 'fullscreen'
      });

      // content.jsが動画プレイヤーを見つけていれば、フルスクリーン化を実行させる
      // injectionResults[0].result は content.js から返された値
      if (injectionResults && injectionResults[0].result === true) {
          // ウィンドウのフルスクリーン化を待ってから実行
          setTimeout(() => {
              if (newWindow.tabs && newWindow.tabs[0].id) {
                  chrome.tabs.sendMessage(newWindow.tabs[0].id, { action: "triggerFullscreen" });
              }
          }, 500);
      }

    }, 200); // 200ミリ秒の待機

  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
});