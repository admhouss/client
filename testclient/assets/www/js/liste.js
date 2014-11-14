// JavaScript Document

 function dbConnect(){
     var db = window.openDatabase("GestionClient", "1.0", "GestionClient", 200000); 
        db.transaction(populateDB, errorCB, successCB);
    }
  
    //create table and insert some record
    function populateDB(tx) {
       
      var sql = "CREATE TABLE IF NOT EXISTS Client ( "
   + "cin INTEGER PRIMARY KEY, "
   + "prenom VARCHAR(50), " + "nom VARCHAR(50), "
   + "age INTEGER," + "telephone INTEGER,"+ "adress VARCHAR(50)," + "code INTEGER,  " + "email VARCHAR(50),  " + "login VARCHAR(50),"  + "password VARCHAR(200))";
 tx.executeSql(sql);
    }
  
    //function will be called when an error occurred
    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }
  
    //function will be called when process succeed
    function successCB() {
        alert("success!");
  var db = window.openDatabase("GestionClient", "1.0", "GestionClient", 200000); 
        db.transaction(queryDB,errorCB);
    }
  
    //select all from MyFriends
    function queryDB(tx){
        tx.executeSql('SELECT * FROM Client',[],querySuccess,errorCB);
    }
  
    function querySuccess(tx,result){
	 var val =document.getElementById("MyFriendsList").value;
    
        $.each(result.rows,function(index, row){
			alert ("test");
            var row = result.rows.item(index);
            val.append('<li><a href=" #"><h3 class="ui-li-heading">'+row['nom']+'</h3>< div class="ui-li-desc">Club '+row['prenom']+'</div></a></li>');
        }); 
	//	alert( $('#MyFriendsList').listview());
  
      //  val.listview();
    }