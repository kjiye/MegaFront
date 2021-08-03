const settings = {
  // 각자 사용하는 DB 정보로 교체하기
  connect: {
    host: "localhost",
    port: "3306",
    user: "정보변경",
    password: "정보변경",
    database: "정보변경",
    connectionLimit: 50,
    multipleStatements: true,
  },
};
module.exports = settings;
