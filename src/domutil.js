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
        if(Array.isArray(n)){
            appendChilds(node,n);
        }else
        {
            node.appendChild(n.render());
        }
    });
}
export function setWidth(node,width){
    node.style.width = `${width}px`
}
export function textContent(node,text){
    node.textContent = text;
}