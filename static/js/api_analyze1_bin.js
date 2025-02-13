document.addEventListener("DOMContentLoaded", function() {
    // 假設 API URL
    const apiUrl = 'https://imqjtymuns.ap-northeast-1.awsapprunner.com/get_location';  // 請替換為實際 API 路徑

    // 發送請求並處理回傳資料
    fetch(apiUrl)
    .then(response => response.json())  // 解析 JSON 資料
    .then(data => {
        console.log(data);  // 確認回傳資料結構
        if (data && data.result && Array.isArray(data.result)) {
            const dropdown = document.getElementById('bins');
            // 遍歷資料並創建選項
            data.result.forEach(item => {
                const option = document.createElement('option');
                option.value = item.bins;  // 使用 "bins" 作為選項的值
                option.textContent = item.bins;  // 顯示 "bins" 作為選項文字
                dropdown.appendChild(option);  // 把選項加到下拉選單
            });
        } else {
            console.error('資料格式錯誤，找不到 result 屬性');
        }
    })
    .catch(error => console.error('錯誤:', error));  // 捕捉錯誤
});