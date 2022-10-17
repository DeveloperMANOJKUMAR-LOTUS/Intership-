var str2 = {
    "messages": {
      "msg1": {
        "company": "Fresh Spar TEchnologies",
        "email": "developermanoj2003@gmail.com",
        "message": "Hello This is a Message ",
        "name": "Manojkumar",
        "phone": "+918637469722"
      },
      "msg2": {
        "company": "Fresh Spar Technologies ",
        "email": "sandhyabarathi2003@gmail.com",
        "message": "aeifbeakjbfjw",
        "name": "Sandhya",
        "phone": "+918637469722"
      }
    }
  }

  var msg01 = str2.messages.msg1
  var msg02 = str2.messages.msg2

  console.log(msg01);
  console.log(msg02);
  console.log(msg02.company);


document.getElementById('Company1').innerHTML=msg01.company;  
document.getElementById('Email1').innerHTML=msg01.email; 
document.getElementById('Message1').innerHTML=msg01.message; 
document.getElementById('Name1').innerHTML=msg01.name; 
document.getElementById('Company1').innerHTML=msg01.phone; 
 

document.getElementById('Company2').innerHTML=msg02.company;  
document.getElementById('Email2').innerHTML=msg02.email; 
document.getElementById('Message2').innerHTML=msg02.message; 
document.getElementById('Name2').innerHTML=msg02.name; 
document.getElementById('Company2').innerHTML=msg02.phone; 
