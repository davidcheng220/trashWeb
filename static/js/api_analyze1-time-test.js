
// 監聽下拉選單的變動
document.getElementById('bins').addEventListener('change', function() {
    // 取得下拉選單元素
    const dropdown = document.getElementById('bins');

    // 取得選中的選項的文字
    const selectedOptionText = dropdown.options[dropdown.selectedIndex].text;

    // 顯示選中的選項文字
    alert('選中的選項是：' + selectedOptionText);
});
