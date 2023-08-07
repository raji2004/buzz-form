const form = document.getElementById('form')


form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    console.log(data)
    const res = await axios.post('https://buzzbackend1.vercel.app/deleteaccount', { ...data })
    console.log(res)
    alert("Your account deletion request has been received and is being processed. Please note that account deletion is permanent. If you change your mind, please contact our support team immediately at [buzzappng@gmail.com].Note account will be deleted in 1-3 days.")
    form.reset()
    



})
async function sendData(data) {
    try {

        
        console.log(res)
        
        
       
       


        return res
    } catch (error) {
        console.log(error.response)
        return error.response
    }
}
// async function sendMail(data) {
//     const res = await axios.put('https://server-flax-pi.vercel.app', { ...data })
//     return res
// }