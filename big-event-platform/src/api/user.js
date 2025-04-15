import request from '@/utils/request.js'


//注册接口的函数调用
export const userRegisterService = (registerData) => {
  //借助于UrlSearchParams完成传递
  const params = new URLSearchParams()
  for (let key in registerData) {
    params.append(key, registerData[key]);
  }
  return request.post('/user/register', params)
}



//登入接口的函数调用
export const userLoginService = (loginData) => {
  const params = new URLSearchParams()
  for (let key in loginData) {
    params.append(key, loginData[key]);
  }
  return request.post('/user/login', params)
}

