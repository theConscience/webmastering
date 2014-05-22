/*
var codePrint = "0_";
var codeSimple = 0;
var codeCreate = function() {
	var codes = [];
	for (i=0;i<10;i++) {
		for (j=0;j<10;j++) {
			codes[i][j] = i+"A"+j+"b ";
			codePrint += codes[i][j];
		}
	}
	return true;
}
alert(codeSimple);
alert(codePrint);*/

/*planner*/
$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        //$('.list').append($("p").html($todo));
        $('.list').append('<div class="item">'+toAdd+'</div>');
        $('input').val('');
    });
});
$(document).on('click','.item',function() {
    $(this).remove();
});