// minidom - a very tiny dom library (mainly for stardazed games)
// by Arthur Langereis - @zenmumbler
// https://github.com/zenmumbler/mini-dom
function $n(sel, base) { return Array.prototype.slice.call((base || document).querySelectorAll(sel), 0); }
function $(sel, base) {
    if (typeof sel === "string") {
        return $n(sel, base);
    }
    else if (sel instanceof Node) {
        return [sel];
    }
    else {
        return sel;
    }
}
function $1(sel, base) {
    return $(sel, base)[0];
}
function show(sel, disp) {
    $(sel).forEach(el => {
        el.style.display = (disp != null) ? disp : "block";
    });
}
function hide(sel) {
    $(sel).forEach(el => {
        el.style.display = "none";
    });
}
function setDisabled(sel, dis) {
    $(sel).forEach(el => { el.disabled = dis; });
}
function enable(sel) { setDisabled(sel, false); }
function disable(sel) { setDisabled(sel, true); }
function closest(sourceSel, sel) {
    let source = ($1(sourceSel));
    if (!source) {
        return undefined;
    }
    if (source.closest) {
        return source.closest(sel);
    }
    do {
        source = source.parentNode ? source.parentNode : undefined;
        if (!source || source.nodeType !== Node.ELEMENT_NODE) {
            return undefined;
        }
        const elem = source;
        const matchFn = elem.matches || elem.webkitMatchesSelector || elem.msMatchesSelector;
        if (matchFn.call(elem, sel)) {
            return elem;
        }
    } while (source);
    return undefined;
}
function nextElementSibling(elem) {
    while (elem) {
        elem = elem.nextSibling;
        if (elem && elem.nodeType === Node.ELEMENT_NODE) {
            return elem;
        }
    }
    return undefined;
}
// -- Events
function on(target, evt, handler) {
    const list = (target instanceof Window) ? [target] : $(target);
    list.forEach(tgt => { tgt.addEventListener(evt, handler); });
}
function off(target, evt, handler) {
    const list = (target instanceof Window) ? [target] : $(target);
    list.forEach(tgt => { tgt.removeEventListener(evt, handler); });
}

export { $n, $, $1, show, hide, setDisabled, enable, disable, closest, nextElementSibling, on, off };
