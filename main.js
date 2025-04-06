

const getAdvice = async() =>{
try{
 const response = await axios.get(
    "https://api.adviceslip.com/advice"
 )
 const data = response.data.slip
 let dataId = data.id
 let oneAdvice = data.advice

 const adviceId = document.querySelector('span_for_id')
 const advice = document.querySelector('.advice')


 advice.innerText = oneAdvice 
 adviceId.innerText = dataId

}catch{

}
}

getAdvice()
