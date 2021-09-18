import React from "react"
import SEO from '../components/seo'
import Layout from "../containers/layout/layout"
import Header from '../containers/layout/header'
import Footer from '../containers/layout/footer'
import AuthorArea from '../containers/home/author-area'
import FeaurePostArea from '../containers/home/feature-post-area'
import RecentPostArea from '../containers/home/recent-post-area'
import InstagramArea from '../containers/global/instagram'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header/>
    <div className="main-content">
      <AuthorArea/>
      <FeaurePostArea/>
      <RecentPostArea/>
      <InstagramArea/>          
    </div>
    <Footer/>
  </Layout>
)

export default IndexPage
