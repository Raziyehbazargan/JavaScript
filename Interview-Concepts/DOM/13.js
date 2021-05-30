//We have given list elements in this example and asked to get image node of each list element. 
//We can use DFS algorithm to implement this task.



<div class="main">
  <div class="list1">
    <ul class="ul1">
      <li><a href="#"><img src=""/></a></li>
      <li><a href="#"><img src=""/></a></li>
      <li><a href="#"><img src=""/></a></li>
      <li><a href="#"><img src=""/></a></li>
    </ul>
    <ul class="ul2">
      <li><a href="#"><img src=""/></a></li>
      <li><a href="#"><img src=""/></a></li>
      <li><a href="#"><img src=""/></a></li>
      <li><a href="#"><img src=""/></a></li>
    </ul>
    <ul class="ul3">
      <li><a href="#"><img src=""/></a></li>
      <li><a href="#"><img src=""/></a></li>
      <li><a href="#"><img src=""/></a></li>
      <li><a href="#"><img src=""/></a></li>
    </ul>
  </div>
  <div class="list2"><span><p></p></span></div>
</div>


function findNodes(node, tagName) {
    let imagNodes = [];
    if (!node || !tagName) return imagNodes;
    
    function dfs(node) {
      if (node && node.tagName.toLowerCase() == tagName.toLowerCase())
            imagNodes.push(node);
    
      for (let i = 0; i < node.children.length; i++) {
        dfs(node.children[i]);
      }
    }

    dfs (node);
    return imagNodes;
}