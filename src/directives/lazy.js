import defaultGif from '@/assets/default.gif';
import eventBus from "@/eventBus";
import debounce from "@/utils/debounce";

let imgs = [];

function setImage(img){
    img.dom.src = defaultGif;
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if(rect.top >= -height && rect.top <= clientHeight){
        img.dom.src = img.src;
        imgs = imgs.filter(f => f !== img);
    }
}

function setImages(){
    for (const img of imgs) {
        setImage(img);
    }
}

function handleScroll(){
    setImages();
}

eventBus.$on('mainScroll', debounce(handleScroll, 50));
export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value,
        }
        imgs.push(img);
        setImage(img);
    },
    unbind(el) {
    }
}
