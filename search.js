let TRANSPAENT_DIV_STATUS = false;
$('#SearchInput').keyup(function(e) {
	if (e.key == "Escape") {
		$('.transparent_BG').hide();
		return;
	}
	$('.transparent_BG').show();

	const val = $(this).val();
	if (val.length == 0) {
		$('.transparent_BG').remove();
		TRANSPAENT_DIV_STATUS = false;
		return;
	}
	if (TRANSPAENT_DIV_STATUS == false) {
		TRANSPAENT_DIV_STATUS = true;
		$('body').append(transparentBG);
	}




	const filteredArrayList = search(val);

	$('.filteredItems_Summarry').empty().append('Found Items For : ' + val);
	$('.filteredItems_Summarry').append('<br>Fonund Link Counts : ' + filteredArrayList.length);
	$('.filteredItems_Summarry').append('<br><hr>');


	$('.filteredItems_List').empty();
	for (let i = 0; i < filteredArrayList.length; i++) {
		const r = filteredArrayList[i];
		const SN = (i + 1).toString().padStart(2, 0);
		let HTML_LINKS = `${SN}. <a href="${r['link_obj']}">${r['display_name']}</a><br>`;
		$('.filteredItems_List').append(HTML_LINKS);

	}

});

function search(string) {
	console.log(FILE_LINKS_OBJ)
	let newArray = [];
	keys_list = Object.keys(FILE_LINKS_OBJ);
	for (let i = 0; i < keys_list.length; i++) {
		newArray.push(...FILE_LINKS_OBJ[keys_list[i]])
	}
	const FilteredArray = newArray.filter(o => Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));

	return FilteredArray

}

const transparentBG = `
<div class="transparent_BG">
    <div class="filteredItems_Summarry"></div>
    <div class="filteredItems_List"></div>
</div>
`;