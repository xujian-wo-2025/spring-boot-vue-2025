import axios from 'axios'

//获取所有文章的函数
export async function articleGetAllservice() {
  return await axios
    .get('http://localhost:8080/article/getAll')
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log(err)
    })
}

export async function articleSearchService(conditions) {
  return await axios
    .get('http://localhost:8080/article/search', { params: conditions })
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log(err)
    })
}