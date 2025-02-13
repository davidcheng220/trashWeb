
// 取得桶子下拉選單元素
const dropdown = document.getElementById('bins');

// 取得時間下拉選單元素
const selectElement = document.getElementById('subcategory');


var displayText = document.getElementById("trash_usage_state");
// 顯示選中的選項文字
// alert('選中的選項是：' + selectedOptionText);

const apiUrl = `https://esggab8dhe.ap-northeast-1.awsapprunner.com/for_general_is_full`;  // 請替換為實際 API 路徑
// 監聽下拉選單的變動
document.getElementById('subcategory').addEventListener('change', function() {
    // 取得桶子選中的選項的文字
    const selectedOptionText = dropdown.value;
    // 取得時間選中的選項的文字
    const selectedOptionText2 = selectElement.value;
    // 檢查是否選擇了有效的項目
    if (selectedOptionText2) {
        // 顯示正在加載的提示
        displayText.innerHTML = '正在加載資料...';
    // 根據選擇的項目，發送請求到 API，並將選中的值作為參數傳遞
    const url = `${apiUrl}?bin1=${selectedOptionText}&time=${selectedOptionText2}`;
    fetch(url)
    .then(response => response.json())  // 解析 JSON 回應
    .then(data => {
        displayText.innerHTML = data.result;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    }
});






