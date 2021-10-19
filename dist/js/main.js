$(document).ready(function () {

    var $container = $('.portfolio'),
        $activePage = $("body").attr("class"),
        $scrollTo = $('#' + $activePage),
        $pages = ["home", "about", "contact"],
        $pageIndex = 0,
        lastScrollTop = 0,
        pageHeight = $("#about").offset().top,
        scrollToPos = 0,
        isScrolling = false

    $("#about-btn").on("click", function () {
        $(".about-wrapper").addClass('active');
        setTimeout(function () {
            $(".page").hide();
            $("#back-to-home").show();
        }, 400);
    })

    $("#back-to-home").on("click", function () {
        $(".about-wrapper").removeClass('active');
        $(".page").show();
        $("#back-to-home").hide();
        lastScrollTop = 0;
        $pageIndex = 0;
        isScrolling = false;
        scrollToPos = 0;
        $($container).removeClass("scrollOn")
    })


    $($container).scroll(function (event) {
        if (!isScrolling) {
            isScrolling = true;
            scrollToPage();
            $(this).addClass("scrollOn")
        }
        else if ($container.scrollTop() == scrollToPos) {
            isScrolling = false
            $(this).removeClass("scrollOn")
            lastScrollTop = $($container).scrollTop()
        }

        return
    })


    //Scroll to page

    function scrollToPage() {
        var st = $($container).scrollTop();
        console.log("last: ", lastScrollTop, "now: ", st)
        if (st > lastScrollTop && $pageIndex < 2) {
            lastScrollTop = st;
            $pageIndex = $pageIndex + 1
            $activePage = $pages[$pageIndex]
            scrollToPos = pageHeight * ($pageIndex)

        }
        if (st < lastScrollTop && $pageIndex > 0) {
            lastScrollTop = st;
            $pageIndex = $pageIndex - 1
            $activePage = $pages[$pageIndex]
            scrollToPos = pageHeight * ($pageIndex)
        }
        $("body").attr("class", $activePage)
        $scrollTo = $('#' + $activePage)
        $container.scrollTop(
            $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
        );
    }





});
