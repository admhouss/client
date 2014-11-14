// JavaScript Document
var db;
var dbCreated = false;
 
var nom ;
		var prenom ;
		var cin ;
		var adress;
		var  tel ;
		var  code ;
		var  email ;
		var  login
		var pwrd ;
		 var db = window.openDatabase("GestionClient", "1.0", "GestionClient",20000);   
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
 db = window.openDatabase("GestionClient", "1.0", "GestionClient", 200000);
   
	
 	 cin = document.getElementById("fcin").value;
		 prenom = document.getElementById("fname").value;
		 nom = document.getElementById("lname").value;
 	var   dataTable = document.getElementById("data-table");
		
		
 
 var nom =  document.getElementById("lname").value;
 var age = document.getElementById("age").value;
  var tel = document.getElementById("tel").value;
   var adress = document.getElementById("adress").value;
    var code  = document.getElementById("code").value;
	 var email = document.getElementById("email").value;
 var login =document.getElementById("username").value;
 var pwrd = document.getElementById("psw").value;
 if (dbCreated)
  {
      // created
  }
  
 else{
	 db.transaction(loadFromDB, errorDB, successDB);

 }
}
 
 	function errorDB(error) {
			navigator.notification.alert(error, null, "Got an error " , "OK" );
			}
		function successDB() { 
		
		// navigator.notification.alert("Database is created successfull", null, "information", "ok");
		}
 
 
 
 
 function populateDB(tx) {
		var sql = "CREATE TABLE IF NOT EXISTS Client ( "
   + "cin INTEGER, "
   + "prenom VARCHAR(50), " + "nom VARCHAR(50), "
   + "age INTEGER," + "telephone INTEGER,"+ "adress VARCHAR(50)," + "code INTEGER,  " + "email VARCHAR(50),  " + "login VARCHAR(50),"  + "password VARCHAR(200))";
 tx.executeSql(sql);
		}
 
  function loadFromDB(){
				 
                       	// database = window.openDatabase("StudentDb", "1.0", "student database",20000);    
							var   dataTable = document.getElementById("data-table");
							
               db.transaction(
                                                //function sql statements
                     function (tx){
                           populateDB(tx);
						 
                         tx.executeSql('SELECT * FROM Client',  [], 
								  function(tx, results){
                                     //  var htmlStr=""; 
									var htmlStr =  "<tr><th> Cin</th><th>prenom</th><th>nom</th><th>Delete</th><th>Update</th></tr>";
                                        for(var index=0;index<results.rows.length;index++){
                                     var item = results.rows.item(index);
                                             htmlStr=htmlStr+"<tr></td><td>"+item.cin+"</td><td>"+item.prenom+"</td><td>"+item.nom+"</td><td><button 		onclick=\"deleteclient('"+item.cin+"');\">X</button></td><td><button 		onclick=\"ViewClient('"+item.cin+"');\">V</button></td></tr>";
                                                                                                                
                     }
       						    dataTable.innerHTML=htmlStr;
                         }  ,
        				  function(err){
           alert("Unable to fetch result from Contacts Table");
                               }
             );                                                                                              
                                                        
                                                        },
                                                        //error callback
                                                        function (err){
                                                                alert("error callback "+err.code+" "+err.message);
                                                                
                                                        },
                                                        //success callback
                                                        function (){
                                                                nom="";
                                                                prenom="";
                                                                
                                                        }
                                                        ); 
                                
                                 
                        }
 
 
 
 
 
 
 function deleteclient(cin){
			//var  database = window.openDatabase("StudentDb", "1.0", "student database",20000);
                                db.transaction(
                                                        //function sql statements
                                                        function (tx){
															
                                                                populateDB(tx);
														
                                                                tx.executeSql('Delete FROM Client where cin='+cin);                                                                                             
                                                        
                                                        },
                                                        //error callback
                                                        function (err){
                                                                alert("error callback "+err.code+" "+err.message);
                                                                
                                                        },
                                                        //success callback
                                                        function (err){
                                                                //alert("success callback ");
                                                                loadFromDB();
                                                                
                                                        }
                                                        );
                                
                                 
                        }
		
		
		
 
 
 
 
 
 function ViewClient(cin){
	
                       	// database = window.openDatabase("StudentDb", "1.0", "student database",20000);    
							var   dataTable = document.getElementById("data-table");
							
               db.transaction(
                                            //function sql statements
                     function (tx){
					   
                           populateDB(tx);
					 
                               tx.executeSql('select * FROM Client where cin='+cin,  [], 
								  function(tx, result){
								  
                                       var htmlStr=""; 
								
						
							document.getElementById("fcin").value=cin ;
										
                                        for(var index=0;index<result.rows.length;index++){
                                     var item = result.rows.item(index);
									var name =item.nom;
									alert (name); 
									//$(document.getElementById(#
									//document.getElementById($(txt
									 document.getElementById("lname").value =name;
									 document.getElementById("fname").value=item.prenom ;
								
								
				
 										document.getElementById("age").value=item.age;
  										 document.getElementById("tel").value=item.tel;
  												 document.getElementById("adress").value=item.adress;
 			 								 document.getElementById("code").value=item.code;
											  document.getElementById("email").value=item.email;
											document.getElementById("username").value=item.login;
 											 document.getElementById("psw").value=item.pwrd;
											 
											 
											  var wrapper=document.getElementById("wrapper");
											  wrapper.style.visibility = 'visible';
											  dataTable.style.visibility='hidden'
                                      //       htmlStr=htmlStr+"<label>"+item.prenom +"</label><label>"+item.nom +"</label>";
                                                                                                                
                     }
				// document.getElementById("lname").value = name ;
				 // window.location = "modification.html";
       						  // di.innerHTML=htmlStr;
                         }  ,
        				  function(err){
           alert("Unable to fetch result from Contacts Table");
                               }
             );                                                                                              
                                                        
                                                        },
                                                        //error callback
                                                        function (err){
                                                                alert("error callback "+err.code+" "+err.message);
                                                                
                                                        },
                                                        //success callback
                                                        function (){
                                                                nom="";
                                                                prenom="";
                                                                
                                                        }
                                                        ); 
		
		
		
		
		
		}
		
 
 function init(){
          document.addEventListener("deviceready", onDeviceReady,false)

		  
		   
		   
		  loadFromDB();
            }
 
 
function updateclient(tx){
  alert("alerttt");
  var db = window.openDatabase("GestionClient", "1.0", "GestionClient", 200000);
  db.transaction(updateDB,transaction_error,updatesuccess);
}
 
 function  updatesuccess() {
 //navigator.notification.alert("client  modifier avec success",null,"Information","ok");
 }
function transaction_error(tx, error) {
 alert("Database Error: " + error);
}
 
 
function updateDB(tx){
 alert("aleaaearttt");
    var 	 cin = document.getElementById("fcin").value;
	var 	 prenom = document.getElementById("fname").value;
		var  nom = document.getElementById("lname").value;
 	var   dataTable = document.getElementById("data-table");
		
		
 

 var age = document.getElementById("age").value;
  var telephone = document.getElementById("tel").value;
   var adress = document.getElementById("adress").value;
    var code  = document.getElementById("code").value;
	 var email = document.getElementById("email").value;
 var login =document.getElementById("username").value;
 //var password = document.getElementById("psw").value;

	tx.executeSql("update Client set  prenom='"+ prenom +"',nom='"+ nom +"',age='"+ age +"',telephone='"+ telephone +"',adress='" +adress +"',code='"+code +"',email='"+ email +"',login='"+ login +"'  where cin=" + cin + "");
    alert("client  modifier avec success");
  
}

