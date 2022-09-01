const minutes_element = document.getElementById("minutes");
const seconds_element = document.getElementById("seconds");
const miliseconds_element = document.getElementById("miliseconds");

let clock = {minutes: 00, seconds: 00, miliseconds: 00};
let clockIsCounting = false;
let timeout;

//----------------------------------------------------

function startc()
{
    if(clockIsCounting == false)
    {
        clockIsCounting = true;
        timeout = setInterval(loopTimer, 1);
    }
}

//----------------------------------------------------

function stopc ()
{
    clockIsCounting = false;
    clearInterval(timeout);
}

//----------------------------------------------------

function resetc()
{
    stopc();

    clock.minutes = 00;
    clock.seconds = 00;
    clock.miliseconds = 00;

    displayUpdateTimer();
}

//----------------------------------------------------

function loopTimer()
{
    updateTimer();
    displayUpdateTimer();

}


function displayUpdateTimer()
{
    minutes_element.innerText = clock.minutes <= 9? "0" + clock.minutes: clock.minutes;
    seconds_element.innerText = clock.seconds <= 9? "0" + clock.seconds: clock.seconds;
    miliseconds_element.innerText = clock.miliseconds <= 9? "0" + clock.miliseconds: clock.miliseconds;
}

function updateTimer()
{
    if(clock.miliseconds < 100)
    {
        clock.miliseconds++;
    }
    else
    {
        clock.miliseconds = 00;

        if(clock.seconds < 60)
        {
            clock.seconds++;
        }
        else
        {
            clock.seconds = 00;

            if(clock.minutes < 60)
            {
                clock.minutes++;
            }
            else
            {
                resetc;
            }
        }
    }
}