const adviceId = document.querySelector('span')
const div = document.querySelector('#button')



function clear(ele){
ele.innerText = ''
}



const randomAdvice = null

const getAdvice = async() =>{
try{
 const response = await axios.get(
    "https://api.adviceslip.com/advice"
 )
 const data = response.data.slip
 let dataId = data.id
 let oneAdvice = data.advice

 const adviceId = document.querySelector('span')
 const advice = document.querySelector('p')
 clear(advice)

 advice.innerText = oneAdvice 
 adviceId.innerText = dataId

}catch{

}
}

getAdvice()
