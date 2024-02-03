function showDate() {
    var dateText = document.getElementById('date').querySelector('span');
    dateText.innerHTML = 'Sunday, December 24th at 6:00 PM at <a href="https://www.google.com/maps/dir//30000+Ipoh,+Perak/@4.6035861,100.9980583,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31caec866f3f8e0b:0x67902144044e6081!2m2!1d101.0804603!2d4.6035908?entry=ttu" target="_blank">Kinta Riverwalk</a>';

    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    var mapContainer = document.getElementById('mapContainer');
    var mapHTML = '<iframe width="450" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/dir//30000+Ipoh,+Perak/@4.6035861,100.9980583,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31caec866f3f8e0b:0x67902144044e6081!2m2!1d101.0804603!2d4.6035908?entry=ttu" allowfullscreen></iframe>';
    mapContainer.innerHTML = mapHTML;
}