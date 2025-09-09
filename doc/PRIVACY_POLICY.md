# Privacy Policy for Warp to Sub-Screen

**Last Updated:** 2025-9-9

This Privacy Policy describes how the "Warp to Sub-Screen" Chrome extension (the "Extension") handles your information. Your privacy is important to us, and we are committed to protecting it.

## 1. Information We Do Not Collect

We do not collect, store, use, or share any of your personal information. The Extension is designed to work entirely on your local machine.

*   **No Personal Data:** We do not collect any personally identifiable information, such as your name, email address, or IP address.
*   **No Browsing History:** We do not track your browsing history, the websites you visit, or your search queries.
*   **No Usage Analytics:** We do not use any analytics or tracking services to monitor how you use the Extension.

## 2. Permissions and Their Usage

The Extension requires certain permissions to function. This section explains why each permission is necessary.

*   **`system.display` (Access display information):**
    *   **Purpose:** To get information about your connected monitors.
    *   **Usage:** This permission is used solely to identify your primary and sub-monitors. The Extension needs this information to move the browser window to the correct screen. This data is used only when you activate the Extension and is not stored or transmitted.

*   **`scripting` (Run scripts on the current tab):**
    *   **Purpose:** To inject a content script (`content.js`) into the active tab.
    *   **Usage:** This permission is used to find a video player element (like a `<video>` tag) on the webpage and trigger its fullscreen mode. This script only runs when you click the Extension icon and only performs this specific action.

*   **`host_permissions: ["<all_urls>"]` (Access to all websites):**
    *   **Purpose:** To allow the Extension to work on any website.
    *   **Usage:** This permission is necessary so that you can move a tab to your sub-screen regardless of the website you are on. The Extension does not read the content of any website for any other purpose.

## 3. Data Security

Since we do not collect or store any of your data, there is no risk of your data being lost, stolen, or misused by us. All operations performed by the Extension are confined to your browser on your computer.

## 4. Changes to This Privacy Policy

We may update this Privacy Policy in the future if the Extension's functionality changes. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

## 5. Contact Us

If you have any questions about this Privacy Policy, please contact us.

*   **Author:** Nekoerimaki
*   **https://github.com/nekoerimaki**

---

（以下、日本語訳）

# Warp to Sub-Screen プライバシーポリシー

**最終更新日:** 2025年9月9日

このプライバシーポリシーは、Chrome拡張機能「Warp to Sub-Screen」（以下、「本拡張機能」）がユーザーの情報をどのように扱うかについて説明します。

## 1. 収集しない情報

本拡張機能は、いかなる個人情報も収集、保存、使用、共有しません。すべての動作はユーザーのローカルマシン上で完結するように設計されています。

## 2. 権限とその使用目的

本拡張機能は、機能するために以下の権限を要求します。

*   **`system.display` (ディスプレイ情報の取得):**
    *   **目的:** 接続されているモニターの情報を取得するために使用します。これにより、タブを移動させるべきサブモニターを特定します。この情報は機能実行時にのみ使用され、保存や送信はされません。

*   **`scripting` および `host_permissions: ["<all_urls>"]` (全サイトでのスクリプト実行):**
    *   **目的:** あらゆるウェブサイト上で動画プレイヤーを検出し、フルスクリーン化するために使用します。スクリプトは拡張機能のアイコンをクリックした時にのみ実行され、ページの動画要素をフルスクリーンにするという単一の目的のためにのみ動作します。

## 3. お問い合わせ

本プライバシーポリシーに関するご質問は、開発者までお問い合わせください。

*   **開発者:** Nekoerimaki
*   **https://github.com/nekoerimaki**
