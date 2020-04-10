
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
	input = spinner.find('input[type="number"]'),
	btnUp = spinner.find('.quantity-up'),
	btnDown = spinner.find('.quantity-down'),
	min = input.attr('min'),
	max = input.attr('max');

  btnUp.click(function() {
	var oldValue = parseFloat(input.val());
	if (oldValue >= max) {
	  var newVal = oldValue;
	} else {
	  var newVal = oldValue + 1;
	}
	spinner.find("input").val(newVal);
	spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
	var oldValue = parseFloat(input.val());
	if (oldValue <= min) {
	  var newVal = oldValue;
	} else {
	  var newVal = oldValue - 1;
	}
	spinner.find("input").val(newVal);
	spinner.find("input").trigger("change");
  });

});



// popap

    body = $('body');

    $('.sect1__button').click(function() {

			if($(".quantity__input1").val() =="1" && $(".quantity__input2").val() =="5"){
				$('.modalDialogCustom2').addClass('modalDialogCustom_active');
        // $(body).css('overflow', 'hidden');
			}
			else{
				$(".quantity__input1").val(0);
				$(".quantity__input2").val(0);
				$('.modalDialogCustom1').addClass('modalDialogCustom_active');
        // $(body).css('overflow', 'hidden');
			}

    });

    $('.contentpopap__close, .shadow_popap').click(function() {
        $('.modalDialogCustom').removeClass('modalDialogCustom_active');
        // $(body).css('overflow', 'visible');
    });