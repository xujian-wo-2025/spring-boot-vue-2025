import request from '@/utils/request.js'


export const userRegisterService = (registerData) => {
  //借助于UrlSearchParams完成传递
  const params = new URLSearchParams()
  for (let key in registerData) {
    params.append(key, registerData[key]);
  }
  return request.post('/user/register', registerData)
}

