function update_bins_Text() {
    // 获取 id 为 dropdown1 的下拉选单
    var selectElement = document.getElementById("bins");
    // 获取选中的文本
    var selectedText = selectElement.options[selectElement.selectedIndex].text;

    // var selectElement = document.getElementById("Location").text;
    // var selectedValue = selectElement.innerHTML;  // 获取选中的值
    // if (selectedOption === "123") {
    //获取 id 为顯示文字
    var displayText = document.getElementById("Location-display");

    displayText.innerHTML = selectedText;
}

function update_subcategory_Text() {
    // 获取 id 为 dropdown1 的下拉选单
    var selectElement = document.getElementById("subcategory");
    // 获取选中的文本
    var selectedText = selectElement.options[selectElement.selectedIndex].text;

    // var selectElement = document.getElementById("Location").text;
    // var selectedValue = selectElement.innerHTML;  // 获取选中的值
    // if (selectedOption === "123") {
    //获取 id 为顯示文字
    var displayText = document.getElementById("time-display");

    displayText.innerHTML = selectedText;
}