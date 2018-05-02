window.jQuery.ajax = function({url, method, body, headers}){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest()
      request.open(method, url) // 配置request
      for(let key in headers) {
        let value = headers[key]
        request.setRequestHeader(key, value)
      }
      request.onreadystatechange = ()=>{
        if(request.readyState === 4){
          if(request.status >= 200 && request.status < 300){
            resolve.call(undefined, request.responseText) //成功调用resolve
          }else if(request.status >= 400){
            reject.call(undefined, request)  //失败调用reject
          }
        }
      }
      request.send(body)
    })
  } //返回值是一个Promise实例对象，这个实例对象有then属性
  
  myButton.addEventListener('click', (e)=>{
    window.jQuery.ajax({
      url: '/xxx',
      method: 'get',
      headers: {
        'content-type':'application/x-www-form-urlencoded',
        'jack': '18'
      }
    }).then(
      (text)=>{console.log(text)}, //成功时执行第一个参数
      (request)=>{console.log(request)} //失败时执行第二个参数
    )
  })