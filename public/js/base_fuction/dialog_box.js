let dialog_animation = (element,fadeOut_name,timeout)=>{
    new Promise((res,rej)=>{
        element.style.display = 'flex'
        element.classList.add(fadeOut_name)
        setTimeout(() => {
            res()
        }, timeout);
    }).then(()=>{
        element.style.display = 'none'
        element.classList.remove(fadeOut_name);
    })
}
