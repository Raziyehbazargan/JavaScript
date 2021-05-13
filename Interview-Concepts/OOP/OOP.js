
//Facory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);
circle.draw();


//Constructor function : preffered approach
function Circle(radius) {
    //'this' is a refrence to the object executing the code.

    //Abstraction
    let defaultLocation = {x: 0, y :0};
    let computeOptimumLocation = function() {
        console.log('Nope')
    };

    this.radius = radius;  
    this.draw = function() {
        computeOptimumLocation();
        //defaultLocation

        console.log('draw 2 ');
    }

    //define getter & setter
    Object.defineProperty(this, 'defaulLocation', {
        get: function() {
            return defaultLocation;
        },

        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location');

            defaultLocation = value;
        }
    })
}

const another = new Circle(10);
another.draw();



//Practice-------------------------------------------------------------------------
function StopWatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function() {
        if (running) 
            throw new Error('Stopwatch has already started.');

        running = true;
        startTime = new Date();
    }
    this.stop = function () {
        if (!running) 
            throw new Error('Stopwatchis not started.');

        running = false;
        endTime = new Date();
        const seconds = (endTime .getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        },
        set: function(value) {

        }
    })
}

//--------------------------------------------------------------------------
for (let key in another) {
    if (typeof circle[key] != 'function')
        console.log(key, another[key]);
}

const keys = Object.keys(another);
console.log(keys);

if ('radius' in another)
    console.log('Circle has a radius');