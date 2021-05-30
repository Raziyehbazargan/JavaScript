//If you need to implement getElementByAttribute, how would you implement it?

function getElementByAttribute(attriute) {
    let allElements = document.getElementsByTagName('*'),
        element,
        found = [];

    for (let i = 0; i < allElements.length; i++) {
        element = allElements[i];
        if (element.getAttribute(attriute))
            found.push(element);
    }

    return found;
}

function getElementsByAttribute2(attr){
    var found = [], 
        child;
  
    function getNodeText(node){
        if(node && node.childNodes && node.childNodes.length){
            for(var i = 0, len = node.childNodes.length; i<len; i++){
                child = node.childNodes[i];
                if(child && child.getAttribute && child.getAttribute(attr)){
                   found.push(child);
                }
                getNodeText(child);
            }
        }
        else{
            if(node.getAttribute && node.getAttribute(attr)){
               found.push(node);
            }
       }
    }
    getNodeText(document.body);
    return found;
  }