import axios from "axios"

const startUrl = "https://api-gadangs.ingriagroup.com/api/"
const AuthStr = '4|b8pMef7XxUgZnKL0yMlp5QpwufTgpkyCo91GB38b'; 

const ApiController = async info => {
    let apiLink = startUrl + info['endpoint']
    if(info['method'] == 'GET'){
        try{
            const resp = await axios.get(apiLink, { headers: { Authorization: "Bearer " + AuthStr } })
            return resp
        }catch(err){
            console.log(err)
        }
    } else if(info['method'] == 'POST'){
        // console.log("test")
        // console.log(info['datas'])
        // console.log(info['sendForm'])
        // try{
        //     const resp = await axios.post(apiLink, info['datas'], { headers: { Authorization: "Bearer " + AuthStr } })
        //     return resp
        // }catch(err){
        //     console.log(err)
        // }

        if(info['sendForm'] != null ){
            let head = info['datas']
            try{
                // const resp = await axios.post(apiLink, info['datas'], {headers: {"Content-Type": "multipart/form-data", Authorization: "Bearer " + AuthStr }})
                const resp = await axios.post(apiLink, info['datas'], { headers: { Authorization: "Bearer " + AuthStr } })
                return resp
            }catch(err){
                console.log(err)
            }
        } else if(info['datas'] == null) {
            try{
                const resp = await axios.post(apiLink, { headers: { Authorization: "Bearer " + AuthStr } })
                return resp
            }catch(err){
                console.log(err)
            }
        }else{
            console.log(info['datas'])
            try{
                const resp = await axios.post(apiLink, info['datas'], { headers: { Authorization: "Bearer " + AuthStr } })
                return resp
            }catch(err){
                console.log(err)
            }
        }
    }
}

export default ApiController
