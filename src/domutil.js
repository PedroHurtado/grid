export function createElement(domNodetype) {
    return document.createElement(domNodetype);
}
export function classList(domNode, classList) {
    (classList || []).forEach(cl => {
        domNode.classList.add(cl);
    });

}
export function appendChilds(domNode, domNodes) {
    (domNodes || []).forEach(n => {
        if (Array.isArray(n)) {
            appendChilds(domNode, n);
        } else {
            domNode.appendChild(n.render());
        }
    });
}
export function setWidth(domNode, width) {
    domNode.style.width = `${width}px`
}
export function createTextContent(domNode, text) {
    let domNodeText = document.createTextNode(text)
    domNode.appendChild(domNodeText);
}

export function updateElement(oldNode, newNode) {
    let parent = oldNode.parentNode;
    parent.insertBefore(newNode, oldNode.nexSibiling);
}
export function removeNode(node) {
    node && node.remove();
}