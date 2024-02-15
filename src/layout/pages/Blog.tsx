import Navbar from '../Navbar'
import BlogHeader from './Blog/BlogHeader'

const Blog = () => {
  return (<>
    <Navbar/>
    <div className="mx-auto max-w-[1980px] ">
        <BlogHeader/>
    </div>
    </>
  )
}

export default Blog