$(document).ready(function() {
    
    setTimeout(function(){$('.animation_holder').fadeOut(500);}, 6000);
    
    /*//--------------MENU HOVER-------------------

    var menu_elemtn = $('#sof_page_menu').find('a');

    menu_elemtn.on('mouseenter', menu_hover);
    menu_elemtn.on('mouseleave', menu_out);

    function menu_hover(){
    	var _this = $(this);
    	_this.stop(true, true).animate({backgroundColor:'white', color: '#911B4B'}, 200);
    } 
    function menu_out(){
    	var _this = $(this);
    	_this.stop(true, true).animate({backgroundColor:'#911B4B', color: 'white'}, 200);
    } 

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
