const body=document.querySelector("body");

document.addEventListener('mousemove',(event)=>{
    const scratch=document.createElement('span');
    scratch.style.left=event.x-60 + "px";
    scratch.style.top=event.y-60 + "px";
    body.append(scratch);

    setTimeout(()=>{
        scratch.remove();
    },6000)
})