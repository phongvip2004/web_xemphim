const path = require('path');
const express = require('express'); // Nạp thư viện Express vào biến `express`
const morgan = require('morgan');

const app = express(); // Khởi tạo một ứng dụng Express

const port = 80; // Xác định cổng mà ứng dụng sẽ chạy (80 là cổng mặc định cho HTTP)

const hbs = require('express-handlebars');
// Template engine
app.engine('hbs', hbs.engine({
  extname: '.hbs' // Định nghĩa đuôi file
  //Dòng mã khiến ứng dụng tìm kiếm layouts/main.hbs là do cấu hình mặc định của express-handlebars. 
  // Khi bạn sử dụng express-handlebars mà không chỉ định defaultLayout: false hoặc không cấu hình defaultLayout, 
  // nó sẽ mặc định tìm file layouts/main.hbs làm layout chính.
}));
// Set view engine
app.set('view engine', 'hbs');

// HTTP logger
app.use(morgan('combined'));

// Corrected views path
app.set('views', path.join(__dirname, 'resources/views'));
console.log(__dirname);

// Định nghĩa một route cho trang chủ ('/')
app.get('/', (req, res) => { // Đây là 1 arrow function
  res.render('home');
});

// Lắng nghe trên cổng đã xác định và chạy server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // In thông báo khi server chạy thành công
});
