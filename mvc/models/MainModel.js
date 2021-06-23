const MainModel = function(){
    // 메인이 되는 대표 모델을 불러온다
    const model = require('./Model');

    const get_department_value_ = function(data,callback){
        model.run("SELECT * FROM hr_department",data,callback);
    }

    const get_position_value_ = function(data,callback){
        model.run("SELECT * FROM hr_position",data,callback);
    }

    const get_list_ = function(data,callback){
        // Model을 통해 sql구문을 전달하고 DB에 명령을 내린다
        model.run("SELECT hr.*, p.*, d.* FROM hr hr \
        JOIN hr_position p \
        ON hr.hr_position = p.position_idx \
        JOIN hr_department d \
        ON hr.hr_department = d.department_idx", data, callback);
    };

    const create_new_user_ = function(data,callback) {
        // hr_memo 컬럼 추가
        model.run("INSERT hr (hr_name, hr_department, hr_position, hr_memo) \
        VALUES (:hr_name, :hr_department, :hr_position, :hr_memo)", data,callback);
    }

    return {
        getDepartmentValue: function(data,callback){
            get_department_value_(data,callback);
        },
        getPostionValue: function(data,callback){
            get_position_value_(data,callback)
        },
        getList: function(data, callback){
            get_list_(data, callback);
        },
        createNewUser: function(data,callback){
            create_new_user_(data,callback);
        }
    }
};

module.exports = MainModel();