const DetailModel = function(){

    const model = require('./Model');

    const get_detail_data_ = function(data,callback){
        model.run("SELECT hr.*, p.*, d.* FROM hr hr \
        JOIN hr_position p \
        ON hr.hr_position = p.position_idx \
        JOIN hr_department d \
        ON hr.hr_department = d.department_idx \
        WHERE hr.hr_idx=:hr_idx",data,callback)
    }

    const delete_user_ = function(data,callback){
        model.run("DELETE FROM hr WHERE hr_idx=:hr_idx", data,callback);
    }

<<<<<<< HEAD
    const update_user_ = function(data,callback){
        model.run('UPDATE hr SET hr_name=:hr_name,\
        hr_department=:hr_department, \
        hr_position=:hr_position, \
        hr_memo=:hr_memo \
        WHERE hr_idx=:hr_idx',data,callback);
    }

=======
>>>>>>> 4ca06485cb4c8886e86791d059c1561f5a960f36
    return {
        getDetailData: function(data,callback){
            get_detail_data_(data,callback);
        },
        deleteUser: function(data, callback){
            delete_user_(data,callback);
<<<<<<< HEAD
        },
        updateUser: function(data,callback){
            update_user_(data,callback);
        },
=======
        }
>>>>>>> 4ca06485cb4c8886e86791d059c1561f5a960f36
    }
};

module.exports = DetailModel();