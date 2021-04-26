import React from "react"
import { navigate } from "gatsby"
import useTabIsUsed from "../../hooks/useTabIsUsed"
import { css } from "styled-components"
import tw from "twin.macro"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"

const inputStyles = css`
  ${tw`mt-1 block w-full p-2 bg-gray-300 border-2 focus:border-accent focus:ring-0`}
`

const ContactForm = props => {
  const [state, setState] = React.useState({})
  const [valid, setValid] = React.useState(false)

  React.useEffect(() => {
    function isDirty(inputName) {
      return state?.[inputName]?.length > 0
    }
    if (isDirty("full-name") && isDirty("email") && isDirty("message")) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [state])

  const tabIsdUsed = useTabIsUsed()

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        setState({})
        navigate(form.getAttribute("action"))
      })
      .catch(error => {
        throw new Error(error)
      })
  }
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  return (
    <form
      {...props}
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <h4 className="text-xl font-light text-white">DROP US A LINE</h4>
      <div className="space-y-5 mt-5">
        <label className="block" htmlFor="full-name">
          <input type="hidden" name="form-name" value="contact" />
          <span className="sr-only">Full name: </span>
          <input
            type="text"
            placeholder="John Doe"
            id="full-name"
            name="full-name"
            css={inputStyles}
            onChange={handleChange}
          />
        </label>
        <label className="block" htmlFor="email">
          <span className="sr-only">Email address</span>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="john@example.com"
            css={inputStyles}
            onChange={handleChange}
          />
        </label>
        <label className="block" htmlFor="message">
          <span className="sr-only">Your Message</span>
          <textarea
            id="message"
            placeholder="Your message goes here..."
            name="message"
            rows="10"
            css={inputStyles}
            onChange={handleChange}
          ></textarea>
        </label>
        <button
          disabled={!valid}
          type="submit"
          className={`bg-accent px-2 py-1 w-32  ${
            !valid && "opacity-40 cursor-default"
          } ${getClassNamesByTabIsUsedState(tabIsdUsed)} focus:ring-white`}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
