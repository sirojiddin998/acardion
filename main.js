let contBx =  document.getElementsByClassName("contBx")
for(i=0; i<contBx.length; i++){
 contBx[i].addEventListener('click',function(){
   this.classList.toggle('active')
 })
}