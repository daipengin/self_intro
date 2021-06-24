var apps = new Vue({
    el: '#apps',
    data: {
        messagee: '初期メッセージ',
        messages: 'コジマのページ',
        list: ['リンゴ', 'バナナ', 'イナゴ'],
        show: true,
        shows: true,
        // オブジェクトデータ
        message: {
            value: 'Hello Vue.js!'
        },
        // 配列データ
        list: ['りんご', 'ばなな', 'いちご'],
        // 別のデータを使用してlistから取り出す要素を動的に
        num: 1
    },
    methods: {
        handleClick: function (event) {
            alert(event.target) // [object HTMLButtonElement]     
        }
    },
    created: function () {
        // このインスタンスの作成＆初期化が終わったらすぐ
        console.log('created')
    }
       
})


