
// 監聽下拉選單的變動
document.getElementById('bins').addEventListener('change', function() {
    // 取得下拉選單元素
    const dropdown = document.getElementById('bins');

    // 取得選中的選項的文字
    const selectedOptionText = dropdown.options[dropdown.selectedIndex].text;

    // 顯示選中的選項文字
    // alert('選中的選項是：' + selectedOptionText);
    
    const apiUrl = `https://imqjtymuns.ap-northeast-1.awsapprunner.com/bin_time?bin1=${selectedOptionText}`;  // 請替換為實際 API 路徑
    // 發送 GET 請求
    fetch(apiUrl)
    .then(response => response.json())  // 解析 JSON 回應
    .then(data => {
        // 取得下拉選單元素
        const selectElement = document.getElementById('subcategory');
        // 清空第二個下拉選單
        selectElement.innerHTML = '<option value="">請選擇時間</option>';
        // 檢查回傳資料是否包含 identify_time
        if (data.identify_time && Array.isArray(data.identify_time)) {
        // 遍歷 identify_time 陣列，並將時間中的 T 替換為空格
        data.identify_time.forEach(item => {
            // 替換 T 為空格
            const formattedTime = item.replace('T', ' ');

            // 創建 <option> 元素
            const option = document.createElement('option');
            option.value = formattedTime;  // 設定選項的 value
            option.textContent = formattedTime;  // 設定選項顯示的文字
            selectElement.appendChild(option);  // 將選項加入下拉選單
        });
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
});






