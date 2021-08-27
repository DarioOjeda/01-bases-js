const apiKey = 'uP0RyN5oOVOLQhfCseOKY0fn1jRLdt4i'

// https://api.giphy.com/v1/gifs/random?api_key=uP0RyN5oOVOLQhfCseOKY0fn1jRLdt4i

fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` )
    .then( resp => resp.json() )
    .then( ({data}) => {
        const { url } = data.images.original


        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })
    .catch(console.log)