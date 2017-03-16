$(function() {
	//图片轮播
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: 2500,
		autoplayDisableOnInteraction: false
	});

	//切换
	$(".con-mainall .con-main:gt(0)").hide();
	$("#con-top ul").find("li").each(function(index) {
		$(this).hover(function() {
			$(this).addClass("hover").stop(true, true).siblings().removeClass("hover");
			$(".con-mainall .con-main").hide().eq(index).show();
		});
	});

	//头条滚动轮播
	function scroll() {
		$("#myul li:first").animate({
			"margin-top": "-0.3rem"
		}, 500, function() {
			$(this).css({
				"margin-top": "0rem"
			}).appendTo($("#myul"));
		});
	}
	setInterval(scroll, 2000);
});

//底部悬浮变样式
$(function(){
	$("#footul").find("li").each(function(index){
		$(this).hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
		});
	});
});

//加载更多
$(function() {
	var flag = true;
	//	$(".con-main ul li:gt(4)").hide();
	$(".con-main").each(function() {
		$(this).find("ul li:gt(4)").hide();
	});
	$("#con-btn").click(function() {
		if(flag) {
			$(".con-main").each(function() {
				$(this).find("ul li:gt(4)").slideDown();
			});
			$("#con-btn").text("点击收起");
			flag = false;
		} else {
			$(".con-main").each(function() {
				$(this).find("ul li:gt(4)").slideUp();
			});
			$("#con-btn").text("加载更多");
			flag = true;
		}
	});
});

$(function() {
	//下拉列表
	var flag = true;
	$(".xiala_plan").hide();
	$(".sec-plan .xiala").click(function() {
		if(flag) {
			$(".xiala_plan").slideDown();
			$(".xiala").css("transform","rotate(180deg)");
			flag = false;
		} else {
			$(".xiala_plan").slideUp();
			$(".xiala").css("transform","rotate(360deg)");
			flag = true;
		}
	});
	//侧边栏
	var flag = true;
	$("#top-asd").click(function() {
		if(flag) {
			$("#asd-animate").animate({
				"right": "0rem",
			}, 500);
			$("#article").animate({
				right: "2.94rem",
			}, 500);
			$("#top-asd").attr("src", "images/ico_btn2.png");
			flag = false;
		} else {
			$("#asd-animate").animate({
				right: "-2.94rem",
			}, 500);
			$("#article").animate({
				right: "0rem",
			}, 500);
			$("#top-asd").attr("src", "images/ico_btn2_hov.png");
			flag = true;
		}
	});
});
//左侧弹出小图标
$(function() {
	var flag = true;
	$("#left-click").click(function() {
		if(flag) {
			$(".left-alert img:nth-of-type(2)").animate({
				left: "1.04rem"
			}, 500);
			$(".left-alert img:nth-of-type(3)").animate({
				left: "1.95rem"
			}, 500);
			$(".left-alert img:nth-of-type(4)").animate({
				left: "2.86rem"
			}, 500);
			$(".left-alert img:nth-of-type(5)").animate({
				left: "3.77rem"
			}, 500);
			$(".left-alert img:nth-of-type(6)").animate({
				left: "4.68rem"
			}, 500);
			$("#left-click").attr("src", "images/ico_btn23.png");
			flag = false;
		} else {
			$(".left-alert img:nth-of-type(2)").animate({
				left: "0.15rem"
			}, 500);
			$(".left-alert img:nth-of-type(3)").animate({
				left: "0.15rem"
			}, 500);
			$(".left-alert img:nth-of-type(4)").animate({
				left: "0.15rem"
			}, 500);
			$(".left-alert img:nth-of-type(5)").animate({
				left: "0.15rem"
			}, 500);
			$(".left-alert img:nth-of-type(6)").animate({
				left: "0.15rem"
			}, 500);
			$("#left-click").attr("src", "images/ico_btn22.png");
			flag = true;
		}
	});
});

//中间大弹框
$(function() {
	$(".over").hide(); //阴影先隐藏
	$(".center-alert").hide(); //弹框先隐藏

	$("#right-click").click(function() {
		$(".center-alert").show();
		$("#right-click").animate({
			right: "-1rem"
		}, 500);
		$(".over").show();
	});

	//点击关闭按钮，弹框消失。阴影消失,过两秒之后自己弹出
		$("#close-alert").click(function(){
			$(".center-alert").hide();
			$(".over").hide();
			setTimeout(show,2000);
		});

	//	$(".center-alert").siblings().click(function(){
	//		$(".center-alert").hide();
	//		$(".over").hide();
	//	});

	function show() {
		$(".center-alert").show();
		$(".over").show();
	}
});

//回到顶部
$(function(){
	$("#scrolltop").click(function(){
		$("body").animate({"scrollTop":"0rem"},500);
	});
});