/*
* Custom js for site functioning
*/
$(document).ready(function(){ 
    //To switch tabs on clicking nav buttons
    $('#vCard_navTab a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
      if ($(this).attr('href') == "#about"){
          _loc= window.location.origin = window.location.pathname;
          history.pushState({}, "", _loc);
      }
      else{
          history.pushState({}, "", this.href);
      }
    });
    
    //To switch tabs if url has nav button hash
    var check_n_switchTab = function(){
        var _hsh = window.location.hash;
        var _hsh_array = _hsh.split(/[#?|&]/);
        if (_hsh_array.length > 1){
            _ancr_href = "#"+_hsh_array[1];
            _ancr = $('#vCard_navTab a[href="' + _ancr_href + '"]');
            $( _ancr ).trigger( "click" );
        }
    };
    check_n_switchTab();
});
