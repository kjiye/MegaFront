const { getDetailData } = require('../models/DetailModel');

const SelectionController = function(){

    const main_model = require('../models/MainModel');
    const selection_model = require('../models/SelectionModel');

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

    const deleteSelectionData = function(req,res) {
        // model 부서 또는 직급 삭제 기능 함수 호출
        let data = {};

        data.page_type = req.params.page_type;
        // 객체의 키(key)를 동적으로 할당하는 방법
        data[data.page_type+'_idx'] = parseInt(req.body.selected_data);
        
        selection_model.deleteSelectionData(data, function(err, rows){
            if (err) {
                console.log(err);
                res.json({ result : false });
            } else {
                res.json({ result : true });
            }
        });

    };

    const createNewSelectionData = function(req,res){
        let data = {};

        data.page_type = req.params.page_type;
        // department_name / position_name
        data[data.page_type+'_name'] = req.body.input_data;

        selection_model.createNewSelectionData(data, function(err,rows){
            if (err) {
                console.log(err);
                res.json({ result : false });
            } else {
                res.json({ result : true });
            }
        });
    }

    return {
        departmentEditFormView : function(req,res){
            departmentEditFormRender(req,res);
        },
        positionEditFormView : function(req,res){
            positionEditFormRender(req,res);
        },
        deleteSelectionData : function(req,res) {
            deleteSelectionData(req,res);
        },
        createNewSelectionData : function(req,res){
            createNewSelectionData(req,res);
        }
    }
};

module.exports = SelectionController();