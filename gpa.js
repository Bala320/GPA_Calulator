
         function gpa()
         {
        var cr1=Number(document.getElementById("course1").value);
        var gr1=document.getElementById("gcourse1").value;
        var cr2=Number(document.getElementById("course2").value);
        var gr2=document.getElementById("gcourse2").value;
        var cr3=Number(document.getElementById("course3").value);
        var gr3=document.getElementById("gcourse3").value;
        var cr4=Number(document.getElementById("course4").value);
        var gr4=document.getElementById("gcourse4").value;
        var cr5=Number(document.getElementById("course5").value);
        var gr5=document.getElementById("gcourse5").value;
        var cr6=Number(document.getElementById("course6").value);
        var gr6=document.getElementById("gcourse6").value;
        var cr7=Number(document.getElementById("course7").value);
        var gr7=document.getElementById("gcourse7").value;
        var cr8=Number(document.getElementById("course8").value);
        var gr8=document.getElementById("gcourse8").value;
        var cr9=Number(document.getElementById("course9").value);
        var gr9=document.getElementById("gcourse9").value;
       
       var gpaa1,gpaa2,gpaa3,gpaa4,gpaa5,gpaa6,gpaa7,gpaa8,gpaa9;
       var totgpa=0;
       var totcr=0;
       
       
if(cr1!="Select"&&gr1!="Select")
{
    switch(gr1)
    {
        case "S": 
                gpaa1=cr1*10;
                  break;
        case "A": 
                gpaa1=cr1*9;
                  break;
        case "B": 
                  gpaa1=cr1*8;
                    break;
        case "C": 
                gpaa1=cr1*7;
                  break;
        case "D": 
                gpaa1=cr1*6;
                  break;
        case "E": 
                gpaa1=cr1*5;
                  break;
        case "F": 
                  gpaa1=cr1*0;
                    break;
    }
}
else 
{
      gpaa1=0;
      cr1=0;
     }

     if(cr2!="Select"&&gr2!="Select"){
    switch(gr2)
    {
        case "S": 
                gpaa2=cr2*10;
                  break;
        case "A": 
                gpaa2=cr2*9;
                  break;
        case "B": 
                  gpaa2=cr2*8;
                    break;
        case "C": 
                gpaa2=cr2*7;
                  break;
        case "D": 
                gpaa2=cr2*6;
                  break;
        case "E": 
                gpaa2=cr2*5;
                  break;
        case "F": 
                  gpaa2=cr2*0;
                    break;           
    }}
    else{
        gpaa2=0;
        cr2=0;
    }

    if(cr3!="Select"&&gr3!="Select"){
    switch(gr3)
    {
        case "S": 
                gpaa3=cr3*10;
                  break;
        case "A": 
                gpaa3=cr3*9;
                  break;
        case "B": 
                  gpaa3=cr3*8;
                    break;
        case "C": 
                gpaa3=cr3*7;
                  break;
        case "D": 
                gpaa3=cr3*6;
                  break;
        case "E": 
                gpaa3=cr3*5;
                  break;
        case "F": 
                  gpaa3=cr3*0;
                    break;
    }}
    else{
        gpaa3=0;
        cr3=0;
    }

    if(cr4!="Select"&&gr4!="Select"){
    switch(gr4)
    {
        case "S": 
                gpaa4=cr4*10;
                  break;
        case "A": 
                gpaa4=cr4*9;
                  break;
        case "B": 
                  gpaa4=cr4*8;
                    break;
        case "C": 
                gpaa4=cr4*7;
                  break;
        case "D": 
                gpaa4=cr4*6;
                  break;
        case "E": 
                gpaa4=cr4*5;
                  break;
        case "F": 
                  gpaa4=cr4*0;
                    break;
    }}
    else{
        gpaa4=0;
        cr4=0;
    }

    if(cr5!="Select"&&gr5!="Select"){
    switch(gr5)
    {
        case "S": 
                gpaa5=cr5*10;
                  break;
        case "A": 
                gpaa5=cr5*9;
                  break;
        case "B": 
                  gpaa5=cr5*8;
                    break;
        case "C": 
                gpaa5=cr5*7;
                  break;
        case "D": 
                gpaa5=cr5*6;
                  break;
        case "E": 
                gpaa5=cr5*5;
                  break;
        case "F": 
                  gpaa5=cr5*0;
                    break;
    }}
    else{
        gpaa5=0;
        cr5=0;
    }

    if(cr6!="Select"&&gr6!="Select"){
    switch(gr6)
    {
        case "S": 
                gpaa6=cr6*10;
                  break;
        case "A": 
                gpaa6=cr6*9;
                  break;
        case "B": 
                  gpaa6=cr6*8;
                    break;
        case "C": 
                gpaa6=cr6*7;
                  break;
        case "D": 
                gpaa6=cr6*6;
                  break;
        case "E": 
                gpaa6=cr6*5;
                  break;
        case "F": 
                  gpaa6=cr6*0;
                    break;
    }}
    else{
        gpaa6=0;
        cr6=0;
    }

    if(cr7!="Select"&&gr7!="Select"){
    switch(gr7)
    {
        case "S": 
                gpaa7=cr7*10;
                  break;
        case "A": 
                gpaa7=cr7*9;
                  break;
        case "B": 
                  gpaa7=cr7*8;
                    break;
        case "C": 
                gpaa7=cr7*7;
                  break;
        case "D": 
                gpaa7=cr7*6;
                  break;
        case "E": 
                gpaa7=cr7*5;
                  break;
        case "F": 
                  gpaa7=cr7*0;
                    break;
    }}
    else{
        gpaa7=0;
        cr7=0;
    }

    if(cr8!="Select"&&gr8!="Select"){
    switch(gr8)
    {
        case "S": 
                gpaa8=cr8*10;
                  break;
        case "A": 
                gpaa8=cr8*9;
                  break;
        case "B": 
                  gpaa8=cr8*8;
                    break;
        case "C": 
                gpaa8=cr8*7;
                  break;
        case "D": 
                gpaa8=cr8*6;
                  break;
        case "E": 
                gpaa8=cr8*5;
                  break;
        case "F": 
                  gpaa8=cr8*0;
                    break;
    }
  }
    else{
        gpaa8=0;
        cr8=0;
    }

    if(cr9!="Select"&&gr9!="Select"){
      switch(gr9)
      {
          case "S": 
                  gpaa9=cr9*10;
                    break;
          case "A": 
                  gpaa9=cr9*9;
                    break;
          case "B": 
                    gpaa8=cr8*8;
                      break;
          case "C": 
                  gpaa9=cr9*7;
                    break;
          case "D": 
                  gpaa9=cr9*6;
                    break;
          case "E": 
                  gpaa9=cr9*5;
                    break;
          case "F": 
                    gpaa9=cr9*0;
                      break;
      }
    }
      else{
          gpaa9=0;
          cr9=0;
      }    
      /*if(document.getElementById("resu").value="NaN")
       {
         alert("Kindly fill Respective Grade or Credit!!!");
       }*/
      totgpa=gpaa1+gpaa2+gpaa3+gpaa4+gpaa5+gpaa6+gpaa7+gpaa8+gpaa9;
     totcr=cr1+cr2+cr3+cr4+cr5+cr6+cr7+cr8+cr9;
     document.getElementById("resu").value= totgpa/totcr;
    }

    

  
    
      