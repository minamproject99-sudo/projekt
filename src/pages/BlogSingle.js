import './Blog.css';
import post from '../components/zadaci/data/blogsingle.json';

console .log(post);

const BlogSingle = () => {
  return (
    <div className="blog-single">
        <div className="masthead" style={{ backgroundImage: "url('img/mladen-grdovic-1.jpeg')" }}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="post-heading">
                            <h1>{post.title.rendered}</h1>
                            <h2 className="subheading"></h2>
                            <span className="meta">
                                Autor:
                                <a href="#!">{post._embedded?.author?.[0]?.name}</a>,
                                {new Date(post.date).toLocaleDateString("hr-HR")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
            </div>
        </div>
    </div>
        </article>
    </div>
  );
};

export default BlogSingle;