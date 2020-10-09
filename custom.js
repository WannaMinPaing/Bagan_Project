

$(document).ready(function(){

	// alert('ok')
	showResult()
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
							<td>${c++}</td>
							<td><img src="${v.photo}" width="100px" height="100px"></td>
							<td>${v.name}</td>
							<td><button>+</button> ${v.qty} <button>-</button></td>
							<td>${v.price}</td>
							<td>${v.subtotal}</td>
						</tr>`
			})

		}
		// console.log(total)
		show+=`<tr><td colspan="5">Total</td><td>${total}</td></tr>
				<tr><td colspan="6"><button calss="ck">Checkout</button></td></tr>`
		$('.showresult').html(show);
	}


})







