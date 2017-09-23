var ajax_send = (function(){
    var setUpListners = function() {
        $('#contact_form_send').on('submit', _send_questsion_form);
        $('#subscribe_form_send').on('submit', _send_subscribe_form);
    };

    _send_subscribe_form = function(e){
        e.preventDefault();
        var form = $("#subscribe_form_send"),
            url = 'subscribe.php',
            defObject = _ajaxForm(form,url);
        defObject.done(function(ans){
            if(ans.error===0){
                $('#send_ok').addClass("display_y");
            }
            else{
                $('#send_ok').addClass("display_y");
            }
        })
    },
        //Универсальная фу
        _send_questsion_form = function(e){
            e.preventDefault();
            var form = $("#contact_form_send"),
                url = 'send.php',
                defObject = _ajaxForm(form,url);
            defObject.done(function(ans){
                if(ans.error===0){
                    $('#message_ok').addClass("display_y");
                }
                else{
                    $('#message_ok').addClass("display_y");
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
                console.log(ans.error+' Проблемы на стороне сервера');

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