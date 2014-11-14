// JavaScript Document
var db;
var dbCreated = false;

document.addEventListener("deviceready", onDeviceReady, false);
 
function onDeviceReady() {
  var fcin = document.getElementById("fcin").value;
 var fname = document.getElementById("fname").value;
 var lname = document.getElementById("lname").value;
 var age = document.getElementById("age").value;
 var tel = document.getElementById("tel").value;
   var adress = document.getElementById("adress").value;
    var code  = document.getElementById("code").value;
	 var email = document.getElementById("email").value;
 var login = document.getElementById("username").value;
 var password = document.getElementById("psw").value;
 
 db = window.openDatabase("GestionClient", "1.0", "GestionClient", 200000);
 if (dbCreated) {
 }
 else
  db.transaction(populateDB, transaction_error, populateDB_success);
}
 
function populateDB(tx) {
 //tx.executeSql('DROP TABLE IF EXISTS Registration');
 var sql = "CREATE TABLE IF NOT EXISTS Client ( "
   + "cin INTEGER, "
   + "prenom VARCHAR(50), " + "nom VARCHAR(50), "
   + "age INTEGER," + "telephone INTEGER,"+ "adress VARCHAR(50)," + "code INTEGER,  " + "email VARCHAR(50),  " + "login VARCHAR(50),"  + "password VARCHAR(200))";
 tx.executeSql(sql);
 var cin = document.getElementById("fcin").value;
 var prenom = document.getElementById("fname").value;
 var nom =  document.getElementById("lname").value;
 var age = document.getElementById("age").value;
  var tel = document.getElementById("tel").value;
   var adress = document.getElementById("adress").value;
    var code  = document.getElementById("code").value;
	 var email = document.getElementById("email").value;
 var login =document.getElementById("username").value;
 var pwrd = document.getElementById("psw").value;
 tx.executeSql("INSERT INTO Client (cin,prenom,nom,age,telephone,adress,code,email,login,password) VALUES ('"+ cin +"','"+ prenom +"','"+ nom +"' , "+ age+", '"+ tel +"', '"+ adress +"', '"+ code +"','"+ email +"', '"+ login +"','"+ pwrd +"' )");
  
}
 
function transaction_error(tx, error) {
 alert("Database Error: " + error);
}
   
function populateDB_success() {
 dbCreated = true;
  
 // where you want to move
 alert("bonne inscription");
  window.location="file:///android_asset/www/login.html";
}