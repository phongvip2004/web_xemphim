const path = require('path');
const express = require('express'); // Nạp thư viện Express vào biến `express`
const morgan = require('morgan');

const app = express(); // Khởi tạo một ứng dụng Express

const port = 80; // Xác định cổng mà ứng dụng sẽ chạy (80 là cổng mặc định cho HTTP)

const hbs = require('express-handlebars');
const { request } = require('http');
app.use(express.urlencoded({
  extended: true
})); // Middleware cho phép đọc dữ liệu từ form data
app.use(express.json()); // Middleware cho phép đọc dữ liệu từ javascript  tu client gui len server

//xlmhttprequest, fetch, axios, superagent,jquery,aJax co the gui du lieu tu client len server


// Cấu hình cho express-handlebars
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
// app.use(morgan('combined'));    


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



//app.get dinh nghia cho phuong thuc get

app.get('/', (req, res) => { // Đây là 1 arrow function


  res.render('home');// di den file home.hbs sau do apppend vao {{{body}}} trong file main.hbs
});
app.get('/news', (req, res) => { // Đây là 1 arrow function
  console.log(req.query);



  res.render('news'); //tra ve file news.hbs cho client
  // render la ham cua express-handlebars
});

app.get('/search', (req, res) => { // Đây là 1 arrow function



  res.render('search'); //tra ve file news.hbs cho client (hay con goi ra rennder ra ui  search)
  console.log(req.query);
  // render la ham cua express-handlebars
});


//app.post dinh nghia cho phuong thuc post


app.post('/news', (req, res) => { // Đây là 1 arrow function
  
  res.send("gui thanh cong len sever"); //tra ve trang news bang chuoi trong send cho client
  console.log(req.body);
  //phuong thuc post se khong hien thi tren url va ko luu vao query
})




// Lắng nghe trên cổng đã xác định và chạy server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // In thông báo khi server chạy thành công
});
