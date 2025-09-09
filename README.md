# Warp2SubScreen-ChromeExt

## 概要 (Summary)

`Warp2SubScreen` は、現在アクティブなブラウザのタブをサブモニターに瞬時に移動させ、フルスクリーンで表示するためのChrome拡張機能です。動画コンテンツなどを大画面で楽しみたい場合に、ワンクリックで最適な表示環境を構築します。

`Warp2SubScreen` is a Chrome extension that instantly moves the currently active browser tab to your sub-monitor and displays it in fullscreen. With a single click, you can create the optimal viewing environment for enjoying video content on a larger screen.

## 主な機能 (Features)

*   **ワンクリック操作**: 拡張機能のアイコンをクリックするだけで、現在のタブがサブモニターに移動し、フルスクリーン表示になります。
*   **マルチモニター対応**: 2つ以上のモニターが接続されている環境で動作します。プライマリモニターではない最初のモニターをサブモニターとして自動的に検出します。
*   **動画プレイヤーのフルスクリーン化**: YouTubeなどの動画サイトで、動画プレイヤー自体をフルスクリーン表示に切り替えることを試みます。これにより、ブラウザのUIが非表示になり、より没入感のある視聴体験が可能になります。
*   **シンプルなウィンドウ**: アドレスバーなどの不要なUI要素を非表示にしたポップアップウィンドウで表示し、コンテンツに集中できます。

---

*   **One-Click Operation**: Simply click the extension icon to move the current tab to your sub-monitor and switch to fullscreen mode.
*   **Multi-Monitor Support**: Works in environments with two or more connected monitors. It automatically detects the first non-primary monitor as the sub-monitor.
*   **Video Player Fullscreen**: Attempts to switch the video player itself (e.g., on YouTube) to fullscreen mode. This hides the browser's UI for a more immersive viewing experience.
*   **Simplified Window**: Displays the content in a popup window without unnecessary UI elements like the address bar, allowing you to focus on the content.

## 動作の仕組み (How It Works)

1.  ユーザーが拡張機能のアイコンをクリックします。
2.  `background.js` がディスプレイ情報を取得し、サブモニター（プライマリではない最初のモニター）を特定します。
3.  `content.js` を現在のタブに注入し、ページ内の動画プレイヤー要素（`<video>`タグやYouTubeのプレイヤー）を探します。
4.  現在のタブを新しいポップアップウィンドウとして分離し、サブモニターの位置とサイズに合わせて移動させます。
5.  新しいウィンドウをOSレベルでフルスクリーン化します。
6.  `content.js` が動画プレイヤーを見つけていた場合、そのプレイヤー要素をWeb API（Fullscreen API）を使ってフルスクリーン表示にします。

---

1.  The user clicks the extension icon.
2.  The `background.js` script retrieves display information and identifies the sub-monitor (the first non-primary monitor).
3.  The `content.js` script is injected into the current tab to find a video player element (such as a `<video>` tag or a YouTube player).
4.  The current tab is detached into a new popup window and moved to the position and size of the sub-monitor.
5.  The new window is made fullscreen at the OS level.
6.  If `content.js` found a video player, it triggers the player element to enter fullscreen mode using the Web Fullscreen API.