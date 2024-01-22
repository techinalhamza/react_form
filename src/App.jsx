import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: ''
  })
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleOnChange = (event) => {
    // console.log(event.target.value)
    // console.log(event.target.name)

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preVal) => {
      console.log(preVal)
      return {
        ...preVal,
        [name]: value
      }




      // if (name === 'fName') {
      //   return {
      //     fname: value,
      //     lname: preVal.lname,
      //     email: preVal.email,
      //     phone: preVal.phone
      //   }

      // }
      // else if (name === 'lName') {
      //   return {
      //     fname: preVal.fname,
      //     lname: value,
      //     email: preVal.email,
      //     phone: preVal.phone
      //   }
      // }
      // else if (name === 'email') {
      //   return {
      //     fname: preVal.fname,
      //     lname: preVal.lname,
      //     email: value,
      //     phone: preVal.phone
      //   }
      // }
      // else if (name === 'phone') {
      //   return {
      //     fname: preVal.fname,
      //     lname: preVal.lname,
      //     email: preVal.email,
      //     phone: value
      //   }
      // }
    })

  }

  const submit = (event) => {
    event.preventDefault()
    setName(fullName.fname)
    setLastName(fullName.lname)
    setEmail(fullName.email)
    setPhone(fullName.phone)
    
    if (fullName.fname === '') {
      alert('please enter your name')
    }
    else if (fullName.lname === '') {
      alert('please enter your last name')
    }
    else if (fullName.email === '') {
      alert('please write your email')
    }
    else if (fullName.phone === '') {
      alert('please write your phone num')
    }
    else {
      alert('form submit successfully 👍')
    }

  }


  return (
    <>
      <h1 className='capitalize text-white '>hello {name} {lastName} </h1>
      <p className='mt-5'>{email}</p>
      <p className='mb-5'>{phone}</p>
      <form onSubmit={submit} >
        <input
          type="text"
          name='fname'
          placeholder='enter your name here'
          className='capitalize border border-none outline-none w-full px-9 py-3 rounded'
          onChange={handleOnChange}
          value={fullName.fname}

        />
        <br />
        <input
          type="text"
          name='lname'
          placeholder='enter your last name here'
          className='capitalize border border-none outline-none w-full px-9 py-3 rounded mt-5'
          onChange={handleOnChange}
          value={fullName.lname}

        />

        <br />
        <input
          type="email"
          name='email'
          placeholder='enter your last email here'
          className='capitalize border border-none outline-none w-full px-9 py-3 rounded mt-5'
          onChange={handleOnChange}
          value={fullName.email}

        />
        <br />
        <input
          type="number"
          name='phone'
          placeholder='enter your  phone num here'
          className='capitalize border border-none outline-none w-full px-9 py-3 rounded mt-5'
          onChange={handleOnChange}
          value={fullName.phone}

        />
        <button className='block m-auto mt-5 bg-yellow-200 border border-none outline-none' type='submit' >submit</button>
      </form>
    </>
  )
}

export default App
