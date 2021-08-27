import axios from 'axios'


const apiKey = 'uP0RyN5oOVOLQhfCseOKY0fn1jRLdt4i'
// https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi

// giphyApi.get('/random')
//     .then( resp => {

//         const { data } = resp.data
//         const { url } = data.images.original


//         const img = document.createElement('img')
//         img.src = url

//         document.body.append(img)
//     })
//     .catch(console.log())