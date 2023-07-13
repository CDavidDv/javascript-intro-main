const api_key = "65RkcNxwuqgwOiTSzcLBnZJuQirAkOOd";
//https://api.giphy.com/v1/gifs/random?api_key=65RkcNxwuqgwOiTSzcLBnZJuQirAkOOd

// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
//     .then(response => response.json().then(console.log(response)))


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
    .then(response => response.json()
    .then(({data}) => {console.log(data)
        const {url} = data.images.original

        
        const img = document.createElement("img")
        img.src = url

        document.body.append(img)
    
}))



