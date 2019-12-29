import axios from 'axios'

const url = 'http://localhost:3001'

const login = async (username, password) => {
  const users = await axios.get(`${url}/users`)
  const user = users.data.find(user => user.username === username)
  console.log(user)
  if(!user) return Promise.reject()
  if(password !== user.password) return Promise.reject()
  return Promise.resolve()
}

const register = async (username, password) => {
  console.log(username)
  const res = await axios.post(`${url}/users`, {
    username: username,
    password: password
  })
  console.log(res)
  return res.data
}

const createLink = async (link) => {
  const res = await axios.post(`${url}/links`, {
    link: link
  })
  return res.data
}

const getLinks = async () => {
  const res = await axios.get(`${url}/links`)
  return res.data
}

export default {login, register, createLink, getLinks}