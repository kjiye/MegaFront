const e = require('express');

const MainController = function (){

    // 호출에 맞는 기능을 관리하는 함수
    // 모델을 연결하는 파트

    const test_model = require('../models/TestModel');
    const main_model = require('../models/MainModel');

    const mainViewRender = function(req,res){
        let data = {};
        
        // 부서 리스트 불러오기
        const getDepartmentList = function(){
            return new Promise(function(resolve) {
                main_model.getDepartmentValue({}, function(err,rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.departments = rows;
                        resolve();
                    }
                });
            });
        }

        // 직급 리스트 불러오기
        const getPositionList = function(){
            return new Promise(function(resolve) {
                main_model.getPostionValue({}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.positions = rows;
                        resolve();
                    }
                });
            });
        }

        // 모델을 통해 데이터베이스에 저장된 리스트를 가져온다
        const getList = function(){
            return new Promise(function(resolve){
                // MainModel의 getList를 호출
                main_model.getList({}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        console.log("db에서 꺼내온 리스트 데이터 : ", rows);
                        data.list = rows;
                        resolve();
                    }
                });
            });
        };
        // 화면페이지로 데이터베이스에서 꺼내온 데이터를 보낸다 
        const view = function(){
            res.render('home', data);
        };

        getDepartmentList().then(function(){
            return getPositionList();
        }).then(function(){
            return getList();
        }).then(function(){
            return view();
        });
    }

    // 자바스크립트 promise
    // 함수 실행 흐름
    // 비동기
    // 특정 함수의 실행이 끝난 '후'에 지정한 다음 함수를 실행
        /*
            new Promise : 대기 (pending)
            resolve : 이행 (fulfilled)
            reject : 실패 (rejected)
        */
    const addUserProcess = function(req,res){
        const dataLog = () => {
            return new Promise(function(resolve, reject){
                // 기능 코드
                // POST방식으로 전송한 데이터는 req객체 안의 body객체 안에 담겨있다
                console.log('view를 통해서 사용자가 입력한 이름', req.body.name);
                console.log('view를 통해서 사용자가 입력한 부서', req.body.department);
                console.log('view를 통해서 사용자가 입력한 직급', req.body.position);

                resolve();
            });        
        }
        const renderView = () => {
            return new Promise(function(){
                res.redirect('/main');
            });
        }
        dataLog().then(function(){
            return renderView();
        });
    };

    const createNewUser = function(req,res){
        console.log("client로부터 넘겨받은 데이터 ", req.body);
        main_model.createNewUser(req.body, function(err, rows){
            if (err) {
                console.log(err);
                throw err;
            } else {
                res.redirect('/main');
            }
        });
    }

    return {
        mainView: function(req,res){
            mainViewRender(req,res);
        },
        addUser: function(req,res) {
            addUserProcess(req,res);
        },
        createNewUser : function(req,res){
            createNewUser(req,res)
        }
    }
};

module.exports = MainController();