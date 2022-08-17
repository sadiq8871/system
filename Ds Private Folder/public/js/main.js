!function($) {
  if ($ == null) {
    console.error('Need jquery to run the app.');
  } else {
    function getFormData(){
      const form_ = document.querySelector('form#post');
  
      var results = {};

      let elements = form_.querySelectorAll('[name]');
      let switches = form_.querySelectorAll('input[type=checkbox]');

      elements.forEach(element => {
        results[element.getAttribute('name')] = element.value;
      });

      switches.forEach(element => {
        if (element.name) results[element.name] = element.checked ? 'on' : null;
      });

      return results;
    }
    $(document).on('contextmenu', function(event) {
      event.preventDefault();
    });
    
    $('#search').on('keyup', function() {
      var value = $(this).val().toLowerCase();
      $('tr').filter(function() {
        var txt = $(this).text().split('\n')[2];
        $(this).toggle(txt.toLowerCase().indexOf(value) > -1);
      });
    });
    
    $('form#post').submit(function (event) {
      event.preventDefault();
      let data = document.querySelector('form');
      data = getFormData();
      $('.btn-save').hide();
      $('.btn-warn').show();
      $.ajax({
        method: 'POST',
        data,
        url: location.pathname
      }).done(data => {
        if (data.status) {
        $('.btn-warn').hide();
        $('.btn-donesave').show();
          setTimeout(() => {
          $('.btn-warn').hide()
          $('.btn-donesave').hide()
          $('.btn-save').show();
          },5000);
        }
      }).fail(() => {
        $('.btn-warn').hide();
        $('.btn-err').show();
      });
    });
  }
}(typeof jQuery != 'undefined' ? jQuery : null);