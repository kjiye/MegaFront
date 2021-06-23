const DetailController = function(){

    const test_model = require('../models/TestModel');
    const detail_model = require('../models/DetailModel');

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

    return {
        detailView: function(req,res) {
            detailViewRender(req,res);
        }
    }
};

module.exports = DetailController();