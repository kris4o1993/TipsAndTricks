//creating eventListener that works in all browsers

function addEventListener(element, eventType, callback) {
    //modern browsers (IE8 and above incl)
    if (document.addEventListener) {
        element.addEventListener(eventType, callback);
    }

    //some old browsers
    else if (document.attackEvent) {
        element.attachEvent('on' + eventType, callback);
    }

    //very old browsers
    else {
        element['on' + eventType] = callback;
    }
}

//example usage of the above
addEventListener(document.body, 'keydown', function () {

});

//-------------------------------------------------------------------------------------//

//using fragment to manipulate the DOM

function usingFragment() {
    var list = document.getElementById('SOME_ID'),
        listFragment = document.createDocumentFragment();
    count = 15;

    for (var i = 0; i < count; i += 1) {
        var item = document.createElement('li');
        item.innerHTML = 'Item #' + (i + 1);
        listFragment.appendChild(item);
    }
    list.appendChild(listFragment);
}

//------------------------------------------------------------------------------------------//

//random number between certain range

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
} //returns decimal number (ex. 1,323442)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} //returns whole number (example 333)


//------------------------------------------------------------------------------------------//

//getting maximum and minimum element from a collection of integers
//arr => collection of integers
max = Math.max.apply(null, arr);
min = Math.min.apply(null, arr);


//------------------------------------------------------------------------------------------//


//getting random color
function getRandomColor() {
        var red = Math.floor(Math.random() * 256),
            green = Math.floor(Math.random() * 256),
            blue = Math.floor(Math.random() * 256);

        return 'rgb(' + [red, green, blue].join(',') + ')';
    }


//------------------------------------------------------------------------------------------//

//tag clould creator (how to determine font size)
//you have a for loop that iterates through an array of tags and put them into fragment
//tags => array of tags
//count = tags.length
for (var i = 0; i < count; i++) {
    var item = document.createElement('span');
    item.innerHTML = tags[i];

    //very complicated formula. DO NOT TOUCH!
    //itemsInBiggestTag => how much times is repeated the most common tag
    //itemsInCurrentTag => how much times is repeated the currently iterated tag
    //maxFont => what is the maximum font size for the most common tag
    //minFont => what is the minimum font size for the least common tag
    item.style.fontSize = Math.floor(((itemsInCurrentTag / itemsInBiggestTag) * (maxFont - minFont)) + minFont) + 'px';

    tagCloud.appendChild(item);
}


//------------------------------------------------------------------------------------------//

//How to use Array.map

// Define the callback function.
function AreaOfCircle(radius) {
    var area = Math.PI * (radius * radius);
    return area.toFixed(0);
}

// Create an array.
var radii = [10, 20, 30];

// Get the areas from the radii.
var areas = radii.map(AreaOfCircle);

document.write(areas);

// Output:
// 314,1257,2827

//------------------------------------------------------------------------------------------//


//getting sum from an array of numbers
var marks = [2, 3, 4, 5, 6, 6, 4, 2, 3, 4, 4];
var sum = marks.reduce(function(a, b) { return a + b });

//------------------------------------------------------------------------------------------//

// getting unique GUID id
function getUniqueId() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
}
