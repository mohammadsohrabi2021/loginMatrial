
export const Login=(username,password)=>{
    return new Promise((resolve,reject)=>{
        if(username==='sohrabi'&&password==="6333667"){
            setTimeout(()=>{
                resolve({
                    name:"sohrabi",
                    age:'21',
                    country:'iran'
                })
            },5000)
 
        }else{
            reject('invalid username or password')
        }

    })
}