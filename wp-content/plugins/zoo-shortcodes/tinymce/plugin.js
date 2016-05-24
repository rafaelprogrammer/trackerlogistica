(function($) {
"use strict";   
 
			
 			//Shortcodes
            tinymce.PluginManager.add( 'zooShortcodes', function( editor, url ) {
				
				editor.addCommand("zooPopup", function ( a, params )
				{
					var popup = params.identifier;
					tb_show("Insert Zoo Shortcode", url + "/popup.php?popup=" + popup + "&width=" + 800);
				});
     
                editor.addButton( 'zoo_button', {
                    type: 'splitbutton',
                    icon: false,
					title:  'Zoo Shortcodes',
					onclick : function(e) {},
					menu: [
						
						{text: 'Columns',onclick:function(){
							editor.execCommand("zooPopup", false, {title: 'Columns',identifier: 'columns'})
						}},
						{text: 'Button',onclick:function(){
							editor.execCommand("zooPopup", false, {title: 'Button',identifier: 'button'})
						}},
						{text: 'Skill Rating Bar',onclick:function(){
							editor.execCommand("zooPopup", false, {title: 'Skill Rating Bar',identifier: 'skill'})
						}},
						{text: 'Scroll Animation',onclick:function(){
							editor.execCommand("zooPopup", false, {title: 'Scroll Animation',identifier: 'scrollAnimation'})
						}},
						{text: 'Recent Posts',onclick:function(){
							editor.execCommand("zooPopup", false, {title: 'Recent Posts',identifier: 'recentPosts'})
						}},
						{text: 'Parallax Section',onclick:function(){
							editor.execCommand("zooPopup", false, {title: 'Parallax Section',identifier: 'parallaxSection'})
						}},
						{text: 'Colored Parallax Section',onclick:function(){
							editor.execCommand("zooPopup", false, {title: 'Colored Parallax Section',identifier: 'coloredParallaxSection'})
						}},
						{text: 'Parallax Background',onclick:function(){
							editor.execCommand("zooPopup", false, {title: 'Parallax Background',identifier: 'parallaxBackground'})
						}},
						{text: 'Tabbed Page',onclick:function(){
							editor.execCommand("zooPopup", false, {title: 'Tabbed Page',identifier: 'tabbedPage'})
						}},
						{text: 'Testimonials Slider',onclick:function(){
							editor.execCommand("zooPopup", false, {title: 'Testimonials Slider',identifier: 'testimonialsSlider'})
						}},
						{text: 'Social Networks', onclick : function() {
						    tinymce.execCommand('mceInsertContent', false, '[social_networks]');
						}},
						{text: 'Flex Slider',onclick:function(){
							editor.execCommand("zooPopup", false, {title: 'Flex Slider',identifier: 'flexSlider'})
						}},
						{text: 'SuperSlides', onclick : function() {
						    tinymce.execCommand('mceInsertContent', false, '[super_slides]');
						}},
						{text: 'Portfolio', onclick : function() {
						    tinymce.execCommand('mceInsertContent', false, '[portfolio]');
						}},
						{text: 'Google Map',onclick:function(){
							editor.execCommand("zooPopup", false, {title: 'Google Map',identifier: 'googleMap'})
						}},



					
					]
					
                
        	  });
         
          });
         

 
})(jQuery);

