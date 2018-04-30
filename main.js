button.addEventListener('click',(e) => {
    let request = new XMLHttpRequest()
    request.open('post', '/xxx')
    request.setRequestHeader('content-type', 'x-www-form-url-encoded')
    request.send('a=1&b=2')
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                let string = request.responseText
                console.log(string)
                let object = window.JSON.parse(string)
            }else if(request.status > 400){
                console.log(请求失败)
            }
        }
    }
})