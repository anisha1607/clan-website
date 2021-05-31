// //form validation
// document.querySelector('.myform').addEventListener('submit',function(event){
//     alert(1);
//    //prevents data from being shown on top with file name
//    event.preventDefault();
//      //to print input data
//    const n=event.target.name.value;
//    const e= event.target.email.value;
//    const p=event.target.phone.value;
//    const d=event.target.desc.value;
   
 
   
//    if(e.includes('@.')===false){
//    document.getElementById('xyz').innerHTML='Invalid email id';
//    }
//    else{
//      document.getElementById('xyz').innerHTML='Thank you for submitting the form. We will get back to you soon.';
     
   
//  }
 
 
//      //to reset values
//    event.target.name.value='';
//    event.target.phone.value='';
//    event.target.email.value='';
//    event.target.desc.value='';
//  })


 function abc(){
    // alert('Thank you for submitting the form. We will get back to you soon.');
    var n=document.getElementById("name").value;
    var x=document.getElementById("email").value;
    var p=document.getElementById("phone").value;
    var b=0;

    
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        document.getElementById("email1").innerHTML="*Please enter a valid e-mail address";  b=1;
    }  

    var phoneno = /^\d{10}$/;
    if(!(p.match(phoneno))){
        document.getElementById("num").innerHTML="*Please enter a valid phone number";  b=1;
    }

    var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if(!(n.match(alpha))){
        document.getElementById("name1").innerHTML="*Please enter a valid name";  b=1;
    }

    

    if(b===0){
        
        document.getElementById("name").value='';
        document.getElementById("email").value='';
        document.getElementById("phone").value='';
        document.getElementById("desc").value='';
        $('.abc').hide();
        alert('Thank you for submitting the form. We will get back to you soon.');
    }

        
 }