// Back-End
var pigLatin = function(sentence) {
  var words = sentence.split(' ');
  var newSentence = "";
  words.forEach(function(word) {
    newSentence = newSentence + translateWord(word) + " ";
  })
  return newSentence.trim();
}

var translateWord = function(word) {
  if (isVowel(word.charAt(0))) {
    return word = addAY(word);
  } else {
    for (var i = 1; i < word.length; i++) {
      if ((word.charAt(i).toLowerCase() === 'q') && (word.charAt(i+1).toLowerCase() === 'u')){
        i += 2;
      };
      if ((isVowel(word.charAt(i))) || (word.charAt(i).toLowerCase() === 'y')) {
        var newWord = word.slice(i) + word.slice(0, i);
        return word = addAY(newWord);
      };
    };
  };
};

var addAY = function(word) {
  return word + "ay";
};

var isVowel = function(char) {
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char.toLowerCase());
};


// Front-End
$(function() {
  $("#pig-latin").submit(function() {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = pigLatin(sentence);
    $("#result").text(result);
  })
})
