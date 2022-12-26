/*
* Custom js for site functioning
*/
var _upnrunnin = false;
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
      _upnrunnin = true;
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
        else{
            _upnrunnin = true;
        }
    };
    check_n_switchTab();

    var updateExperience = function(){ 
        var today = new Date();
        var exp = today.getFullYear() - 2012;
        $('#experience').text(exp);
    };
    updateExperience();
    
    //To check if is page ready ans hide the spinner
    var _chk_upnrunnin = function(){
        if(_upnrunnin===false){
            // console.log("waiting");
            setTimeout(_chk_upnrunnin, 50);
            return;
        }
        setTimeout(function(){
            // console.log("ready");
            _spinr_prnt=$($(".loading_parent")[0])
            if(_spinr_prnt.hasClass('loaded')===false){
                _spinr_prnt.addClass('animated fadeOut');
                setTimeout(function(){
                    _spinr_prnt.addClass('loaded');
                },1000);
                
            }
        },2000);
        
    };
    _chk_upnrunnin();
});
