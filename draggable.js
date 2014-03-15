var dragObject = {}
document.onmousedown = function (e) {
	e = fixEvent(e);

	if (e.which != 1) {
		return
	};

	var elem = findDraggable(e.target, document);

	if(!elem) return;

	dragObject.elem = elem;

	dragObject.downX = e.pageX;
	dragObject.downY = e.pageY;
}
function findDraggable (event) {
	var elem = event.target;

	while(elem != document && elem.getAttribute('draggable') == null){
		elem = elem.parentNode;
	}
	return elem == document ? null : elem;
}