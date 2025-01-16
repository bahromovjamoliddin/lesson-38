const parentUL = document.querySelector('.parentUl');
const li = parentUL.children;

for (const child of li) {
 
       child.addEventListener('click',(event)=>{
        for (const item of li) {
            item.classList.remove("selected")
        }
       child.classList.toggle("selected")
       if (event.ctrlKey  || event.metaKey) {
        child.classList.remove('selected')
       }
       child.onmousedown = ()=> false;
    })
  
}

    







