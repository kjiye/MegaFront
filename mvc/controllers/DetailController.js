const DetailController = function(){

    const test_model = require('../models/TestModel');
    const detail_model = require('../models/DetailModel');
    const main_model = require('../models/MainModel');

    const detailViewRender = function(req,res){
        console.log(req.params.hr_idx);

        const getData = function(){
            return new Promise(function(resolve){
                detail_model.getDetailData({hr_idx : parseInt(req.params.hr_idx)}, function(err,rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        console.log("detail : ", rows);
                        resolve(rows[0]);
                    }
                });
            });
        };
        const renderView = function(data){
            return new Promise(function(){
                res.render('detail', { data : data });
            });
        };

        getData().then(function(data){
            return renderView(data);
        });
    };

    const deleteUser = function(req,res){
        // 삭제 기능
        // model에 삭제 기능 SQL구문을 가진 함수를 호출
        // model 호출 결과
        const deleting = function(){
            detail_model.deleteUser({hr_idx : parseInt(req.params.hr_idx)}, function(err,rows){
                if (err) {
                    console.log(err);
                    // 실패 시 클라이언트에 응답 (res)
                    // res.json( 처리 결과 정보를 담고 있는 객체 )
                    res.json({ result : false, msg : 'INTERNAL_SERVER_ERROR'});
                } else {
                    console.log(rows);
                    // 성공 시 클라이언트에 응답 (res)
                    res.json({ result : true });
                }
            });
        };
        deleting();
    };

    const detailEditFormRender = function(req,res){
        let data = {};
        // 1) 부서리스트
        // 2) 직급리스트
        // 3) 상세데이터 (hr_idx에 해당하는 데이터)
        // 4) edit.ejs 페이지를 렌더링하면서 데이터를 넘겨준다

        const getDepartmentList = function(){
            return new Promise(function(resolve){
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
        };

        const getPositionList = function(){
            return new Promise(function(resolve){
                main_model.getPostionValue({}, function(err,rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.positions = rows;
                        resolve();
                    }
                });
            });
        };

        const getDetailData = function(){
            return new Promise(function(resolve){
                detail_model.getDetailData({hr_idx : parseInt(req.params.hr_idx)}, function(err,rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.data = rows[0];
                        resolve();
                    }
                });
            });
        };

        const view = function(){
            // edit.ejs 화면으로 이동
            res.render('edit', data);
        };

        getDepartmentList().then(function(){
            return getPositionList();
        }).then(function(){
            return getDetailData();
        }).then(function(){
            return view();
        });
    }

    const updateUser = function(req,res){
        // 클라이언트로부터 넘겨받은 수정데이터를 model에 넘겨 수정 Sql을 실행시킨다
        let data = {};
        
        data = req.body;    // 이름, 부서, 직급, 메모 (form으로 전송한 데이터)
        data.hr_idx = req.params.hr_idx;

        detail_model.updateUser(data, function(err,rows){
            if (err) {
                console.log(err);
                throw err;
            } else {
                res.redirect('/detail/'+data.hr_idx);    //  /detail/3
            }
        });
    };

    return {
        detailView: function(req,res) {
            detailViewRender(req,res);
        },
        detailDeleteUser: function(req,res){
            deleteUser(req,res);
        },
        detailEditFormView: function(req,res){
            detailEditFormRender(req,res);
        },
        detailUpdateUser : function(req,res){
            updateUser(req,res);
        }
    }
};

module.exports = DetailController();