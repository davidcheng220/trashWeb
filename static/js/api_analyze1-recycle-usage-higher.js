// 取得時間下拉選單元素
const selectElement4 = document.getElementById('subcategory');


var displayText4 = document.getElementById("recycle_usage_higher");
// 顯示選中的選項文字
// alert('選中的選項是：' + selectedOptionText);

const apiUrl4 = `https://imqjtymuns.ap-northeast-1.awsapprunner.com/for_recycle_others_time`;  // 請替換為實際 API 路徑
// 監聽下拉選單的變動
document.getElementById('subcategory').addEventListener('change', function() {
    // 取得選中項目的完整日期時間
    let selectedDateTime2 = document.getElementById("subcategory").value;

    // 截取年月日部分
    let date_check2 = selectedDateTime2.split(" ")[0];  // 用空格分開並取得第一部分（YYYY-MM-DD）
    // 檢查是否選擇了有效的項目
    if (date_check2) {
        // 顯示正在加載的提示
        displayText4.innerHTML = '正在加載資料...';
    // 根據選擇的項目，發送請求到 API，並將選中的值作為參數傳遞
    const url3 = `${apiUrl4}?day=${date_check2}`;
    fetch(url3)
    .then(response => response.json())  // 解析 JSON 回應
    .then(data => {
        if (data.result[0] === null){
            displayText4.innerHTML = '無尖峰時刻';
        }else{
            displayText4.innerHTML = data.result;
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    }
});






