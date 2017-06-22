<?php
$body = '';

if($_SERVER['REQUEST_METHOD'] == "POST"){
    if (filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL)){
        $body.="Подписка на новости";
        $body.='От: '.$_POST['email']." ";

        mail('giperion.od@gmail.com','Подписка на новости',$body,'');
    }
}