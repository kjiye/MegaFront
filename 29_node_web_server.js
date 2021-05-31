// Node.js 웹 서버를 생성하고 설정할 파일
// 이 파일을 실행해야 서버가 생성 및 실행된다
// ( app.js, server.js )

// console.log("Hello Node.js!");

// require("불러올 패키지명")
const expresss = require("express");
// express를 이용한 웹 애플리케이션을 app이라는 이름으로 생성한다
const app = expresss();
// 생성할 로컬 웹 서버의 포트를 정한다
const port = 3000;

// app.listen(port);
app.listen(port, function(error){
    if (error) {
        console.log("에러발생 !!!! ", error);
    }
    console.log("connected!");
});

app.get("/test", function(req,res){
    console.log(req);
    console.log("클라이언트로부터 호출 받음!!!!");
    res.send("Hello Node.js !!!!");
});
