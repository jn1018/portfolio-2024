<!DOCTYPE html>
<html lang="en">
<head>
    <title>Jeff Nishihira Portfolio :: DRAWN</title>
    <link rel="stylesheet" href="./assets/css/styles.css">
</head>
<body data-barba="wrapper">

    <div class="loader"></div>

    <div class="home-wrap" data-barba="container" data-barba-namespace="home">
        <a href="./about.php">ABOUT</a>
        <h1 class="drawn">DRAWN</h1>
        <div id="anim-test"></div>
    </div>

<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@barba/core"></script>
<script src="./assets/js/dependencies.js"></script>
<script>

    function shuffle() {
        return gsap.to(".drawn", { x: 400, duration: 1});
    }

    function animLoop() {

        let i = 1;
        setInterval( function() { if (i <=5) {loadAnimations(i);} i++; }, 50 );
        function loadAnimations(i) {
            $('#anim-test').css('background-image', 'url("./assets/svg/line-svg-' + i + '.svg")');
        }
    }

    $(document).ready(function() {
        animLoop();
        shuffle();
    });


</script>
</body>
</html>