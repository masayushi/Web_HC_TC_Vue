console.log("我是JS");

// 定義渲染區域
// 變數 vue1 = new Vue(); - 要新增一個 Vue 物件
// el 指定元素 "選取器"
// data 資料
// { 物件名稱: 物件值 }
var vue1 = new Vue({
    el: "#vue1",
    data: {
        text: "哈囉，我是 Vue !!!",
        a: 999,
        b: 3
    }
});

var vue2 = new Vue({
    el: "#vue2",
    data: {
        aligment: "center",
        yahoo: "https://tw.yahoo.com/"
    }
});

var vue3 = new Vue({
    el: "#vue3",
    data: {
        // 布林值
        test: true,
        activity: false
    }
});

var vue4 = new Vue({
    el: "#vue4",
    data: {
        products: [
            {name: "奶茶", price: 45},
            {name: "紅茶", price: 40},
            {name: "綠茶", price: 40},
            {name: "青茶", price: 35},
            {name: "咖啡", price: 70}
        ]
    }
});

// methods 定義函式
// 函式名稱: function() { 函式內容 }
var vue5 = new Vue({
    el: "#vue5",
    data : {
        text: "",
        count: 0,
        msg: ""
    },
    methods: {
        show: function() {
            this.text = "點到了~"
        },
        add: function() {
            this.count++;
        },
        sub: function () {
            this.count--;
        },
        change: function() {
            this.msg = "點到了!!!"
        }
    }
});

var vue6 = new Vue({
    el: "#vue6",
    data: {
        name: ""
    }
});

// 定義元件
// :元件名稱"({元件內容})
Vue.component("test-a",{
    template:"<h2>這是測試元件</h2>"
})

var vue7 = new Vue({
    el: "#vue7"
})

// '' 以及 "" 單行HTML時可用
// `` 多行HTML時可用
// 使用多行(`)時必須用一個父元素包覆    

Vue.component("vue-content", {
    template:`<div>
    <h3>標題三</h3>
    <p>段落文字</p>
    <hr>
    </div>
    `
})

var vue8 = new Vue ({
    el:"#vue8"
})

// 元件應用：分頁重複內容 - 導覽列、頁尾
Vue.component("navbar", {
    template: `
    <nav>
    <a href="#">關於我</a>
    <a href="#">作品集</a>
    <a href="#">Logo</a>
    <a href="#">最新消息</a>
    <a href="#">聯絡我</a>
    </nav>
    `
})

var navbar = new Vue({
    el: "#navbar"
})