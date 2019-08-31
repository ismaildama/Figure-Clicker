
 var katror = document.getElementById("katror");

 katror.style.backgroundColor = 'red';

  katror.onclick=function() {

          var r = Math.floor(Math.random()*2);
          var a = Math.floor(Math.random()*500)+"px";
          if(a<10)
          	a=100+"px";
        

        if(r==0){
        	katror.style.borderRadius = '50%';
          
          katror.style.backgroundColor = "rgb("+Math.floor(Math.random()*1000)+","+Math.floor(Math.random()*1000)+","+Math.floor(Math.random()*1000)+")";
           katror.style.display = "block";
        	katror.style.width = a ;
        	katror.style.height = a ;
          katror.style.margin = a ;
;
        }
        else{
        	    katror.style.display = "block";
            katror.style.borderRadius = 0;
	          katror.style.width = a ;
            katror.style.height = a ;
           katror.style.backgroundColor = "rgb("+Math.floor(Math.random()*1000)+","+Math.floor(Math.random()*1000)+","+Math.floor(Math.random()*1000)+")";
            k
            katror.style.margin = a ;
        }

       
       
  }