import {getAllUsers,getAllArticles,NumberUsers,getHistorique,getExistUsers,getAdmin} from '../../../redux/actions/index'


import axios from "axios"

//get all users from Api
export function getUsersFromApi(){
    return (dispatch)=>
    axios.get("http://localhost:4000/lital/users",{withCredentials:true}).then(rep=>{
        dispatch(getAllUsers(rep.data))

        })

}
//get all articles from Api
export function getArticlesFromApi(){
    return (dispatch)=>
    axios.get("http://localhost:4000/lital/articles",{withCredentials:true}).then(rep=>{

        if(rep.data==="error"){
            window.location.href='/'
        }
        else
        dispatch(getAllArticles(rep.data))
        
        }) .catch(err=>console.log(err))
}
//add article in api
export function exist(){
    return (dispatch)=>
    axios.get("http://localhost:4000/lital/users/profil",{withCredentials:true}).then(res=>dispatch(getAdmin(res.data)))}

export function Addarticles(reference,name,colection,type,mesures,quantity,couleur,protoypeOuProduit,marque,carton,commentaire,articleImage,nameuser,action){
    return ()=>
     axios.post("http://localhost:4000/lital/articles",{reference,name,colection,type,mesures,quantity,couleur,protoypeOuProduit,marque,carton,commentaire,articleImage})
     .then(rep=>{
        window.location.reload()
        axios.post("http://localhost:4000/lital/historique/",{reference,action,nameuser,articleImage}).then(res=>console.log(res.data))
        window.location.reload()
        }).catch(err=>console.log(err)) 
        
    }



//Edite Article
export function EditeArticle(id,reference,name,colection,type,mesures,quantity,couleur,protoypeOuProduit,carton,marque,articleImage,commentaire,action,nameuser){
    return ()=>
     axios.put(`http://localhost:4000/lital/articles/${id}`,{reference,name,colection,type,mesures,quantity,couleur,protoypeOuProduit,marque,carton,commentaire,articleImage},{withCredentials:true}).then(rep=>{
        
        window.location.reload()
        axios.post("http://localhost:4000/lital/historique/",{reference,articleImage,action,nameuser}).then(res=>console.log(res.data))
        window.location.reload()
        }).catch(err=>console.log(err)) 
}
export function Auth(email,password){
    return (dispatch)=>
     axios.post("http://localhost:4000/lital/login",{email,password}, {withCredentials:true}).then(rep=>{
        dispatch(getExistUsers(rep.data))
        
        console.log(rep.data)
        

        }).catch(err=>console.log(err)) 

}

export function logout(token){
    return ()=>
     axios.post(`http://localhost:4000/lital/logout`,{}, {withCredentials: true
        }).then(rep=>{
            console.log(rep.data)
 if (rep.data==="ok") {
       window.location.href="/"
    }        }).catch(err=>console.log(err)) 

}

export function AddUsers(name,lastname,email,password){
    return ()=>
     axios.post("http://localhost:4000/lital/users/",{name,lastname,email,password}).then(rep=>{
        
        window.location.reload()
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function DeleteUsers(id){
    return ()=>
     axios.delete(`http://localhost:4000/lital/users/${id}`).then(rep=>{
        console.log(rep.data)
        window.location.reload()
         

        }).catch(err=>console.log(err)) 

}
//delete Articles


export function DeleteArticles(id,reference,articleImage,action,nameuser){
    return ()=>
     axios.patch(`http://localhost:4000/lital/articles/${id}`,{quantity:0},{withCredentials:true}).then(rep=>{
        console.log(rep.data)
        window.location.reload()
        axios.post("http://localhost:4000/lital/historique/",{reference,articleImage,action,nameuser}).then(res=>console.log(res.data))
        window.location.reload()
        }).catch(err=>console.log(err)) 

}

export function EditUsers(id,name,lastname,email,password){
    return ()=>
     axios.put(`http://localhost:4000/lital/users/${id}`,{name,lastname,email,password},{withCredentials:true}).then(rep=>{
        
        window.location.reload()
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function getNumberUsers(){
    return (dispatch)=>
    axios.get("http://localhost:3004/numberAddUsers").then(rep=>{
        dispatch(NumberUsers(rep.data))
        })

}
export function IncrementNumberAddUsers(id,data1){
    return ()=> 
     axios.patch(`http://localhost:3004/numberAddUsers/${id}`,{number:data1}).then(rep=>{
         
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function getHistoriquefromApi(){
    return (dispatch)=>
    axios.get("http://localhost:4000/lital/historique",{withCredentials:true}).then(rep=>{
        dispatch(getHistorique(rep.data))
        })
    }
   

        export function deleteHistorique(id){
            return ()=>
             axios.delete(`http://localhost:4000/lital/historique/${id}`,{withCredentials:true}).then(rep=>{
                console.log(rep.data)
                window.location.reload()
                }).catch(err=>console.log(err)) 
        }

        export function deleteAllHistorique(){
            return ()=>
             axios.delete('http://localhost:4000/lital/historique/',{withCredentials:true}).then(rep=>{
                console.log(rep.data)
                window.location.reload()
                }).catch(err=>console.log(err)) 
        }