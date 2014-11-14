// JavaScript Document
var db;
var dbCreated = false;
 

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
 db = window.openDatabase("GestionClient", "1.0", "GestionClient", 200000);
 if (dbCreated)
  {
	 // function (tx) {
     //createbd(tx) ;
	  //}
	  db.transaction(createbd,transaction_error);
  }
  
 else{
 db.transaction(getregistdata, transaction_error);
 }
}
 function createbd(tx) {
 //tx.executeSql('DROP TABLE IF EXISTS Registration');
 var sql = "CREATE TABLE IF NOT EXISTS Client ( "
   + "cin INTEGER, "
   + "prenom VARCHAR(50), " + "nom VARCHAR(50), "
   + "age INTEGER," + "telephone INTEGER,"+ "adress VARCHAR(50)," + "code INTEGER,  " + "email VARCHAR(50),  " + "login VARCHAR(50),"  + "password VARCHAR(200))";
 tx.executeSql(sql);
  tx.executeSql('INSERT INTO Client (cin,prenom,nom,age,telephone,adress,code,email,login,password) VALUES (07552266,"admin","admin" , 14,263665,"18 rue tunis ", 20863,"admin@gmail.com	", "admin","admin")');
  
 
 }
function getregistdata(tx){
   tx.executeSql('INSERT INTO Client (cin,prenom,nom,age,telephone,adress,code,email,login,password) VALUES (07552266,"admin","admin" , 14,263665,"18 rue tunis ", 20863,"admin@gmail.com	", "admin","admin")');
  
  var sql = "select login, password from Client";
  tx.executeSql(sql, [], getlogin_success);
}
 
function transaction_error(tx, error) {
 alert("Database Error: " + error);
}
 
function getlogin_success(tx, results){
   var len = results.rows.length;
   for (var i=0; i< len; i++) {  
    var employee = results.rows.item(i);
    var login=document. getElementById("username").value;
    var password=document. getElementById("psw").value;
    var uname=employee.login;
    var pasw=employee.password;
   var status ;
   if (login=="admin" && password=="admin") {
   window.location = "tableclient.html";
   status=0;
   }
	else if(login==uname && password==pasw){
		  window.location = "client.html";
     alert("bienvenue");
      status=0;
   //  break;
    }
    else{
    
         status=1;
     }
   }
    
   if(status==1)
    {
       alert("login failed");
    }
}