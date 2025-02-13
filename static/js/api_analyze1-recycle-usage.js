// 取得桶子下拉選單元素
const dropdown_bin = document.getElementById('bins');

// 取得時間下拉選單元素
const selectElement_subcategory = document.getElementById('subcategory');


var displayText_recycle_usage_state = document.getElementById("recycle_usage_state");
// 顯示選中的選項文字
// alert('選中的選項是：' + selectedOptionText);

const apiUrl_recycle = `https://esggab8dhe.ap-northeast-1.awsapprunner.com/for_recycle_is_full`;  // 請替換為實際 API 路徑
// 監聽下拉選單的變動
document.getElementById('subcategory').addEventListener('change', function() {
    // 取得桶子選中的選項的文字
    const selectedOptionText_dropdown_bin = dropdown_bin.value;
    // 取得時間選中的選項的文字
    const selectedOptionText2_selectElement_subcategory = selectElement_subcategory.value;
    // 檢查是否選擇了有效的項目
    if (selectedOptionText2_selectElement_subcategory) {
        // 顯示正在加載的提示
        displayText_recycle_usage_state.innerHTML = '正在加載資料...';
    // 根據選擇的項目，發送請求到 API，並將選中的值作為參數傳遞
    const url = `${apiUrl_recycle}?bin1=${selectedOptionText_dropdown_bin}&time=${selectedOptionText2_selectElement_subcategory}`;
    fetch(url)
    .then(response => response.json())  // 解析 JSON 回應
    .then(data => {
        displayText_recycle_usage_state.innerHTML = data.result;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    }
});






