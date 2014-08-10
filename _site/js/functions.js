$(document).ready(function() {
    
    //--------------MENU HOVER-------------------

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

    //--------------MENU HOVER-------------------
});