import React from 'react'
import { Link } from 'gatsby'

import '../../../styles/pages/products/tidbcloud/public-preview.scss'

import SEO from '../../../components/seo'
import Layout from '../../../components/layout'
import PrimaryButton from '../../../components/primaryButton'

const PublicPreview = () => {
  const className = `PublicPreview`
  return (
    <Layout>
      <SEO
        title="TiDB Cloud Public Preview"
        description="What you can expect from TiDB Cloud’s Public Preview"
      />
      <article className="PingCAP-PublicPreview">
        <div className={`${className}`}>
          <h1>What you can expect from TiDB Cloud’s Public Preview</h1>
          <div className={`${className}-summary`}>
            <p>
              We welcome you to try out TiDB Cloud during our Public Preview.
              Feel free to deploy it in your applications, backend services or
              database workloads to see what benefits TiDB Cloud can bring to
              your workloads.
            </p>
            <p>
              During this time as we strive to improve our service, certain
              special terms and conditions apply:
            </p>
          </div>
          <ul>
            <li>
              We reserve the right to change, evolve or even discontinue certain
              features or functions of TiDB Cloud.
            </li>
            <li>
              Our production-level Service Level Agreement guarantees do not
              apply to any TiDB Cloud databases during the Public Preview. As
              such, we do not recommend that you place any mission critical
              workloads on TiDB Cloud at this time.
            </li>
            <li>
              Your feedback on our features is greatly appreciated. If you
              encounter any issues, please file a ticket at support.pingcap.com
              or contact us directly at{' '}
              <Link href="mailto:tidbcloud-support@pingcap.com">
                tidbcloud-support@pingcap.com
              </Link>{' '}
              .
            </li>
          </ul>
          <div className={`${className}-button`}>
            <PrimaryButton
              color="primary"
              as={Link}
              to="/products/tidbcloud/trial"
            >
              Try TiDB Cloud for Free
            </PrimaryButton>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default PublicPreview
