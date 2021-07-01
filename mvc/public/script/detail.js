const Init = function(){

    const show_delete_modal = function(){
        $('.ui.basic.modal').modal('show');
    };

    const delete_user = function(){
        // 실제 데이터 삭제 처리 기능 작성
        let hr_idx = $('.ui.grid').attr('data-number');
        alert(hr_idx);
        // 1) 어떤 데이터를 삭제할 것인지 idx 값을 구한다
        // 2) ajax를 이용해서 삭제 처리를 수행하는 controller에 연결 (http 통신)
        // 3) http통신을 통한 처리 결과를 받아서
        // 4) 삭제 처리 성공일 시 /main 호출 (메인리스트 화면으로 이동)
        // 5) 삭제 처리 실패일 시 alert()으로 문제가 발생했다고 안내

        // /detail/delete/:hr_idx
        $.ajax({
            url: '/detail/delete/'+hr_idx,
            method: 'DELETE',
            dataType: 'json',
            success: function(data){
                // http통신 (삭제 요청) 결과 처리
                console.log('삭제 요청에 대한 응답 결과 ', data);
                if (data.result) {
                    // 메인리스트로 이동
                    location.href = '/main';
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

    return {
        event : function(){
            $('#trash_icon').on('click', show_delete_modal);
            $('#delete_btn').on('click', delete_user);
        },
    }
};

$(document).ready(function(){
    Init().event();
});