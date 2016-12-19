function myWheel(obj,callBack) {
	obj.addEventListener('DOMMouseScroll',wheelFn);
	obj.addEventListener('mousewheel',wheelFn);
	
	function wheelFn(ev){
		var down = true;
		if(ev.detail) {
			down = ev.detail < 0 ? true : false;
		} else {
			down = ev.wheelDelta > 0 ? true : false;
		}
		
		if(callBack && typeof callBack === "function") {
			callBack(down);
		}
		ev.preventDefault();
	}
}