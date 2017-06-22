<?php
if($_SERVER['REQUEST_METHOD'] == "POST"){
    if (filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL)){
        mail('giperion.od@gmail.com','Вопрос от сайта'.$_POST['email'],''.$_POST['email'].$_POST['name'].$_POST['subject'].$_POST['message']);
    }
}else{
    echo "TEst mode";
    if(mail('web.prokopenko@gmail.com','subject','message','')) echo "TEST OK";
}