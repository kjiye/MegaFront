const { render } = require('ejs');

const DetailController = function(){

    const test_model = require('../models/TestModel');

    const detailViewRender = function(req,res){
        
        const getData = function(){
            return new Promise(function(resolve){
                console.log('주소를 통해 넘겨받은 글 번호 :', req.params.index);
                // 배열 데이터에서 req객체를 통해 받은 글 번호에 해당하는 것만 꺼내온다
                const array = test_model.testReturnArray();
                // let obj = {};
                // array.forEach(function(v){
                //     if (v.index === parseInt(req.params.index)) {
                //         obj = v;
                //     }
                // });
                const data = array.find(function(v){
                    if (v.index === parseInt(req.params.index)) {
                        return v;
                    }
                });
                resolve(data);
            });
        };

        const renderView = function(data){
            return new Promise(function(){
                res.render('detail', data);
            });
        };

        getData().then(function(data){
            renderView(data);
        });
    };  

    return {
        detailView: function(req,res) {
            detailViewRender(req,res);
        }
    }
};

module.exports = DetailController();