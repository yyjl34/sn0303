/**
 * Created by Yuejiaqun on 2018/3/3.
 */


$(document).ready(function () {

//轮播图
    let n=0;
    let lis=$(".img_box li");
    let box=$(".banner");
    let left=$(".banner_left");
    let right=$(".banner_right");
    let btnbox=$(".btn_box li");
    function move() {
        n++;
        if(n>=lis.length){
            n=0;
        }
        lis.eq(n).addClass("active").siblings().removeClass("active");
        btnbox.eq(n).addClass("active").siblings(btnbox).removeClass("active");
    }
    let t=setInterval(move,3000);
    box.on("mouseover",function () {
        clearInterval(t);
    }).on("mouseout",function () {
        t=setInterval(move,3000);
    })
    left.on('click',function () {
        n--;
        if (n<0){
            n=lis.length-1;
        }
        lis.eq(n).addClass("active").siblings().removeClass("active");
        btnbox.eq(n).addClass("active").siblings(btnbox).removeClass("active");
    })
    right.on("click",function () {
        move();
    })
    btnbox.on("click",function () {
        n=$(this).index()-1;
        move();
    })

    //banner测展示
    let tab=$(".tab");
    let is_active=false;
    tab.on("mouseover",function () {
        if(is_active){
            return
        }
        is_active=true;
        $(this).children('.index').attr('class','index tab_active');

    }).on("mouseout",function () {
        is_active=false;
        $(this).children('.index').attr('class','index');
    })

    //下拉
    $(".wzdhtab").mouseenter(function () {
        $(this).children(".ngbox").slideDown("slow");
        $(this).children(".yxk").css("display","block");
    }).mouseleave(function () {
        $(this).children(".ngbox").slideUp("slow");
        $(this).children(".yxk").css("display","none");
    })

    //手机苏宁
    $(".sjsn").mouseenter(function () {
        $(this).children(".mb").slideDown("slow");
        $(this).children(".mbyi").css("display","block");
    }).mouseleave(function () {
        $(this).children(".mb").slideUp("slow");
        $(this).children(".mbyi").css("display","none")
    })

    //购物车
    $(".sngwc").mouseenter(function () {
        $(this).children(".ngcart").slideDown("slow");
        $(this).children(".gwcyi").css("display","block");
    }).mouseleave(function () {
        $(this).children(".ngcart").slideUp("slow");
        $(this).children(".gwcyi").css("display","none");
    })

    //我的订单
    $(".wddd").mouseenter(function () {
        $(this).children(".ngbox1").slideDown("slow");
    }).mouseleave(function () {
        $(this).children(".ngbox1").slideUp("slow");
    })

    //楼层跳转
    let floors=$(".floors");
    let aside=$(".index_float ul li");
    let kn=$(".knkhh");
    let trans=$(".djh");
    let hi=$(".fixbar");
    let ce=$(".index_float")
    window.onscroll=function () {
        let tabs=$(document).scrollTop;
        if(tabs>kn.offset(top)){
            ce.addClass("active");
        }else{
            ce.removeClass("active");
        }
    }
    










































})