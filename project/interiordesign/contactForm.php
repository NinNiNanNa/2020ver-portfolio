<?
	
	$irum = $_POST['irum'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$sns = $_POST['message'];
	
	//리턴내용
	echo '<p>'.'이름: '.$irum.' 메일: '.$email.' 폰번호: '.$phone.' 메세지: '.$sns.'</p>';
	
?>