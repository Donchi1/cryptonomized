import Link from 'next/link'
import React from 'react'

function Blog() {
    return (
        <section id="blog" className="blog_area section-padding">
            <div className="container mx-auto">
                <div className="section-title text-center">
                    <h1>In the News</h1>
                    <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className="row text-center">
                    <div
                        className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
                    >
                        <div className="single_blog">
                            <div className="blog-img">
                                <img
                                    src="/assets/img/blog-1.jpg"
                                    className="img-fluid "
                                    alt="mage"
                                />
                                <Link href="#">July 28, 2021</Link>
                            </div>
                            <span>
                                <Link href="#">Development</Link>
                            </span>
                            <h2>
                                <Link href="#">
                                    Fast food is popular because its convenient
                                </Link>
                            </h2>
                            <Link href="/about" className="btn_one">
                                Read More
                            </Link>
                        </div>
                    </div>
                    {/* END COL */}
                    <div
                        className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
                    >
                        <div className="single_blog">
                            <div className="blog-img">
                                <img
                                    src="/assets/img/blog-2.jpg"
                                    className="img-fluid "
                                    alt="mage"
                                />
                                <Link href="#">July 29, 2021</Link>
                            </div>
                            <span>
                                <Link href="#">Technology</Link>
                            </span>
                            <h2>
                                <Link href="#">The incredible thing about Virtual Reality</Link>
                            </h2>
                            <Link href="/about" className="btn_one">
                                Read More
                            </Link>
                        </div>
                    </div>
                    {/* END COL */}
                    <div
                        className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
                    >
                        <div className="single_blog">
                            <div className="blog-img">
                                <img
                                    src="/assets/img/blog-3.jpg"
                                    className="img-fluid"
                                    alt="mage"
                                />
                                <Link href="#">July 30, 2021</Link>
                            </div>
                            <span>
                                <Link href="#">Fashion</Link>
                            </span>
                            <h2>
                                <Link href="#">For good results must be make good plan </Link>
                            </h2>
                            <Link href="/about" className="btn_one">
                                Read More
                            </Link>
                        </div>
                    </div>
                    {/* END COL */}
                </div>
                {/* END ROW */}
            </div>
            {/* END CONTAINER */}
        </section>
    )
}

export default Blog