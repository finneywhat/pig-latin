// Back-End
var pigLatin = function(sentence) {
  if (isVowel(sentence.charAt(0))) {
    sentence = sentence + "ay";
  } else {
    var newStr = sentence.slice(1) + sentence.charAt(0);
    sentence = newStr;
  }

  return sentence;
}

var isVowel = function(char) {
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}


// Front-End
$(function() {
  $("#pig-latin").submit(function() {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = pigLatin(sentence);
    $("#result").text(result);
  })
})
