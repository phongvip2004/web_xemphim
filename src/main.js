const path = require('path');
const express = require('express'); // Nạp thư viện Express vào biến `express`
const morgan = require('morgan');

const app = express(); // Khởi tạo một ứng dụng Express

const port = 80; // Xác định cổng mà ứng dụng sẽ chạy (80 là cổng mặc định cho HTTP)

const hbs = require('express-handlebars');
const { request } = require('http');
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


// Serve static files từ thư mục "public"
// Middleware này cho phép Express phục vụ các file tĩnh như CSS, JS, hình ảnh, v.v.
//Khi trình duyệt yêu cầu một file tĩnh (ví dụ: /css/app.css), 
// Express sẽ tìm file đó trong thư mục public và trả về nếu tìm thấy.
app.use(express.static(path.join(__dirname, 'public')));
// Corrected views path
app.set('views', path.join(__dirname, 'resources/views'));
console.log(__dirname);

// Định nghĩa một route cho trang chủ ('/')


  //request, response = req, res
//request se chua thong tin cua client gui len server
//response se chua thong tin cua server gui ve client

app.get('/', (req, res) => { // Đây là 1 arrow function


  res.render('home');// di den file home.hbs sau do apppend vao {{{body}}} trong file main.hbs
});
app.get('/news', (req, res) => { // Đây là 1 arrow function



  res.render('news'); //tra ve file news.hbs cho client
  // render la ham cua express-handlebars
});

// Lắng nghe trên cổng đã xác định và chạy server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // In thông báo khi server chạy thành công
});
