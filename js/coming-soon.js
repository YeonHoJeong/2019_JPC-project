(function($) {
  "use strict"; // Start of use strict

  var attendees = {};
  attendees['박세나'] = 'Bad guy';
  attendees['이상현'] = 'Bad guy';
  attendees['이화영'] = 'Bang Bang';
  attendees['정연호'] = 'Bang Bang';
  attendees['김재훈'] = 'Beer Pong';
  attendees['유시현'] = 'Beer Pong';
  attendees['정하민'] = 'Cocktail lover';
  attendees['최두리'] = 'Cocktail lover';
  attendees['Hannah'] = 'Color blind';
  attendees['임동욱'] = 'Color blind';
  attendees['나누리'] = 'Do not Puke';
  attendees['남재현'] = 'Do not Puke';
  attendees['김준휘'] = 'Dumb boy';
  attendees['윤수경'] = 'Dumb boy';
  attendees['김경은'] = 'Fashion terrorist';
  attendees['남재영'] = 'Fashion terrorist';
  attendees['송철현'] = 'Finger Princess';
  attendees['안지은'] = 'Finger Princess';
  attendees['김양경'] = 'Food fighter';
  attendees['한상민'] = 'Food fighter';
  attendees['정혜원'] = 'Genious';
  attendees['하지민'] = 'Genious';
  attendees['인형호'] = 'Giant foot';
  attendees['전다솔'] = 'Giant foot';
  attendees['백지민'] = 'I am a dancer tonight';
  attendees['석유진'] = 'I am a dancer tonight';
  attendees['이정인'] = "I don't give a shit";
  attendees['이중민'] = "I don't give a shit" ;
  attendees['Bryanna'] = 'Idiot';
  attendees['전룡재'] = 'Idiot';
  attendees['Steve'] = 'Lesketit';
  attendees['최혜은'] = 'Lesketit';
  attendees['박승후'] = 'Mamaboy';
  attendees['박지영'] = 'Mamaboy';
  attendees['Max'] = 'Prince';
  attendees['이화진'] = 'Prince';
  attendees['김태훈'] = 'Shy girl';
  attendees['양하연'] = 'Shy girl';
  attendees['이승현'] = 'Fuck Soju';
  attendees['임수현'] = 'Fuck Soju';
  attendees['Lina'] = 'Solo';
  attendees['이혜종'] = 'Solo';
  attendees['이아름'] = 'Whats up';
  attendees['정재경'] = 'Whats up';
  attendees['김영욱'] = 'Youtube Star';
  attendees['장건우'] = 'Youtube Star';


  $('#check_modal').on('show.bs.modal', function(event){
    var textData = $('#input_text').val();

    var modal = $(this);

    if(textData in attendees === true){
      modal.find('.modal-body > p').append("<span>안녕하세요 " + textData +"님 <i class=\"fas fa-cocktail\"></i></span>")
      modal.find('.modal-body > p').append("<br>")
      modal.find('.modal-body > p').append("<span class='code_span'>" + textData + "님의 코드는 " + "<strong>"+ attendees[textData] + "! </strong> </span>" )
      modal.find('.modal-body > p').append("<br>")
      modal.find('.modal-body > p').append("<span>어서 선물을 주러 가볼까요 !</span>" )
    } else if(textData in attendees === false){
      modal.find('.modal-body > p').append("<span>안녕하세요 " + textData +"님</span>")
      modal.find('.modal-body > p').append("<br>")
      modal.find('.modal-body > p').append("<span>" + textData + "님의 코드는 찾을 수가 없네요... " + " <i class=\"fas fa-sad-tear\"></i> </span>" )
    }

  })
  $('#modal_close_btn').click( function () {
    var modal = $('#check_modal');
    modal.find('.modal-body > p').empty();
  })
  // No JS

})(jQuery); // End of use strict
