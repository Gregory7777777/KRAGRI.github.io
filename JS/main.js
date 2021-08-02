var btn = document.getElementById('btn');
btn.onclick = function () {
	var text = document.querySelector('.intro');
	text.classList.add('red')
	var img = document.querySelector('.desktop');
	img.style.display = 'none';	
}

var mailbtn = document.getElementById('mail-btn');
mailbtn.onclick = function() {
	alert('Ваша заявка отправлена');
}

$(function () {
	$(window).scroll(function() {
    $('#learn .title1').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__fadeInDown");
        	}
    	});
	});
	$(window).scroll(function() {
    $('#skill').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__fadeInLeft");
        	}
    	});
	});
	$(window).scroll(function() {
    $('#skill1').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__fadeInUp");
        	}
    	});
	});
	$(window).scroll(function() {
    $('#skill2').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__fadeInRight");
        	}
    	});
	});
})
