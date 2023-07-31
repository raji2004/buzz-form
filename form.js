const form = document.getElementById('form')


form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    console.log(data)
    // return sendData(data)



})
async function sendData(data) {
    try {

        const res = await axios.post('https://buzzbackend1.vercel.app/deleteaccount', { ...data })
        console.log(res)
        alert("sorry for not meeting your expectations")
        
       
       


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