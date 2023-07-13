import  gyphiApi  from "./bases/11-axios"

const getImage = async() => {
    try {
        const {data} = (await gyphiApi.get('/random')).data
        const { url }= data.images.original
            
        console.log(url)


        const img = document.createElement("img")
        img.src = url

        document.body.append(img)
        
    }
     catch (error) {
        console.log("Error en la peticion");
        throw error
    }
}

getImage()