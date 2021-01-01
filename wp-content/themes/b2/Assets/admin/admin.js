jQuery(document).ready(function( $ ) {
	var phoneType = $('#phome_select').find(':selected').val();
	if(phoneType == 'yunpian'){
			$('#yunpian-sms').show();
	}else if(phoneType == 'juhe'){
			$('#juhe-sms').show();
	}else if(phoneType == 'aliyun'){
			$('#aliyun-sms').show();
	}else if(phoneType == 'others'){
		$('#others-sms').show();
	}else if(phoneType == 'submail'){
		$('#submail-sms').show();
	}else{
		$('#zhongzheng-sms').show();
	}
	
	$('#phome_select').on('change', function() {
			var val = $(this).find(':selected').val();
			var array = ['yunpian','juhe','aliyun','zhongzheng','others','submail'];
			array.forEach(function(_val){
					if(val == _val){
							$('#'+_val+'-sms').show();
					}else{
							$('#'+_val+'-sms').hide();
					}
			});
	})
	
	var checkType = $('#check_type').find(':selected').val();
	if(checkType == 'tel' || checkType == 'telandemail'){
		$('#sms-select').show()
	}else if(checkType == 'luo'){
		$('#luosimao').show()
	}
	
	$('#check_type').on('change', function() {
		var val = $(this).find(':selected').val();
		if(val == 'tel' || val == 'telandemail'){
			$('#sms-select').show()
			$('#luosimao').hide()
		}else if(val == 'luo'){
			$('#sms-select').hide()
			$('#luosimao').show()
		}else{
			$('#sms-select').hide()
			$('#luosimao').hide()
		}
	})
	
	var b2distribution = $('#distribution_conditions').find(':selected').val();
	if(b2distribution === '2'){
		$('.cmb2-id-distribution-user-lv').show()
	}
	
	$('#distribution_conditions').on('change', function() {
		var val = $(this).find(':selected').val();
		$('.cmb2-id-distribution-user-lv').hide()
	
		if(val ==='2'){
			$('.cmb2-id-distribution-user-lv').show()
		}
	})
	
	function changeRadioChange(){
		$('.model-picked').find('input[type="radio"]').on('change',function(){
			changeRaido();
		})
	}
	
	function changeRaido(){
		$('.model-picked').each(function(index,el){
			var picked = $(this).find('input[type="radio"]:checked').val();
	
			$(this).parents('.cmb-repeatable-grouping').find('.set-hidden').hide();
	
			if(picked){
				$(this).parents('.cmb-repeatable-grouping').find('.'+picked+'-module').show();
			}
		})	
	}
	
	changeRadioChange();
	changeRaido();
	
	$('.cmb-add-group-row').on( 'click',function() {
		setTimeout(function(){
			changeRadioChange();
			changeRaido();
		},500)
		downupaction();
	})
	
	function downupaction(){
		setTimeout(function(){
			$('.button-secondary').on( 'click',function() {
				console.log(111);
				setTimeout(function(){
				changeRadioChange();
				changeRaido();
				})
		})
		},500)
	}
	downupaction();
	
	//小工具颜色选择
	// $(document).on( 'cmb_pre_init', function(evt, cmb) {
	// 	var $picker = $('#<FIELD_ID>');
	// 	var changeCallback = function(event, obj) {
	// 		console.log('picker changed to:', obj.color.toString());
	// 	};
	// 	var args = $picker.data('colorpicker');
	// 	if ( args ) {
	// 		args.change = args.change || changeCallback;
	// 	} else {
	// 		args = {
	// 			change: changeCallback
	// 		}
	// 	}
	// 	$picker.data('colorpicker', args);
	// });
	
	//文章页面视频选择
	var postStyle = $('input[name=b2_single_post_style]:checked').val();
	
	if(postStyle == 'post-style-5'){
		$('#post-style-5-box').show();
	}else{
		$('#post-style-5-box').hide();
	}
	
	$('input[name=b2_single_post_style]').on('change', function() {
			var val = $(this).val();
			console.log(val);
			if(val == 'post-style-5'){
				$('#post-style-5-box').show();
			}else{
				$('#post-style-5-box').hide();
			}
	})
	
	//文章页面视频权限选择
	var phoneType = $('#b2_single_post_video_role').find(':selected').val();
		if(phoneType == 'money'){
				$('.cmb2-id-b2-single-post-video-money').show();
		}else if(phoneType == 'credit'){
				$('.cmb2-id-b2-single-post-video-credit').show();
		}else if(phoneType == 'roles'){
				$('.cmb2-id-b2-single-post-video-roles').show();
		}else if(phoneType == 'none'){
			$('.cmb2-id-b2-single-post-video-money').hide();
			$('.cmb2-id-b2-single-post-video-credit').hide();
			$('.cmb2-id-b2-single-post-video-roles').hide();
		}
	
		$('#b2_single_post_video_role').on('change', function() {
				var val = $(this).find(':selected').val();
				var array = ['money','credit','roles','none','login','comment'];
				array.forEach(function(_val){
						if(val == _val){
								$('.cmb2-id-b2-single-post-video-'+_val).show();
						}else{
								$('.cmb2-id-b2-single-post-video-'+_val).hide();
						}
				});
		})
	
	//文章页面隐藏内容查看权限
	var phoneType = $('#b2_post_reading_role').find(':selected').val();
	if(phoneType == 'money'){
			$('.cmb2-id-b2-post-money').show();
	}else if(phoneType == 'credit'){
			$('.cmb2-id-b2-post-credit').show();
	}else if(phoneType == 'roles'){
			$('.cmb2-id-b2-post-roles').show();
	}else if(phoneType == 'none'){
		$('.cmb2-id-b2-post-money').hide();
		$('.cmb2-id-b2-post-credit').hide();
		$('.cmb2-id-b2-post-roles').hide();
	}
	
	$('#b2_post_reading_role').on('change', function() {
			var val = $(this).find(':selected').val();
			var array = ['money','credit','roles','none','login','comment'];
			array.forEach(function(_val){
					if(val == _val){
							$('.cmb2-id-b2-post-'+_val).show();
					}else{
							$('.cmb2-id-b2-post-'+_val).hide();
					}
			});
	})
	
	var checkType_alipay = $('#alipay').find(':selected').val();
	let alipay_type = ['alipay_normal','xunhu','alipay_hupijiao','mapay','xorpay','payjs','yipay','pay020'];
	alipay_type.forEach(e => {
		if(checkType_alipay === e){
			$('#'+e).show()
		}
	});
	
	var b2_paypal = $('#paypal_open').find(':selected').val();
	if(b2_paypal == 1){
		$('#paypal_normal').show()
	}else{
		$('#paypal_normal').hide()
	}
	
	$('#paypal_open').on('change', function() {
		let val = $(this).find(':selected').val();
	
		if(val == 1){
			$('#paypal_normal').show()
		}else{
			$('#paypal_normal').hide()
		}
	})
	
	var checkType_wecatpay = $('#wecatpay').find(':selected').val();
	let wecatpay_type = ['wecatpay_normal','xunhu','wecatpay_hupijiao','mapay','xorpay','payjs','yipay','pay020'];
	wecatpay_type.forEach(e => {
		if(checkType_wecatpay === e){
			$('#'+e).show()
		}
	});
	
	$('#alipay').on('change', function() {
		let val = $(this).find(':selected').val();
		let w = $('#wecatpay').find(':selected').val();
		alipay_type.forEach(e => {
			if(val === e){
				$('#'+val).show()
			}else if(w !== e){
				$('#'+e).hide()
			}
		});
	})
	
	$('#wecatpay').on('change', function() {
		let val = $(this).find(':selected').val();
		let a = $('#alipay').find(':selected').val();
		wecatpay_type.forEach(e => {
			if(val === e){
				$('#'+val).show()
			}else if(a !== e){
				$('#'+e).hide()
			}
		});
	})
	
	//商品设置
	var shopType = $('#zrz_shop_type').find(':selected').val();
		if(shopType == 'normal'){
				$('#shop_price_metabox').show();
		}else if(shopType == 'lottery'){
				$('#shop_lottery').show();
		}else if(shopType == 'exchange'){
				$('#shop_exchange').show();
		}
	
		$('#zrz_shop_type').on('change', function() {
				var val = $(this).find(':selected').val();
				$('#shop_price_metabox').hide();
				$('#shop_lottery').hide();
				$('#shop_exchange').hide();
				if(val == 'normal'){
					$('#shop_price_metabox').show();
				}else if(val == 'lottery'){
					$('#shop_lottery').show();
				}else if(val == 'exchange'){
					$('#shop_exchange').show();
				}
		})
	
	var shopxuni = $('#shop_xuni_type').find(':selected').val();
	if(shopxuni == 'html'){
			$('.cmb2-id-shop-xuni-html-resout').show();
	}else if(shopxuni == 'cards'){
			$('.cmb2-id-shop-xuni-cards-resout').show();
	}
	
	$('#shop_xuni_type').on('change', function() {
			var val = $(this).find(':selected').val();
			$('.cmb2-id-shop-xuni-cards-resout').hide();
			$('.cmb2-id-shop-xuni-html-resout').hide();
			if(val == 'html'){
				$('.cmb2-id-shop-xuni-html-resout').show();
			}else if(val == 'cards'){
				$('.cmb2-id-shop-xuni-cards-resout').show();
			}
	})
	
	var xunitype = $('#zrz_shop_commodity').find(':selected').val();
	if(xunitype == '0'){
			$('#shop_xuni').show();
	}
	
	$('#zrz_shop_commodity').on('change', function() {
			var val = $(this).find(':selected').val();
	
			if(val == '0'){
				$('#shop_xuni').show();
			}else{
				$('#shop_xuni').hide();
			}
	})

	//拖动排序
	function b2Lvs(){
		var lvs = document.querySelectorAll('#user_lv_group_repeat .cmb-repeatable-grouping');
		if(lvs){
			for (let i = 0; i < lvs.length; i++) {
				lvs[i].querySelector('.cmb-group-title .lv-name').innerText = lvs[i].querySelector('.cmb-repeat-group-field input').value
				
				$('#user_lv_group_'+i+'_name').on('input', function(val) {
					lvs[i].querySelector('.cmb-group-title .lv-name').innerText = val.target.value
				});
			}
		}
	
		var vips = document.querySelectorAll('#user_vip_group_repeat .cmb-repeatable-grouping');
		if(vips){
			for (let i = 0; i < vips.length; i++) {
				vips[i].querySelector('.cmb-group-title .lv-name').innerText = vips[i].querySelector('.cmb-repeat-group-field input').value
	
				$('#user_vip_group_'+i+'_name').on('input', function(val) {
					vips[i].querySelector('.cmb-group-title .lv-name').innerText = val.target.value
				});
			}
		}
	
		var index = document.querySelectorAll('#index_group_repeat .cmb-repeatable-grouping');
		if(index){
			for (let i = 0; i < index.length; i++) {
				index[i].querySelector('.cmb-group-title').innerText = index[i].querySelector('.cmb-repeat-group-field input').value
				
				$('#index_group_'+i+'_title').on('input', function(val) {
					index[i].querySelector('.cmb-group-title').innerText = val.target.value
				});

				index[i].querySelector('#index_group_'+i+'_short_code').value = '[b2_index_module key='+index[i].querySelector('#index_group_'+i+'_key').value+']'

				$('#index_group_'+i+'_key').on('input', function(val) {
					index[i].querySelector('#index_group_'+i+'_short_code').value = '[b2_index_module key='+val.target.value+']'
				});
			}
		}
	
		var video =document.querySelectorAll('#b2_single_post_video_group_repeat .cmb-repeatable-grouping');
		if(video){
			for (let i = 0; i < video.length; i++) {
				video[i].querySelector('.cmb-group-title').innerText = video[i].querySelector('.cmb-repeat-group-field input').value
				
				$('#b2_single_post_video_group_'+i+'_title').on('input', function(val) {
					video[i].querySelector('.cmb-group-title').innerText = val.target.value
				});
			}
		}
	
		var download =document.querySelectorAll('#b2_single_post_download_group_repeat .cmb-repeatable-grouping');
		if(download){
			for (let i = 0; i < download.length; i++) {
				download[i].querySelector('.cmb-group-title').innerText = download[i].querySelector('#b2_single_post_download_group_'+i+'_name').value
				
				$('#b2_single_post_download_group_'+i+'_name').on('input', function(val) {
					download[i].querySelector('.cmb-group-title').innerText = val.target.value
				});
			}
		}
	}
	b2Lvs()
	
	function modulessortable(){
		// 	$( "#index_group_repeat" ).sortable({
		// 	connectWith: ".cmb-row cmb-repeatable-grouping"
		//   });
	
		  $( ".cmb-repeatable-group" ).sortable({
			connectWith: ".cmb-row cmb-repeatable-grouping",
			cancel: ".cmb-group-description",
			delay: 150,
			handle: ".cmbhandle-title"
		  });
	
		//   $( "#b2_single_post_download_group_repeat" ).sortable({
		// 	connectWith: ".cmb-row cmb-repeatable-grouping"
		//   });
	
		  $('.cmb-repeatable-grouping .cmb-field-list').mousedown(function(e){
			e.stopPropagation();
	
		  }).mouseup(function(e){
			e.stopPropagation();
	
		  })
	
		//   $('.cmb-repeatable-grouping .cmb-field-list').on('touchstart',function(e){
		// 	e.stopPropagation();
	
		//   }).on('touchend',function(e){
		// 	e.stopPropagation();
	
		//   })
	
	}
	modulessortable()
	
		$( '#index_group_repeat' )
		.on( 'cmb2_remove_row', function() {
			setTimeout(() => {
				b2Lvs()
				modulessortable()
			}, 500);
		});
	
		// fieldTable.on( 'cmb2_add_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
		// });
	
		// var lv  = $( '#user_lv_group_repeat' ) ;
		// lv.on( 'cmb2_remove_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
	
		// lv.on( 'cmb2_add_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
	
		// var vip  = $( '#user_vip_group_repeat' ) ;
		// vip.on( 'cmb2_remove_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
		// vip.on( 'cmb2_add_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
	
		// var video  = $( '#b2_single_post_video_group_repeat' ) ;
		// video.on( 'cmb2_remove_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
		// video.on( 'cmb2_add_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
	
		// var download  = $( '.cmb-repeatable-group' ) ;
		// download.on( 'cmb2_remove_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
		$( '.cmb-repeatable-group' ).on( 'cmb2_add_row', function() {
			setTimeout(() => {
				b2Lvs()
				modulessortable()
			}, 500);
		});
	
	var xunitype = $('#b2_dark_room').find(':selected').val();
	if(xunitype == 1){
			$('#dark-room').show();
	}
	
	$('#b2_dark_room').on('change', function() {
			var val = $(this).find(':selected').val();
	
			if(val == 1){
				$('#dark-room').show();
			}else{
				$('#dark-room').hide();
			}
	})
	
	function b2getFilename(event){
	
		let file = event.target.files[0]
	
		var formData = new FormData();
	
	
		formData.append('file',file,file.name)
	
		$.ajax({
			url: cmb2_l10.ajaxurl+'?action=b2_insert_settings',
			type: 'POST',
			data: formData,
			success: function (data) {
				alert('导入成功')
			},
			cache: false,
			contentType: false,
			processData: false
		});
		
	}
	})