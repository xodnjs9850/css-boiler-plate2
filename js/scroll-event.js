

function hideGoTop(ScrollTop) {
    const $goTop = document.querySelector('.go-top');
    if (ScrollTop < 800) {
        $goTop.classList.add('hide');
    } else {
        $goTop.classList.remove('hide');
    }
    
    // $goTop.classList.toggle('hide', ScrollTop < 800);
}

function changeFixHeader(ScrollTop) {
    const $logoImg = document.querySelector('inner-header h1 img');
    if (ScrollTop > 200) {
        $logoImg.setAttribute('src', 'img/logo2.png');
        $('header').addClass('on');
    } else {
        $logoImg.setAttribute('src', 'img/logo.png');
        $('header').removeClass('on');
    }
    
}


//즉시 실행 함수
(function () {

    //scroll 이벤트 생성 - 1. 헤더 변경 2. 맨위로 이동 화살표 처리
    document.addEventListener('scroll', e => {
        // console.log('스크롤 이벤트 발생');
        // console.log(document.documentElement.scrollTop);

        const ScrollTop = document.documentElement.scrollTop;
        // 맨위로 이동 버튼 처리
        hideGoTop(ScrollTop);
        changeFixHeader(ScrollTop);
    });
}());