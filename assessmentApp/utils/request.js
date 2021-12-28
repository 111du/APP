import axios from 'axios'


//封装axios  创建一个新的axios的实例
const service = axios.create({
    timeout:1000 //超时时间限制
})

//设置请求拦截器
service.interceptors.request.use(
    //请求拦截器的回调
    (config) =>{
        //可以在这里设置携带的标识 如userTempId等
        return config
    },
)

//相应拦截器
service.interceptors.response.use(
    (response) =>{
        //成功的请求相应
        return response.data
    }, 
    (error) => {
        //失败的请求,进行统一处理
        alert('请求失败'+error.message)
        return new Promise(() =>{})
    }
)

export default service