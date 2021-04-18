import React from "react"
import TwitterIcon from "../reusables/TwitterIcon"
import FacebookIcon from "../reusables/FacebookIcon"
import YoutubeIcon from "./YoutubeIcon"
import useTabIsUsed from "../../hooks/useTabIsUsed"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"
const Social = () => {
  const tabIsUsed = useTabIsUsed()

  return (
    <>
      <h4 className="text-xl font-light">CONTACT US VIA EMAIL</h4>
      <ul className="mt-4 space-y-4 font-light">
        <li>
          <a
            href="https://www.google.com/maps/place/Berlin/"
            target="_blank"
            rel="noreferrer"
            aria-label="based in berlin"
            className={`mr-4 ${getClassNamesByTabIsUsedState(tabIsUsed)}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          Based in Berlin
        </li>
        <li>
          <a
            href="mailto:enter@lichtpiraten.net"
            target="_blank"
            rel="noreferrer"
            aria-label="General Enquiries"
            className={`mr-4 ${getClassNamesByTabIsUsedState(tabIsUsed)}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
          General Enquiries
        </li>
      </ul>
      <h4 className="text-xl font-light mt-24">GET SOCIAL</h4>
      <ul className="mt-4 font-light flex">
        <li className="border p-2">
          <a
            href="https://twitter.com/lichtpiraten/"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className={`block ${getClassNamesByTabIsUsedState(tabIsUsed)}`}
          >
            <TwitterIcon className="w-5" />
          </a>
        </li>
        <li className="border px-2 pt-1">
          <a
            href="https://www.facebook.com/lichtpiraten/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className={`block ${getClassNamesByTabIsUsedState(tabIsUsed)}`}
          >
            <FacebookIcon className="w-5" />
          </a>
        </li>
        <li className="border p-2">
          <a
            href="https://www.youtube.com/user/LICHTPIRATEN/"
            target="_blank"
            rel="noreferrer"
            aria-label="You Tube"
            className={`block ${getClassNamesByTabIsUsedState(tabIsUsed)}`}
          >
            <YoutubeIcon className="w-5" />
          </a>
        </li>
      </ul>
    </>
  )
}

export default Social
