//Question: How could you capture all clicks in a page?
//Answer: You can leverage, event bubble to capture all the clicks. As all the clicks will be bubbled up to the body.

document.querySelector('body').addEventListener('click', function(e){
    console.log('body clicked', e.target);
  });

//Question: How can you get all the texts in a web page?
//document.body.innerText;

//Question: Can you do by accessing DOM?
//Answer: Make it recursive. I used closure. There could be many other ways to implement.

function AllTexts(node) {
    var allTexts = [];

    function getNodeText(node) {
        if (node && node.childNodes && node.childNodes.length) {
            for (let i = 0; i < node.childNodes.length; i++) {
                getNodeText(node.childNodes[i]);
            }
        } else {
            allTexts.push(node.nodeValue);
        }
    }

    getNodeText(node);
    return allTexts.join('');
}
