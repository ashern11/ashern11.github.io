    //Function Menu SideBar
	var sidebarBox = document.querySelector('#box'),
	sidebarBtn = document.querySelector('#btn'),
	pageWrapper = document.querySelector('#wrapper');

	sidebarBtn.addEventListener('click', function (event) {
			sidebarBtn.classList.toggle('active');
			sidebarBox.classList.toggle('active');
	});

	pageWrapper.addEventListener('click', function (event) {

			if (sidebarBox.classList.contains('active')) {
				sidebarBtn.classList.remove('active');
				sidebarBox.classList.remove('active');
			}
	});

	window.addEventListener('keydown', function (event) {

			if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
				sidebarBtn.classList.remove('active');
				sidebarBox.classList.remove('active');
			}
	});

	//Function Side Menu
    $('.scrollify-link').click(function(){
        var moveTo = $(this).attr('href');
		$.scrollify.move(moveTo);
		if (sidebarBox.classList.contains('active')) {
			sidebarBtn.classList.remove('active');
			sidebarBox.classList.remove('active');
		}
	});
	
	//Scollify Function
    $(function() {
        $.scrollify({
            section : ".scrollify",
            sectionName : "section-name",
            interstitialSection : "",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset : 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll:true,
            before:function() {},
            after:function() {},
            afterResize:function() {},
            afterRender:function() {}
        });
	});
	
	//Initialize WOW Js
    new WOW().init();
