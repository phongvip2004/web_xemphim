const express = require('express') // Nạp thư viện Express vào biến `express`

const app = express() // Khởi tạo một ứng dụng Express

const port = 80; // Xác định cổng mà ứng dụng sẽ chạy (80 là cổng mặc định cho HTTP)

// Định nghĩa một route cho trang chủ ('/')
app.get('/', (req, res) => { //day la 1 arow function
  var a = 5;
    var b = 6;  
    var c = a + b;  
    console.log("Tong cua a va b la: " + c);
    console.log(`ddddd ${a}`);
  res.send('Hello World') // Gửi phản hồi "Hello World!" về trình duyệt
})

// Lắng nghe trên cổng đã xác định và chạy server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // In thông báo khi server chạy thành công
})
