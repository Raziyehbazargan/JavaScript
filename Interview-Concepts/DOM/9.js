//Question: Create a button that is destroyed by clicking on it but two new buttons are created in it's place.

<div id="doubleHolder">
  <button class="double">double</button>
</div>

/*
Answer: One way of solving is to attach a event handler with the button to destroy itself and append two. 
However, we can leverage event delegate. If we attach the event hander to the parent div instead of the button itself. 
We don't have to add the event handler to each button we create. So, we will take advantage of event bubbling.

Try to be Smart: If both the newly created button is identical to one we are destroying, why interviewer 
wants to destroy exactly similar one and then create one. Why not just add one. And end result would be same, 
you will have two two buttons.

Interviewer: I just want to see whether you can destroy any element. Make sure when you are destroying, 
there is no reference to the element, otherwise, you will have memory leak. 
If interviewer, says ok, just create one more button on click, then use your brain to change the following code.
*/

document.getElementById('doubleHolder').addEventListener('click', function(e) {
    let currentBtn = e.target;
    if (currentBtn.classList.contains('double')) {
        let btn1 = createButton();
        let btn2 = createButton();

        this.append(btn1, btn2);
        this.removeChild(currentBtn);
    }
});

function createButton() {
    let btn = document.createElement('button');
    btn.setAttribute('class', 'double');
    btn.innerHTML = 'double';

    return btn;
}