import {useState} from 'react'
import Router from 'next/router'
import useRequest from '../../hooks/use-request'

export default function signup () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {errors, doRequest} = useRequest(
    {
      url: '/api/users/signin',
      method: 'post',
      body: {
        email, password
      },
      onSuccess: () => {Router.push('/')}
    }
  )

  const onSubmit = async (e) => {
    e.preventDefault()

    await doRequest()

  }

  return <form
    onSubmit={onSubmit}
  >
    <h1>
      Sign in
    </h1>
    <div className="form-group">
      <label>
        Email Address
      </label>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className="form-control"
      />
    </div>
    <div className="form-group">
      <label>
        Password
      </label>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        className="form-control"
        type="password"
      />
    </div>
    {
      errors
    }
    <button
      className="btn btn-primary"
    >
      Sign in
    </button>
  </form>
}