$(document).ready(function () {
    // ---------------------------------------------hero-slider----------------------
    var slideIndex = 0;
    var slides = $(".slideItems");
    slides.eq(slideIndex).fadeIn(500);
    $('.pagiTarget').click(function () {
        var targSld = $(this).attr('data-slide');
        slides.fadeOut();
        slides.eq(targSld).fadeIn(500);
        slideIndex = 0;
    })

    showSlides();

    function showSlides() {
        var i;
        slides.fadeOut();
        slides.eq(slideIndex).fadeIn(500);
        slideIndex++;
        if (slideIndex >= slides.length) { slideIndex = 0 }
        setTimeout(showSlides, 6000); // Change image every 2 seconds
    }
    // ---------------------------------------------hero-slider--------------------------------

    // ---------------------------------------------buy Now
    $(".buyNowButton").click(function () {
        if ($(".buyOptions").hasClass("activeBuy")) {
            $(".buyOptions").removeClass("activeBuy");
        }
        else {
            $(".buyOptions").addClass("activeBuy");

        }

    });

    $(".byNowSticked").click(function () {
        if ($(".buyOptions").hasClass("activeBuy")) {
            $(".buyOptions").removeClass("activeBuy");
        }
        else {
            $(".buyOptions").addClass("activeBuy");
        }

    });

    // option slider
    (function () {
        var slideWidth = $('.secondSlideSwiper').width(),
            runSlide = 0,slideCont=0;
        sinMargin = $('.optionsItem').outerWidth(false)
        singleWidth = $('.optionsItem').outerWidth(false),
            (maxrun = slideWidth - singleWidth);


        console.log('singleWidth width', singleWidth);
        console.log('Slide is showing', slideWidth);

        function moveSlide(runSlide) {
            $('.optionCont').animate({ marginLeft: -runSlide + 'px' }, 'slow');
            console.log('runSlide',runSlide);
        }
        $('.navNext').click(function () {
            console.log('Before Next maxrun', maxrun);
            if (parseInt(runSlide) <= parseInt(maxrun)) {
                slideCont++;
                runSlide += singleWidth;
                moveSlide(runSlide);
                console.log('SlideCnt',slideCont);
            }
            
        });

        $('.navPrev').click(function () {
            console.log('Before Prev maxrun', maxrun);
            if (runSlide > 0) {
                slideCont--;
                runSlide -= singleWidth;
                moveSlide(runSlide);
                console.log('SlideCnt2',slideCont);
            }
            
        });
    }());
    // recipeSlider


    (function () {
        var slideWidth2 = $('.recipeContainer').width(),
            runSlide2 = 0,
            singleWidth2 = $('.recipeBox').outerWidth(false),
            maxrun2 = slideWidth2 - singleWidth2;

        console.log('Recipe singleWidth2 width', singleWidth2);
        console.log('Recipe Slide is showing', slideWidth2);

        function moveSlide(runSlide2) {
            $('.recipeContainer').animate({ marginLeft: -runSlide2 + 'px' }, 'slow');
        }
        $('.navNext1').click(function () {
            console.log('Before Nextjkjh', singleWidth2);
            if (runSlide2 <= maxrun2) {
                runSlide2 += singleWidth2;
            }
            moveSlide(runSlide2);
        });

        $('.navPrev1').click(function () {
            console.log('Before Prev', singleWidth2);
            if (runSlide2 > 0) {
                runSlide2 -= singleWidth2;
            }
            moveSlide(runSlide2);
        });
    }());



    $(".recipeAfter").click(function () {

       var currClass = $(this).parent('.recipeBoxCommon').find('.recipeHide');
        if ($(this).hasClass("crossAfter")) {
            $(this).removeClass('crossAfter');
            currClass.fadeOut(500);
        }
        else {
            currClass.fadeIn(500);
            $(this).addClass('crossAfter');
        }


    });



    // foodieSlider---------------------
    (function () {
        var slideWidth3 = $('.foodiesContainer').width(),
            runSlide3 = 0,
            singleWidth3 = $('.foodies').outerWidth(false),
            maxrun3 = slideWidth3 - singleWidth3;


        console.log('Slide is showing', slideWidth3);

        function moveSlide(runSlide3) {
            $('.foodiesContainer').animate({ marginLeft: -runSlide3 + 'px' }, 'slow');
        }
        $('.navNext2').click(function () {
            console.log('Before Next', runSlide3);
            if (runSlide3 <= maxrun3) {
                runSlide3 += singleWidth3;
            }
            moveSlide(runSlide3);
        });

        $('.navPrev2').click(function () {
            console.log('Before Prev', runSlide3);
            if (runSlide3 > 0) {
                runSlide3 -= singleWidth3;
            }
            moveSlide(runSlide3);
        });
    }());

    //postSlider
    (function () {
        var slideWidth3 = $('.postContainer').width(),
            runSlide3 = 0,
            singleWidth3 = $('.postParent').outerWidth(false),
            maxrun3 = slideWidth3 - singleWidth3;


        console.log('Slide is showing', slideWidth3);

        function moveSlide(runSlide3) {
            $('.postContainer').animate({ marginLeft: -runSlide3 + 'px' }, 'slow');
        }
        $('.navNext3').click(function () {
            console.log('Before Next', runSlide3);
            if (runSlide3 <= maxrun3) {
                runSlide3 += singleWidth3;
            }
            moveSlide(runSlide3);
        });

        $('.navPrev3').click(function () {
            console.log('Before Prev', runSlide3);
            if (runSlide3 > 0) {
                runSlide3 -= singleWidth3;
            }
            moveSlide(runSlide3);
        });
    }());

    // flavorDataChanged-----------------------------

    var flavourData = {
        'Classic_Masala': {
            'title': 'Classic Masala',
            'rightDecs': `Your favourite mix desi spices now in a chatpata snack! Enjoy a bowl of mouth-watering Classic Masala flavour for that classic taste in delightful Saffola masala oats!`,
            'background': './media/images/Classic_Masala.png',
            'background2': './media/images/cinnamon.png',
            'addOnTxt': 'Top your bowl of classic masala oats with crushed peanuts for the extra bite'
        },

        'Peppy_Tomato': {
            'title': 'Peppy Tomato',
            'rightDecs': `Relish a tangy bowl of Peppy Tomato flavour for the uplifting tingling taste. Indulge your tastebuds in savoury mix of fresh herbs and crunchy veggies. `,
            'background': './media/images/PeppyTomato.png',
            'background2': './media/images/pepper.png',
            'addOnTxt': `Add some capsicum to your peppy tomato for a desi Mexican touch.`
        },
        'Veggie_Twist': {
            'title': 'Veggie Twist',
            'rightDecs': `Satiate your anytime craving with a comforting bowl of your favourite veggies in aromatic blend of chili, garlic, and curry leaves that will leave you wanting for more!`,
            'background': './media/images/veggieTwistBig.png',
            'background2': './media/images/grass.png',
            'addOnTxt': `Top up your veggie twist with some spring onions for the freshness and crunch.`
        },
        'Masala_Coriander': {
            'title': 'Masala Coriander',
            'rightDecs': `Popular in the south, Masala Coriander is flavourful blend of tempting well-loved south spices and aromatic coriander.`,
            'background': './media/images/masalacoriander.png',
            'background2': './media/images/gunPowder.png',
            'addOnTxt': `Top it up with drizzle of ghee & some gun powder`
        },
        'Plain_Oats': {
            'title': 'Plain Oats',
            'rightDecs': `The heart wants what it wants, so why hold back! Have it as a hot bowl of Oats or as a cold yummy dessert, or as a healthy add-on to your exiting sweet and savoury delights.`,
            'background': './media/images/plainoats.png',
            'background2': './media/images/strawberry.png',
            'addOnTxt': `Drizzle some honey or maple syrup and top it off with chocolate chips, fresh berries, raisins, or nuts!`
        },
        'Flavours_South': {
            'title': 'Flavours of the South',
            'rightDecs': `The magic of well-loved south spices in three delicious south
            flavours that would leave everyone craving for more!             
            Be it aromatic Sambar or fiery Chettinad or hot Curry Pepper,            
            these flavours make for delightful warm family snacks that            
            are too hot to handle - Mind it!
            `,
            'background': './media/images/southoats.png',
            'background2': './media/images/cashew.png',
            'addOnTxt': `Top it up with your favorite nuts.`
        }
    }
    $('.titleFlv').html(flavourData['Classic_Masala']['title']);
    $('.rightDesc').html(flavourData['Classic_Masala']['rightDecs']);
    $('.leftBg').attr("src", flavourData['Classic_Masala']['background']);;
    $('.FlvBg2').attr("src", flavourData['Classic_Masala']['background2']);;
    $('.addOnsText').html(flavourData['Classic_Masala']['addOnTxt']);

    $('.options').click(function () {
        var flvr = $(this).attr('data-flavour');
        $('.titleFlv').html(flavourData[flvr]['title']);
        $('.rightDesc').html(flavourData[flvr]['rightDecs']);
        $('.leftBg').attr("src", flavourData[flvr]['background']);;
        $('.FlvBg2').attr("src", flavourData[flvr]['background2']);;
        $('.addOnsText').html(flavourData[flvr]['addOnTxt']);
        console.log(flavourData[flvr]['background']);
    })


});
