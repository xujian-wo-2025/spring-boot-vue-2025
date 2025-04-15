import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token.js'
//文章分类列表查询
export const articleCategoryListService = () => {
  //const tokenStore = useTokenStore()
  //return request.get('/category', { headers: { 'Authorization': tokenStore.token } })
  return request.get('/category')

}

//文章分类添加
export const articleCategoryAddService = (categoryData) => {
  return request.post('category', categoryData)
}

//文章分类修改
export const articelCategoryUpdateService = (categoryData) => {
  return request.put('/category', categoryData)
}