function closeBanner(bannerClass,btnClass){
    const banner_class= document.getElementsByClassName(bannerClass);
    const btnclass= document.getElementsByClassName(btnClass);

    btnclass[0].addEventListener('click',function(){
        banner_class[0].classList.add('inactive-banner');
    });
}

closeBanner("top_banner","btn_close");
