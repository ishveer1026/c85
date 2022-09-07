var array=[];
function submit(){
for(var i=1; i<5; i++){
  var name=document.getElementById("name_of_the_student_"+i).value;
  array.push(name);
  }
  var length=array.length;
  var display=[];
  for(var j=0; j<length; j++){
    display.push("<h4> name-"+ array[j]+"</h4>");
    console.log(display);
  }
  document.getElementById("display_name_with_commas").innerHTML=display;
  var remove_commas=display.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
