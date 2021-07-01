const SelectionModel = function(){

    const model = require('./Model');

    const delete_selection_data_ = function(data,callback){
        //{ page_type : 'position', position_idx : 3 }
        //{ page_type : 'department', department_idx : 3 }
        let table = 'hr_'+data.page_type;
        let col = data.page_type+'_idx';
        let val = ":"+col;   

        // delete from hr_position where position_idx=:position_idx
        // delete from hr_department where department_idx=:department_idx
        model.run("DELETE FROM "+table+" WHERE "+col+"="+val, data,callback);
    };

    const create_new_selection_data_ = function(data,callback){
        // { page_type : 'position', position_name : "인턴" }
        let table = 'hr_'+data.page_type;
        let col = data.page_type+'_name';
        let val = ':'+col;

        // insert into hr_position (position_name) values ("인턴");
        // insert into hr_department (department_name) values ("회계");
        model.run("INSERT INTO "+table+" ("+col+") VALUES ("+val+")",data,callback);
    };
 
    return {
        deleteSelectionData: function(data,callback){
            delete_selection_data_(data,callback);
        },
        createNewSelectionData: function(data,callback){
            create_new_selection_data_(data,callback);
        }
    }
};

module.exports = SelectionModel();