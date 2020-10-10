

$(document).ready(function(){

	// alert('ok')
	showResult();
	cartCount();
	$('.add_cart').click(function(){
		// alert('ok')
		var id = $(this).data('id');
		var photo = $(this).data('photo');
		var name = $(this).data('name');
		var price = $(this).data('price');

		var item_data={
			id : id,
			photo : photo,
			name : name,
			qty : 1,
			price : price
		}

		// console.log(item_data)
		var localstorage = localStorage.getItem('bgpj');
		var localstorageArray;
		if (localstorage == null) {
			localstorageArray = [];			
		}
		else {
		  localstorageArray = JSON.parse(localstorage);
		}

		var compare = false;
		$.each(localstorageArray, function(i,v){
			if (v.id == id) {
				v.qty++;
				compare = true;
			}
		})
		if (!compare) {
			  localstorageArray.push(item_data);
			}
		var str = JSON.stringify(localstorageArray);
		localStorage.setItem('bgpj',str);
		showResult();
		cartCount();
	})


	function showResult() {
		var localstorage = localStorage.getItem('bgpj');
		if (localstorage) {
			var localstorageArray = JSON.parse(localstorage);
			var show = '';
			var c = 1;
			var total = 0;
			$.each(localstorageArray, function(i,v){
				var subtotal = v.qty*v.price;
				total+=subtotal;
				show+=`<tr>
							<td style="width: 150px;">${c++}</td>
							<td style="width: 150px;"><img src="${v.photo}" width="60px" height="40px"></td>
							<td style="width: 150px;">${v.name}</td>
							<td style="width: 150px;"><button class="qtyin btn btn-light" data-id="${i}">+</button> ${v.qty} <button class="qtyde btn btn-light" data-id="${i}">-</button></td>
							<td style="width: 150px;">${v.price}&nbsp;Ks</td>
							<td style="width: 150px;">${subtotal}&nbsp;Ks</td>
						</tr>`
			})

		}
		// console.log(total)
		show+=`<tr><td colspan="5">Total</td><td>${total}&nbsp;Ks</td></tr>
				<tr><td colspan="6"><button class="ckbtn btn btn-outline-primary btn-lg btn-block">Checkout</button></td></tr>`
		$('.showresult').html(show);
	}


	$('.showresult').on('click', '.qtyin',function(){
	  // alert('ok')
	  var id = $(this).data('id');
	  var localstorage = localStorage.getItem('bgpj');
	  var localstorageArray = JSON.parse(localstorage);
	  $.each(localstorageArray, function(i,v){
	  	if (i == id) {
	  		v.qty++;
	  	}
	  })
	  var str = JSON.stringify(localstorageArray);
	  localStorage.setItem('bgpj', str);
	  showResult();
	  cartCount();
	})

	$('.showresult').on('click', '.qtyde',function(){
	  // alert('ok')
	  var id = $(this).data('id');
	  var localstorage = localStorage.getItem('bgpj');
	  var localstorageArray = JSON.parse(localstorage);
	  $.each(localstorageArray, function(i,v){
	  	if (i == id) {
	  		v.qty--;
	  		if (v.qty <=0) {
	  			localstorageArray.splice(id, 1);
	  		}
	  	}
	  })
	  var str = JSON.stringify(localstorageArray);
	  localStorage.setItem('bgpj', str);
	  showResult();
	  cartCount();
	})


	function cartCount() {
		var cart_count = 0;
		var localstorage = localStorage.getItem('bgpj');
		if (localstorage) {
			var localstorageArray = JSON.parse(localstorage);
			$.each(localstorageArray, function(i,v){
				cart_count += v.qty++;
			})
		}
		$('.cart_count').html(cart_count);
	}


	$('.shop_animate').hide();	
	$('.shop_cart_icon_position').click(function(){
		$('.shop_animate').toggle(1000);
	})


	$('.shop_umbrella_hide').hide();
	$('.shop_umbrella_show').click(function(){
		$('.shop_umbrella_hide').toggle(1000);
		$('.shop_yt_hide').hide();
		$('.shop_lw_hide').hide();

	})

	$('.shop_lw_hide').hide();
	$('.shop_lw_show').click(function(){
		$('.shop_lw_hide').toggle(1000);
		$('.shop_umbrella_hide').hide();
		$('.shop_yt_hide').hide();
	})

	$('.shop_yt_hide').hide();
	$('.shop_yt_show').click(function(){
		$('.shop_yt_hide').toggle(1000);
		$('.shop_lw_hide').hide();
		$('.shop_umbrella_hide').hide();
	})

	// $('.showresult').on('click', '.ckbtn', function(){
	// 	alert('ok');
	// })

})







