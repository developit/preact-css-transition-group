export function getKey(vnode) {
	return vnode.attributes && vnode.attributes.key;
}

export function getComponentBase(component) {
	return component.base;
}

export function onlyChild(children) {
	return children && children[0];
}

export function filterNullChildren(children) {
	return children && children.filter(i => i !== null);
}

export const requestAnimationFrame = (callback) => {
	if (typeof window !== 'undefined' && window.requestAnimationFrame) {
		window.requestAnimationFrame(callback);
	}
	else {
		setTimeout(callback, 17);
	}
};