const SelectionController = function(){

    const main_model = require('../models/MainModel');

    const departmentEditFormRender = function(req,res){
        let data = {};
        // 부서관리 버튼을 누를 시 실행되는 함수
        
        // 부서리스트
        const getDepartmentList = function(){
            return new Promise(function(resolve){
                main_model.getDepartmentValue({}, function(err,rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.list = rows;
                        resolve();
                    }
                });
            });
        };

        // 부서관리 페이지로 이동
        const view = function(){
            data.page_type = 'department';
            res.render('selection', data);
        };

        getDepartmentList().then(function(){
            return view();
        });
    };

    const positionEditFormRender = function(req,res){
        let data = {};
        // 직급관리 버튼을 누를 시 실행되는 함수

        // 직급리스트
        const getPositionList = function(){
            return new Promise(function(resolve){
                main_model.getPostionValue({}, function(err,rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.list = rows;
                        resolve();
                    }
                });
            });
        }
        // 직급관리 페이지로 이동
        const view = function(){
            data.page_type = 'position';
            res.render('selection', data);
        }

        getPositionList().then(function(){
            return view();
        });
    };

    return {
        departmentEditFormView : function(req,res){
            departmentEditFormRender(req,res);
        },
        positionEditFormView : function(req,res){
            positionEditFormRender(req,res);
        },
    }
};

module.exports = SelectionController();