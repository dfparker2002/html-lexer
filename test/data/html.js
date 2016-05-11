
var samples = 
{ namedCharRefInData: 'char ref in &amp; data'
, nonTerminatedNamedCharRefInData: 'char ref in &amp data'
, hexadecimalCharRefInData: 'hexadecimal ref &#xccc; in data'
, nonTerminatedHexadecimalCharRefInData: 'hexadecimal ref &#xccc in data'
, decimalCharRefInData: 'decimal ref &#1092; in data'
, nonTerminatedDecimalCharRefInData: 'decimal ref &#110 in data'
, namedCharRefInAttribute: 'hello <input value="you &amp; me"/>'
, rcdata: '<textarea> asdf & &amp; <textareaNot </textarea>'
, rcdata2: '<textarea> asdf & &amp; </textarea('
, rcdata3: '<textarea> asdf & &amp; </textarea/'
, rcdata4: '<textarea> asdf & &amp; </textarea '
, rawtext: '<script> asdf &amp; <span> </script>'
, script: '<!doctype html>hello <script><!-- asdf</script> thus'
}


var EOFSamples =
{ data: 'eof in da'
, tagOpen: 'eof in <'
, tagName: 'eof in <d'
, selfClosingStartTag: 'in <div /'
, endTagOpen: 'in </a'
, beforeAttributeName: '<div '
, attributeName: '<div at'
, afterAttributeName: '<div attr '
, beforeAttributeValue: '<div attr ='
, attributeValueDoubleQuoted: '<div attr="te'
, attributeValueSingleQuoted: '<div attr=\'te'
, attributeValueUnquoted: '<div attr=te'
, afterAttributeValueQuoted: '<div attr="test"'
, markupDeclarationOpen: 'An eof in a markup decl <!'
, selfClosingTag: 'An eof after a / <span /'
, commentStart: 'An eof in a comment start <!--'
, commentStartDash: 'An eof in a comment start dash <!---'
, comment: 'An eof in a comment <!-- hello th'
, commentEndDash: 'An eof in a comment end dash <!-- hello th -'
, commentEnd: 'An eof in a comment end <!-- hello th --'
, commentEndBang: 'An eof in a comment end bang <!-- hello th --!'
, bogusComment: '<! bogus comment'
, charRefIn_: 'data &'
, numericCharRef: 'data &#'
, hexadecimalCharRef: 'data &#x'
, hexDigits: 'data &#x1a'
, decimalCharRef: 'data &#1'
, namedCharRef: 'data &name'
, rawtext: 'eof in raw text <script> funct'
, rawtextLessThanSign: 'eof in raw text less than sign <script> if (i<'
, rawtextEndTagOpen: 'eof in raw text end tag open <script> asdf </'
}


var weirdSamples = 
{ nonAlphaTag: 'This is not a <ém attr>tag</ém>'
, doubleOpenTag: 'A double less than sign <<div attr>content</div>'
, badEndTag: '<div style=color:blue> This is blue </ div> And this too!'
, comment1: 'comment <!-- with -> within -->'
, comment2: 'comment <!-- with bogus end -> la die da'
, comment3: '<!-- Comment with -- double dash within -->'
, comment4: '<!-- Comment with --!- weird stuff within -->'
, comment5: '<!-- Comment with strange end --!> and subsequent data'
, missingSpace: 'attribues connected <div name="a"name="b" >'
, nonAlphaAttr: 'weird template tag <div {name="a" name="b" >'
, bogus1: 'bogus comment <! with normal end -->'
, bogus2: 'bogus comment </ with normal end -->'
, bogus3: 'An empty bogus comment <!>'
, invalidMD: '<!weird markup declaration>'
, normalHtml: 'This is <span class = "s1">html</span> Yeah!'
, autocloseAttempt: 'This is <span / attr >html</span> Yeah!'
, unescapedAmp: 'data & such'
, unescapedAmpHash: 'data &# such'
, unescapedAmpHashEx: 'data &#x such'
, unescapedAmpHashExZed: 'data &#xz such'
, hexDigits: 'data &#xa such'
, decimalCharRef: 'data &#1 such'
, namedCharRef: 'data &name such'
, ampHash: 'data &amp;# such'
, weirdEquals: '<span attr = / asd >content</span>'
, weirdEquals2: '<span attr = @ asd >content</span>'
, weirdEquals3: '<span attr /= asd >content</span>'
, weirdEquals4: '<span attr @= asd >content</span>'
}


module.exports = 
{ samples: samples
, EOFSamples: EOFSamples
, weirdSamples: weirdSamples }