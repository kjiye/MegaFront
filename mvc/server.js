const express = require("express");
const app = express();
const port = 3000;
const router = require('./router');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// 정적 리소스를 관리하는 폴더를 static()으로 지정하면 해당 폴더 경로가 라우터로 인식되지 않고 리소스 파일에 접근할 수 있다
app.use(express.static('public'));

// request객체의 body 데이터를 중첩된 json 객체 형식으로 사용하기 위한 설정
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port, function(error){
    if (error) {
        console.log("에러 발생!", error);
    }
    // console.log(port+"번 포트로 로컬 서버 실행!");
});

// 모듈화된 Router를 호출하면서 express app을 주입시킨다
router(app);



