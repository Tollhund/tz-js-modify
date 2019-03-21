(	function(){
		const domain = "*";

		let wrapper  = document.createElement("div");
		let content = document.createElement("div");
		let iframeEl = document.createElement("iframe");
		let img = document.createElement("img");
		let iframeCont;
		
		document.body.setAttribute("style", "position: relative; height: 100%");
		iframeEl.src = "./frame/index.html";
		iframeEl.setAttribute("frameborder", 0);
		iframeEl.setAttribute("scrolling", "no");
		
		//Styling iframe
		iframeEl.setAttribute("style", 
			`width: 100% !important; 
			height: 100% !important;
			pointer-events: auto !important;
			position: realtive !important;
			opacity: 100 !important;
			` 
			)
		let iframeH = iframeEl.style.height;
		let iframeW = iframeEl.style.width;
		console.log(iframeH)

		content.append(iframeEl);
		wrapper.append(content);	
		document.body.append(wrapper);

		//Styling html, body
		//document.body.setAttribute("style", "height: 100%; min-height: 100%;");
		 

		window.onload = () => {
			iframeCont = document.getElementsByTagName("iframe")[0].contentWindow;
			//According to task circumstance of different domains. Messaging to iframe.
			iframeCont.postMessage('hello second page', domain);

			let main = document.getElementsByTagName("iframe")
			
			//Styling div container
			main[0].parentElement.parentElement.setAttribute("style", 
				`position: fixed !important; 
				bottom: 0;
				height: 25%;
				width: 100%;
				margin: auto !important;`);
			main[0].parentElement.setAttribute("style","height: 100%; margin: 0 !important;")
		}

})()