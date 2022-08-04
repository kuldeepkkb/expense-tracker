<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: *');
$conn=mysqli_connect('localhost','root','','expensetracker');
if(!$conn){
    die(mysqli_connect_error());
}

$response='';
if($_SERVER['REQUEST_METHOD']=='POST'){
    $data=json_decode(file_get_contents('php://input'));
    if($data->title=='' OR $data->amount=='' OR $data->date==''){
        $response=['status'=>0,'message'=>'all fields are required'];
        echo json_encode($response);
        die;
    }
    $title=mysqli_real_escape_string($conn,$data->title);
    $amount=mysqli_real_escape_string($conn,$data->amount);
    $date=mysqli_real_escape_string($conn,$data->date);
    $query="INSERT INTO expenses (title,amount,date) values('$title','$amount','$date')";
    $res=mysqli_query($conn,$query);
    if($res){
        $response=['status'=>1,'message'=>'expense recorded successfully'];
    }
    else{
        $response=['status'=>0,'message'=>'something went wrong'];

    }
}

if($_SERVER['REQUEST_METHOD']=='GET'){
    $response_data=array();
    $query="SELECT * from expenses";
    $result=mysqli_query($conn,$query);
    if($result){
    if(mysqli_num_rows($result)){
        while($row=mysqli_fetch_assoc($result)){
            array_push($response_data,['id'=>$row['id'],'title'=>$row['title'],'amount'=>$row['amount'],'date'=>$row['date']]);
            // print_r($row);
        }
        
    }
   }
    else{
        $response=['status'=>0,'message'=>'something went wrong'];
    }
    $response=['status'=>1,'data'=>$response_data];
}
echo json_encode($response);


?>