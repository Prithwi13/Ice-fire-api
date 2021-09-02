async function pc()
{ const response= await fetch ("https://www.anapioficeandfire.com/api/books")
 const user=  await response.json();
 return user;
}
let a= pc();
a.then(function(data){
for(i=1;i<=50;i++)
{document.getElementById("data").innerHTML+= 
data[i].name+"isbn-  "+
data[i].isbn+" <br/> Authors-  "+
data[i].authors+" <br/> Number of pages   "+
data[i].numberOfPages+" <br/> Publisher-  "+
data[i].publisher+"<br/> Released  "+
data[i].released+"  "+"  <hr/>  "
}})
a.catch(function(err)
{console.log(err)}  )