$(document).ready(function() {

    
    setTimeout(function(){$('.animation_holder').fadeOut(500);}, 6000);



    var animation = $('.animation');
    var animation_width = animation.height() + 256;
    animation.width(animation_width);
    
    /*//--------------MENU HOVER-------------------
>>>>>>> origin/gh-pages


   setTimeout(function(){$('.animation_holder').fadeOut(500);}, 6000);


<<<<<<< HEAD
});
=======
    //--------------MENU HOVER-------------------*/
    
    function search(query) {
        $(".author_node").each(function() {
            var el = $(this);
            var text = "";
            
            
            var ab = el.find(".author_block, .author_block_youth");
            text = ab.find("a").text() + "@";
            
            var rt = el.find(".report_title");
            text = text + rt.find("span").text();
            
            if (query.length === 0 || text.toLowerCase().indexOf(query) > -1)
                el.show();
            else
                el.hide();
        });
        
        $(".section_title, .section_title_youth").each(function() {
            var el = $(this);
            var text = el.text().toLowerCase();
            
            if (query.length === 0 || text.indexOf(query) > -1)
                el.show();
            else
                el.hide();
        });
    }
    
    $("#search_text").on('input onpropertychange', function(e) {
        search(this.value.toLowerCase());
    });
});

