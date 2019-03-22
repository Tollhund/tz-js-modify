( function() {
	window.addEventListener('message', messageListener, false);

    let img = document.createElement("img");

    let orientation = window.screen.orientation.angle;
    console.log(orientation);
    document.body.append(img)
    let imgProp = document.getElementsByTagName("img")
    let imgP = "portrait.png";
    let imgL = "landscape.png";

    document.documentElement.setAttribute("style", "height: 100%");
    document.body.setAttribute("style", "margin: 0; height: 100%;");
    imgProp[0].setAttribute("style", "width: 100%; height: 100%; display: block");

    // checkin screen orientation and inserting proper image
	if(orientation === 0 || orientation === 180) {
		img.src = "portrait.png"
        console.log(img);
	} else {
		img.src = "landscape.png"
        console.log(img);
	}

	//window.onload = () => imgProp[0].parentElement.style = "margin: 0;"

	//Listener for parent domain messages. According to task circumstances
    function messageListener(event) {
        //console.log(event.data);
    }

})()