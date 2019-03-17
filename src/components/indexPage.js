import React from "react"
import Layout from "../components/layout"

const indexPage = data => {
  return (
    <>
      <Layout>{getPosts(data)}</Layout>
    </>
  )
}

export default indexPage
