import React from 'react'
import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom'

const ViewAsset = () => {
  return (
    <div>
        <Layout> 
            <div>
                <span>
                   <Link to='/AddAssets'><button className='bg-sky-500 text-white p-2 rounded-lg float-right hover:scale-95'>Add Assets</button></Link> 
                </span>
            </div>
        </Layout>
    </div>
  )
}

export default ViewAsset