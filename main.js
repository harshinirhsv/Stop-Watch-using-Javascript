<!DOCTYPE html>
<html>

<head>
    <title>JavaScript StopWatch</title>
    <style>
        #stopwatch-container {
            font-family: Courier;
            width: 600px;
            margin: 10% auto;
            padding: 5% 0;
            color: gold;
            text-align: center;
            background-color: indigo;
            box-shadow: 1px 0px 4px 2px #9c9a9a;
            border-radius: 20px;
        }

        #stopwatch {
            font-size: 100px;
            margin-bottom: 10px;
        }

        button {
            width: 100px;
            height: 30px;
            background-color: maroon;
            color: ivory;
            border-radius: 6px;
            border: 2px solid #fff;
            margin-left: 5px;
            margin-right: 5px;
        }

        button:hover {
            background-color: green;
            color: #202020;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div id="stopwatch-container">
        <h1>Stopwatch using JavaScript</h1>
        <div id="stopwatch">00:00:00</div>
        <button onclick="start(true)" id="start-btn">Start</button>
        <button onclick="pause()">Pause</button>
        <button onclick="reset()">Reset</button>
    </div>
    <script>
        var stopwatch = document.getElementById("stopwatch");
        var startBtn = document.getElementById("start-btn");
        var timeoutId = null;
        var ms = 0;
        var sec = 0;
        var min = 0;

        /* function to start stopwatch */
        function start(flag) {
            if (flag) {
                startBtn.disabled = true;
            }

            timeoutId = setTimeout(function() {
                ms = parseInt(ms);
                sec = parseInt(sec);
                min = parseInt(min);

                ms++;

                if (ms == 100) {
                    sec = sec + 1;
                    ms = 0;
                }
                if (sec == 60) {
                    min = min + 1;
                    sec = 0;
                }
                if (ms < 10) {
                    ms = '0' + ms;
                }
                if (sec < 10) {
                    sec = '0' + sec;
                }
                if (min < 10) {
                    min = '0' + min;
                }

                stopwatch.innerHTML = min + ':' + sec + ':' + ms;

                // calling start() function recursivly to continue stopwatch
                start();

            }, 10); // setTimeout delay time 10 milliseconds
        }

        /* function to pause stopwatch */
        function pause() {
            clearTimeout(timeoutId);
            startBtn.disabled = false;
        }

        /* function to reset stopwatch */
        function reset() {
            ms = 0;
            sec = 0;
            min = 0;
            clearTimeout(timeoutId);
            stopwatch.innerHTML = '00:00:00';
            startBtn.disabled = false;
        }
    </script>
</body>

</html>
