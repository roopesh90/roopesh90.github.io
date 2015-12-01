/*
*Cutom js for site functioning
*/
$(document).ready(function(){ 
    $('#vCard_navTab a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

    var check_hash = function(){
        var _hsh = window.location.hash;
        var _hsh_array = _hsh.split(/[#?|&]/);
        if (_hsh_array.length > 1){
            _ancr_href = "#"+_hsh_array[1];
            _ancr = $('#vCard_navTab a[href="' + _ancr_href + '"]');
            $( _ancr ).trigger( "click" );
            console.log(_ancr);
        }
    };
});
