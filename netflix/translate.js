var LanguageList = {
    "EN" : "English",
    "FR" : "Francais"
    
  };
  
  //languages Objects
  var WORDS_EN = {
    "text1" : "Reset",
    "text2" : "Remove",
    "text3" : "Hide",
    "text4" : "Comedy",
    "text5" : "Sci-Fi",
    "text6" : "Animation",
    "text7" : "Action movies"
  };
  
  var WORDS_FR = {
    "text1" : "Remettre",
    "text2" : "Supprimer",
    "text3" : "Cacher",
    "text4" : "Comédie",
    "text5" : "Science-fiction",
    "text6" : "Dessin animé",
    "text7" : "Films d'action"
  };
  
  
  
  window.onload = initialize;
  
  function initialize() {
    var $dropdown = $("#country_select");    
    $.each(LanguageList, function(key, value) {
      $dropdown.
        append($("<option/>").
        val(key).
        text(value));
      });
      
    loadsLanguage("EN");
  }
  
  function loadsLanguage(lang){
    /*fills all the span tags with class=lang pattern*/ 
    $('span[class^="lang"]').each(function(){
      var LangVar = (this.className).replace('lang-','');
      var Text = window["WORDS_"+lang][LangVar];
      $(this).text(Text);        
    });
  }