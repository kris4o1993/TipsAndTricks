//creating eventListener that works in all browsers

function addEventListener(element, eventType, callback) {
    //modern browsers (IE8 and above incl)
    if(document.addEventListener) {
        element.addEventListener(eventType, callback);
    } 
    
    //some old browsers
    else if(document.attackEvent) {
        element.attachEvent('on' + eventType, callback);
    } 
    
    //very old browsers
    else {
        element['on' + eventType] = callback;
    }
}

//example usage of the above
addEventListener(document.body, 'keydown', function() {
    
});

//------------------------------------------------------------------------------------------------------------//

//using fragment to manipulate the DOM

function usingFragment() {
    var list = document.getElementById('SOME_ID'),
        listFragment = document.createDocumentFragment();
        count = 15;
    
    for (var i = 0; i < count; i+=1) {
        var item = document.createElement('li');
        item.innerHTML = 'Item #' + (i+1);
        listFragment.appendChild(item);
    }
    list.appendChild(listFragment);
}

//------------------------------------------------------------------------------------------------------------//

//random number between certain range

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
} //returns decimal number (ex. 1,323442)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} //returns whole number (example 333)