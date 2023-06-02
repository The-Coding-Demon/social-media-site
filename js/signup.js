const theForm = document.querySelector('#userSignup')

const handleSubmit = (e) => {
    e.preventDefault()
    const nameBox = document.querySelector('#userBox').value
    const passBox = document.querySelector('#passBox').value

    console.log(nameBox)
    console.log(passBox)
}

theForm.addEventListener("submit",handleSubmit)