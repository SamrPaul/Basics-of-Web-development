<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .container{
        padding: 20;
        color:blueviolet;
        border: burlywood 20px;
        font-size: medium;
    }
    #time{
        font-size: larger;
    }
</style>
<body>
    <div class="container">
    Current Time is <span id="time"></span>
    </div>

    <script>
        function greet(msg,msg2)
        {
            console.log("Hi "+msg+msg2);
        }
        let timeout=setTimeout(greet,5000,"welcome to the site");
        console.log(timeout);
        clearTimeout(timeout);

        function dispTime()
        {
            let time=new Date();
            console.log(time);
            document.getElementById('time').innerHTML=time;
        }

        setInterval(dispTime,1000);
    </script>
    

</body>
</html>
