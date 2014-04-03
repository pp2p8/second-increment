<script language="JavaScript">
 function pv(ThisForm)
  {
     

    if (ThisForm.codeedit.value == "")
    {
      alert("Please Enter Your \"Question no\".");
      ThisForm.codeedit.focus();
      return(false);
    }
}
	 function cblur(ThisField)
   {
		cnt=0
		var val=ThisField.value
		len=val.length
		if(len !=0)
		{
		  for(i=0;i<len;i++)
		  {
			c=val.substr(i,1)
			if(c==" ") cnt++
		  }
		  if(cnt==len)
		  {
			ThisField.value=""
			alert("Your Input Contains Only Space")
			ThisField.focus();
			return(false);
		  }
		}
	  r=0
 
	  //*******************************
	  if((ThisField.name=="codeedit"))
	  {
		for(i=0;i<len;i++)
		{
		  c=val.substr(i,1)
		  if((c<"0" ||c>"9") && (c!="-"))
		  {
			r=r+1
		  }
		}
		if(r>0)
		{
		  alert("Enter Only \"NUMBERS\"!")
		  ThisField.value= "";
		  ThisField.focus();
		  return(false);
		}
	  }
}
function foc()
 {
  document.cf.codeedit.focus();
 }


</script>