var randomReplacements = ['white nationalism movement', 'white supremacy movement', 'white nationalism', 'white supremacy']

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/alt-right/gi, randomReplacements[Math.floor(Math.random() * randomReplacements.length)]);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}