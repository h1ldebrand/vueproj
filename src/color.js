export default {
    bind(el, bindings, vnode){

        const arg = bindings.arg;

        el.style[arg] = bindings.value

        const fontModifier = bindings.modifiers['font'];

        if(fontModifier){
            el.style.fontSize = '30px';
        }

    }
}
