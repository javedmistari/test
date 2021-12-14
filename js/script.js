$(document).ready(function () {

 
        // JQUERY NAV TOGGLE
        $('#menu').click(function (){
            $('.navBar').slideToggle();
        });
  
        $(window).resize(function(){  
            var w = $(window).width();  
            if(w > 768) {  
                $('.navBar').removeAttr('style');  
            }  
        });

      
        

            $("#actionForm").validate({
                rules: {
                  name : {
                    required: true,
                    minlength: 3
                  },
                  lastName : {
                    required: true,
                    minlength: 3
                  },
                  email: {
                    required: true,
                    email: true
                  },
                  mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                  },
                  city : {
                    required: true,
                    minlength: 3
                  },
                  state : {
                    required: true,
                    minlength: 3
                  },
                  tick : {
                    required: true,

                  }
                },
           
              });
      
          
  


    $(".faqHeading").click(function () {
        if ($(".faqDescription").is(":visible")){
            $(".faqDescription").slideUp(300);
            $(".plusminus").text('+');
        }

        if($(this).next(".faqDescription").is(":visible")){
            $(this).next(".faqDescription").slideUp(300);
            $(this).children(".plusminus").text('+');
        }else{
            $(this).next(".faqDescription").slideDown(300);
            $(this).children(".plusminus").text('-');
        }
    });
});