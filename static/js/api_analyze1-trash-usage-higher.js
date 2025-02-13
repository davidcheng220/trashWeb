// 取得時間下拉選單元素
const selectElement3 = document.getElementById('subcategory');


var displayText3 = document.getElementById("trash_usage_higher");
// 顯示選中的選項文字
// alert('選中的選項是：' + selectedOptionText);

const apiUrl3 = `https://imqjtymuns.ap-northeast-1.awsapprunner.com/for_general_others_time`;  // 請替換為實際 API 路徑
// 監聽下拉選單的變動
document.getElementById('subcategory').addEventListener('change', function() {
    // 取得選中項目的完整日期時間
    let selectedDateTime = document.getElementById("subcategory").value;

    // 截取年月日部分
    let date_check = selectedDateTime.split(" ")[0];  // 用空格分開並取得第一部分（YYYY-MM-DD）
    // 檢查是否選擇了有效的項目
    if (date_check) {
        // 顯示正在加載的提示
        displayText3.innerHTML = '正在加載資料...';
    // 根據選擇的項目，發送請求到 API，並將選中的值作為參數傳遞
    const url2 = `${apiUrl3}?day=${date_check}`;
    fetch(url2)
    .then(response => response.json())  // 解析 JSON 回應
    .then(data => {
        if (data.result[0] === null){
            displayText3.innerHTML = '無尖峰時刻';
        }else{
            displayText3.innerHTML = data.result;
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    }
});






