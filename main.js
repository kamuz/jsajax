var request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.txt');
request.onreadystatechange = function(){
  console.log(request.readyState);
  if ((request.readyState === 4) && (request.status === 200)){
    console.log(request);
    document.writeln(request.responseText);
  }
}
request.send();