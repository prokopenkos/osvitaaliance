<?php
$body = '';

if($_SERVER['REQUEST_METHOD'] == "POST"){
    if (filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL)){
        $body.="Вопрос с сайта";
        $body.='От: '.$_POST['email']." ";
        $body.="Имя: ".$_POST['name']." ";
        $body.="Тема сообщения: ".$_POST['subject']." ";
        $body.="Cообщение: ".$_POST['message']." ";

        mail('giperion.od@gmail.com','Вопрос с сайта',$body,'');
    }
}