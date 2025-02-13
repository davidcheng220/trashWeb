// 取得桶子下拉選單元素
const dropdown_bin6 = document.getElementById('bins');

// 取得時間下拉選單元素
const selectElement6 = document.getElementById('subcategory');

// API回應的URL
const apiUrl6 = "https://zvdtu95zww.ap-northeast-1.awsapprunner.com/general_status"; 

const apiUrl8 = "https://zvdtu95zww.ap-northeast-1.awsapprunner.com/recycle_status";


// 監聽下拉選單的變動
document.getElementById('subcategory').addEventListener('change', function() {
    // 取得桶子選中的選項的文字
    const selectedOptionText_dropdown_bin6 = dropdown_bin6.value;

    // 取得選中項目的完整日期時間
    let selectedDateTime6 = document.getElementById("subcategory").value;

    // 截取年月日部分
    let date_check6 = selectedDateTime6.split(" ")[0];  // 用空格分開並取得第一部分（YYYY-MM-DD）

    // 檢查是否選擇了有效的項目
    if (date_check6) {

        const apiUrl7 = `${apiUrl6}?bin1=${selectedOptionText_dropdown_bin6}&day=${date_check6}`;
        
        const imgElement = document.getElementById("trash");
        imgElement.src = apiUrl7;  // 更新img的src屬性為圖片URL

        const apiUrl9 = `${apiUrl8}?bin1=${selectedOptionText_dropdown_bin6}&day=${date_check6}`;
        
        const imgElement2 = document.getElementById("recycle");
        imgElement2.src = apiUrl9;  // 更新img的src屬性為圖片URL
        
        }
});