( function() {
	window.addEventListener('message', messageListener, false);

    let img = document.createElement("img");

    let orientation = screen.orientation.type;
    document.body.append(img)
    let imgProp = document.getElementsByTagName("img")

    imgProp[0].setAttribute("style", "width: 100%;")

    // checkin screen orientation and inserting proper image
	if(orientation === "portrait-primary") {
		img.src = "portrait.png"
	} else {
		img.src = "landscape.png"
	}

	window.onload= () => imgProp[0].parentElement.style = "margin: 0;"

	//Listener for parent domain messages. According to task circumstances
    function messageListener(event) {
        //console.log(event.data);
    }

})()