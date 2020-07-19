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
    el: "#vue4"
});