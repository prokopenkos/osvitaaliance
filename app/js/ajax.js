var ajax_send = (function(){
    var setUpListners = function() {
        $('#contact_form_send').on('submit', _send_questsion_form);
    };
    _log = function (e) {
        e.preventDefault();
        console.log("yes click");
    },

    //Функция добавления объявления о продаже
        _send_questsion_form = function(){
            var form = $("#contact_form_send"),
                url = 'send.php',
                defObject = _ajaxForm(form,url);
            defObject.done(function(ans){
                if(ans.error===0){
                    console.log("ITS OK")
                }
                else{
                   console.log(ans.error);
                }
            })
        },
    //Универсальная функция ajax
        _ajaxForm =   function (form,url){
            var data = form.serialize();
            defObj = $.ajax({
                type: "POST",
                url: url,
                data: data
            }).fail(function(ans){
                console.log('Проблемы на стороне сервера');

            });
            return defObj;
        };
    return{
        init : function(){
            setUpListners();

        }
    }
}());

$(document).ready(function(){
    ajax_send.init();

});