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

export const requestAnimationFrame = (() => {
	let raf;

	if (typeof window !== 'undefined') {
		raf = window.requestAnimationFrame;
		const prefixes = ['ms', 'moz', 'webkit', 'o'];
		for (let i = 0; i < prefixes.length; i++) {
			if (raf) break;
			raf = window[`${prefixes[i]}RequestAnimationFrame}`];
		}
	}

	if (!raf) {
		let timeLast = 0;
		raf = (callback) => {
			const timeCurrent = new Date().getTime();

			/* Dynamically set the delay on a per-tick basis to more closely match 60fps. */
			/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671. */
			const timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
			timeLast = timeCurrent + timeDelta;

			return setTimeout(() => { callback(timeCurrent + timeDelta); }, timeDelta);
		};
	}

	return raf;
})();
