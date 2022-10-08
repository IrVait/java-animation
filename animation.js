jQuery(function($) {
    $(document).ready(function() {
        
        $('#sonicrun').sprite({fps: 10, no_of_frames: 6 });
        
    $('#bg').pan({fps: 30, speed: 0.5, dir: 'right'}); 
        
      $('#ground').pan({fps: 30, speed: 4, dir: 'left'});   
        
         $('#sonicrun').sprite({fps: 5, no_of_frames:6}) .isDraggable();
             
           $('#tails') 
    .sprite({fps: 8, no_of_frames: 4})    
    .spRandom({
        top: 200,
         left: 200,
         right: 300,
         bottom: 340,
         speed: 1500,
         pause: 300
        
     });
        
        
         $('#debesys').pan({fps: 30, speed: 1, dir: 'left'}); 

        $('#ziedas')
            .sprite({fps: 15, no_of_frames: 10 })
            
        .spRandom({
        top: 200,
         left: 1200,
         right: 200,
         bottom: 340,
         speed: 1500,
         pause: 300
        
     })
        
    });  
    
});