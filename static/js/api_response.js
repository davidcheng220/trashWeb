// 讀取 localStorage 中儲存的資料
const result_photo= JSON.parse(localStorage.getItem('photoData'));
const result= JSON.parse(localStorage.getItem('apiResult'));

const resultDiv = document.getElementById('category');
const resultDiv2 = document.getElementById('result');
const resultDiv3 = document.getElementById('photo');
const resultDiv4 = document.getElementById('date');
const resultDiv5 = document.getElementById('time');

// 顯示結果
if (result) {
    let class_name = result.class_name;
    let recycle = result.recycle;
    let date = result.date;
    let time = result.time;

    // let resultDiv = document.getElementById('category')
    resultDiv.innerHTML = class_name;
    resultDiv2.innerHTML = recycle;
    resultDiv3.src = result_photo.file;
    resultDiv4.innerHTML = date;
    resultDiv5.innerHTML = time;

} else {
    resultDiv.innerHTML = '<p>無法顯示結果，請重試。</p>';
}