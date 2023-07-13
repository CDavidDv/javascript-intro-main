import axios from 'axios';

const apiKey = '65RkcNxwuqgwOiTSzcLBnZJuQirAkOOd';
// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
const gyphiApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default gyphiApi;
// gyphiApi.get('/random')
// .then(resp=>{

//     const {data } = resp.data
//     const {url} = data.images.original 
//     // console.log(resp.data.data.images.original.url)


//     // const {url} = resp.data.data.images.original
    
    

//     const img = document.createElement("img")
//     img.src = url

//     document.body.append(img)
// })

