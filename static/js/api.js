// 獲取 HTML 元素
const fileInput = document.getElementById('file');
const uploadButton = document.getElementById('uploadButton');

// 假設這是你要上傳圖片的 API URL
const apiUrl = 'https://imqjtymuns.ap-northeast-1.awsapprunner.com/gcp-llm/';


document.getElementById('file').addEventListener('change', function(event) {
    // 確保用戶選擇了一張圖片
    const file = event.target.files[0];
    // 檢查是否有選擇文件
    if (!file) {
        alert('請選擇一張照片');
        return;
    }
    
    if (file) {
        // 顯示確認對話框
        const isConfirmed = window.confirm("圖片上傳成功！");

        // 用戶按下 OK 時，發送 API 請求
        if (isConfirmed) {
            // 建立 FormData 來傳遞文件
            const formData = new FormData();
            formData.append('file', file); // 'file' 是 API 端點預期的參數名稱
            // 使用 fetch 發送 POST 請求
            fetch(apiUrl, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json()) // 轉換回應為 JSON 格式
            .then(data => {
                if (file){
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const result = {
                            'file': e.target.result  // 將 base64 字串儲存到物件中
                        };

                        // 儲存到 localStorage
                        localStorage.setItem('photoData', JSON.stringify(result));
                    };
                    reader.readAsDataURL(file);  // 讀取檔案並轉換為 base64 字串
                    // const last_Modified_Date = new Date(file.lastModified); // 獲取最後修改時間
                    const now = new Date();
                    const formatted_Date = now.toLocaleDateString(); // 只取得日期
                    const formatted_Time = now.toLocaleTimeString(); // 只取得時間
                    if (data.recycle === true){
                        // 根據 API 回應進行條件處理
                        let result = {
                            'class_name': data.class_name,
                            'recycle': '資源回收',
                            'date':formatted_Date,
                            'time':formatted_Time,
                        };

                        // 使用 localStorage 儲存結果
                        localStorage.setItem('apiResult', JSON.stringify(result));
                        // 導向到頁面 2 顯示結果
                        window.location.href = 'phone_result.html';
                    }else{
                        // 根據 API 回應進行條件處理
                        let result = {
                            'class_name': data.class_name,
                            'recycle': '一般垃圾',
                            'date':formatted_Date,
                            'time':formatted_Time,
                        };

                        // 使用 localStorage 儲存結果
                        localStorage.setItem('apiResult', JSON.stringify(result));

                        // 導向到頁面 2 顯示結果
                        window.location.href = 'phone_result.html';

                    }
                }
            })
            .catch(error => {
                console.error('錯誤發生:', error);
                alert('上傳失敗，請重試。');
            });
        }
    }
});