import Navbar from '../Navbar'
import Articles from './Blog/Articles'
import BlogHeader from './Blog/BlogHeader'

const Blog = () => {
  return (<>
    <Navbar/>
    <div className="mx-auto max-w-[1980px] ">
        <BlogHeader/>
        <Articles/>
    </div>
    </>
  )
}

export default Blog