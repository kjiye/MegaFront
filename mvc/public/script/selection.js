const Init = function(){

    const show_delete_modal = function(){
        const selected_data = $(this).parent().parent().attr('data-number');
        $('input[name=selected_data]').val(selected_data);
        $('.ui.modal').modal('show');
    };

    const delete_selection_data = function(){
        const page_type = $('input[name=page_type]').val();
        const selected_data = $('input[name=selected_data]').val();

        $.ajax({
            url: '/selection/delete/'+page_type,
            method: 'DELETE',
            data: { selected_data : selected_data },
            dataType: 'json',
            success: function(data){
                // http통신 (삭제 요청) 결과 처리
                console.log('삭제 요청에 대한 응답 결과 ', data);
                if (data.result) {
                    // 현재 페이지 새로고침
                    location.reload();
                } else {
                    alert('문제가 발생했습니다. 잠시 후에 다시 시도해 주세요.');
                }
            },
            error: function(err){
                console.log('에러 발생 ', err);
                alert('문제가 발생했습니다. 잠시 후에 다시 시도해 주세요.');
            }
        });
    };

    // 추가하기 (등록하기)
    const create_new_selection_data = function(){
        const page_type = $('input[name=page_type]').val();
        const input_data = $('input[name=name]').val().trim();
        console.log(page_type);
        console.log(input_data);

        if (input_data.length > 0) {
            $.ajax({
                url: '/selection/add/'+page_type,
                method: 'POST',
                data: { input_data : input_data },
                dataType: 'json',
                success: function(data){
                    // 등록 성공 시 새로고침
                    // 등록 실패 시 경고창
                    if (data.result) {
                        location.reload();
                    } else {
                        alert('문제가 발생했습니다. 잠시 후에 다시 시도해 주세요.');
                    }
                },
                error: function(err){
                    console.log('에러 발생 ', err);
                    alert('문제가 발생했습니다. 잠시 후에 다시 시도해 주세요.');
                }
            });
        } else {
            alert('추가할 내용을 입력해 주세요');
        }

    };

    return {
        event : function(){
            $('.ui.button.delete').on('click', show_delete_modal);
            $('#delete_btn').on('click', delete_selection_data);
            $('.ui.button.add').on('click', create_new_selection_data);
        },
    }
};

$(document).ready(function(){
    Init().event();
});