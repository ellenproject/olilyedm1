$(document).ready(function() {
    // window.onload=function (){
    //     $(".bg_move").addClass("moving");
    //     myVid=document.getElementById("myVideo_pad");
    //     myVid2=document.getElementById("myVideo_s2");
    //     function enableAutoplay()
    //       { 
    //       myVid.autoplay=true;
    //       myVid.load();
    //       myVid2.autoplay=true;
    //       myVid2.load();
    //       } ;
    //       enableAutoplay();
    // }
    
    var sections = $('.gallery_box'), 
        nav = $('.gallery_nav'), 
        navHeight = nav.outerHeight();
    //跟隨選單
    $(window).scroll( function(){
        $('.ourService').each( function(i){
            var bottom_of_list = $(this).offset().top + $(this).outerHeight();//列表的bottom
            var top_of_window = $(window).scrollTop()  + 100;//滑動的距離
            var top_of_about_us = $('.whyUs').offset().top - navHeight;//下一區塊的top距離

            if( top_of_window >= bottom_of_list && top_of_about_us >= top_of_window){
                $('.gallery_nav').addClass("fixed");
                $('.logo_bar').css('top' , '-100px');

            } else{
                $('.gallery_nav').removeClass("fixed");
                $('.logo_bar').css('top' , '0px');
            }
        }); 
    });
    
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - navHeight -80,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').parent().removeClass('active');
                sections.removeClass('active');
                $(this).parent().addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
            }
        });
    });

	//返回頂部
	/* 按下GoTop按鈕時的事件 */
	$('.gotop').click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'slow'); 
		return false;
	});
	/* 下滑超過400px讓按鈕出現 */
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 400){
			$('.gotop').fadeIn();
		} else {
			$('.gotop').fadeOut();
		}
    });
    
    //點擊影片關閉後，同時關閉影片播放(包括聲音停止播放)
    $('.modal').on('hide.bs.modal', function() {
        var memory = $(this).html();
        $(this).html(memory);
    });
    
    //點擊影片開始播放且播放鈕消失
    document.getElementById("playBtn2").addEventListener("click", playFunction2);
    function playFunction2(){
        document.getElementById("myVideo_s2").play();
        $(".playBtn2").addClass("close");
    }
    document.getElementById("playBtn3").addEventListener("click", playFunction3);
    function playFunction3(){
        document.getElementById("myVideo_s3").play();
        $(".playBtn3").addClass("close");
    }

});

