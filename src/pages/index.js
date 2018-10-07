import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>
      I am{' '}
      <a href="https://geekysrm.github.io" target="_blank">
        Soumya Ranjan Mohanty
      </a>{' '}
      (@geekysrm on the web)
    </p>
    I am a fullstack web developer with knacks in blockchain technology.
    <br />
    Feel free to get in touch with me on{' '}
    <a href="https://linkedin.com/in/geekysrm">LinkedIn</a>,{' '}
    <a href="https://twitter.com/geekysrm">Twitter</a> or{' '}
    <a href="mailto:soumyarnm@gmail.com">e-mail</a>.<br />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
