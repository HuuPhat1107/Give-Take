
document.querySelector("document").ready(function(){
    document.querySelector(".tab-slider--body").hide();
    document.querySelector(".tab-slider--body:first").show();
  });
  
  document.querySelector(".tab-slider--nav li").click(function() {
    document.querySelector(".tab-slider--body").hide();
    var activeTab = document.querySelector(this).attr("rel");
    document.querySelector("#"+activeTab).fadeIn();
      if(document.querySelector(this).attr("rel") == "tab2"){
          document.querySelector('.tab-slider--tabs').addClass('slide');
      }else{
          document.querySelector('.tab-slider--tabs').removeClass('slide');
      }
    document.querySelector(".tab-slider--nav li").removeClass("active");
    document.querySelector(this).addClass("active");
  });
  