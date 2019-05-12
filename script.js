//partie yasmina

 M.AutoInit();


//partie tania
 function changeClass(){
   if ( document.getElementById("menu_hamburger").classList.contains('hidden') ) {
     document.getElementById("menu_hamburger").classList.remove('hidden');
     document.getElementById("menu_hamburger").classList.add('showed');
   }

   else {
     document.getElementById("menu_hamburger").classList.remove('showed');
     document.getElementById("menu_hamburger").classList.add('hidden');
   }
 }

 window.onload = function(){
       document.getElementById("bouton_hamburger").addEventListener( 'click', changeClass);
   }


   // code js de myriam


   document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems, 0, 'top');
    });

    document.addEventListener('DOMContentLoaded', function() {
       var elems = document.querySelectorAll('.tooltipped');
       var instances = M.Tooltip.init(elems, 0, 'top');
     });

     document.addEventListener('DOMContentLoaded', function() {
         var elems = document.querySelectorAll('.modal');
         var instances = M.Modal.init(elems, 0.5);
       });
