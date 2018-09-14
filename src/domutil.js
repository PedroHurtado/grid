export function createElement(nodetype){
    return document.createElement(nodetype);
}
export function classList(node,classList){
    (classList||[]).forEach(cl=>{
        node.classList.add(cl);
    });
    
}
export function appendChilds(node,nodes){
    (nodes||[]).forEach(n=>{
        let newNode = n.render();
        node.appendChild(newNode);
    });
}
export function setWidth(node,width){
    node.style.width = `${width}px`
}
export function textContent(node,text){
    node.textContent = text;
}