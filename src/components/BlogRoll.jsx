import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      posts &&
      posts.map(({ node: post }) => (
        <div className="col-12 col-sm-6 col-lg-4" key={JSON.stringify(post)}>
          <div className="course__card">
            <div className="course__card__img">
              {post.frontmatter.featuredimage ? (
                <Link to={post.fields.slug}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                  />
                </Link>
              ) : null}
            </div>
            <div className="course__card__content">
              <h2>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.description}</p>
              <Link to={post.fields.slug} className="btn btn-dark">
                Leia mais
              </Link>
            </div>
          </div>
        </div>
      ))
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
