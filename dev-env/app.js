/* DOM要素の取得 */
const messageForm = document.getElementById('message-form')
const messageField = document.getElementById('message-field')
const messageList = document.getElementById('message-list')

/* メッセージ一覧 */
let messages = [
    'Hello, World!'
]
alert('test');

/* メッセージ一覧の描画 */
const renderMessageList = (messages) => {

    /* リストを初期化する */
    messageList.innerHTML = ''

    /* メッセージ一覧に格納されている各メッセージをDOMに追加する */
    messages.forEach(message =>{

        /* リスト・アイテム（li）要素の作成 */
        const messageItem = document.createElement('li')

        /* リスト・アイテム要素のコンテンツにメッセージを設定 */
        messageItem.textContent = message

        /* 番号なしリスト（ul）要素の末尾に子要素として追加 */
        messageList.appendChild(messageItem)
    });

}

/* フォーム送信時のイベント・リスナーの登録 */
messageForm.addEventListener('submit', e => {

    /* フォームをサーバーに送信しないためにデフォルト動作を抑制 */
    e.preventDefault()

    /* メッセージ一覧の末尾に入力されたメッセージを追加 */
    messages = [...messages, messageField.value]

    /* メッセージ一覧の再描画を実行 */
    renderMessageList(messages)

    /* 次の入力のためにメッセージ入力欄を初期化 */
    messageField.value = ''

}, false)

/* 初期メッセージ一覧の描画 */
renderMessageList(messages)