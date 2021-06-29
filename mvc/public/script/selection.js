const Init = function(){

    const show_delete_modal = function(){
        const selected_data = $(this).parent().parent().attr('data-number');
        $('input[name=selected_data]').val(selected_data);
        $('.ui.modal').modal('show');
    };

    const delete_selection_data = function(){
        // 삭제

        // 삭제하고픈 번호 (idx) 가져온다
        // ajax를 이용해서 삭제 처리 controller 호출
        // 호출 결과 (응답 내용)
        // 성공일 때 location.reload(); --> 새로고침
        // 실패일 때 alert('문제가 발생...');
    };

    // 추가하기 (등록하기)


    return {
        event : function(){
            $('.ui.button.delete').on('click', show_delete_modal);
            $('#delete_btn').on('click', delete_selection_data);
        },
    }
};

$(document).ready(function(){
    Init().event();
});