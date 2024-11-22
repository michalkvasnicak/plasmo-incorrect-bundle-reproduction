import { useFarcasterIdentity } from "@frames.js/render/identity/farcaster"
import { useState } from "react"

// do Inspect Popup in chrome and see the error there
// if you comment this, then the extension will work
console.log(useFarcasterIdentity)

function IndexPopup() {
  const [data, setData] = useState("")

  console.log("test")

  return (
    <div
      style={{
        padding: 16
      }}>
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
