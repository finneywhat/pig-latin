### do nothing to non-alphabetical chars
* input: 3
* output: 3

### add "ay" to single-letter words beginning with a vowel
* input: "i"
* output: "iay"

### add "ay" to multi-letter words beginning with a vowel
* input: "island"
* output: "islanday"

### move first char to end of word if it is a consonant
* input: "pig"
* output: "igp"

### move first consecutive char to end of word if they are consonants
* input: "translator"
* output: "anslatortr"

### add "ay" to end of word that had starting consonants moved
* input: "pig"
* output: "igpay"

### if leading consonants have char q return following char
* input: "squeal"
* output: "u"

### if char q function return u add u to consonants being moved
* input: "squeal"
* output: "ealsqu"

### if word begins with "y" add to consonants being moved
* input: "you"
* output: "ouy"

### make it work with sentence
* input: "Pig Latin Translator"
* output: "igPay atinLay anslatorTray"

### description
* input:
* output:
