import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  author,
  date,
}) => {
  const PostContent = contentComponent || Content;

  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function formatDate() {
      return capitalizeFirstLetter(
        new Date(date).toLocaleString("pt-BR", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      );
    }
    setFormattedDate(formatDate());
  }, []);

  return (
    <>
      <main className="post individual">
        <section className="banner banner--grey--dark banner--grey">
          <div className="container post-heading">
            <div className="row">
              <div className="col-12 badges">
                {tags && tags.length
                  ? tags.map((tag) => (
                      <span key={tag + `tag`} className="badge">
                        {tag}
                      </span>
                    ))
                  : null}
                {/* <span
                v-for="category in post.embedded['wp:term'][0]"
                :key="category.id"
                className="badge"
              >
                {{ category.name }}
              </span> */}
              </div>
              <div className="col-sm-12 col-md-12 col-lg-9">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </section>
        <article className="post-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="testimonial__author d-inline-flex">
                  {/* TODO: CREATE AUTHOR CRUD */}
                  <img
                    alt="Author"
                    src="https://secure.gravatar.com/avatar/1e3e1c302203b5e6244279d89d87ae2e?s=96&d=retro&r=g"
                  />
                  <div className="author-info">
                    <p className="posted-at"> {formattedDate} </p>
                    <p className="author-name">{author}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="post__content">
                  <PostContent content={content} />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        title
        tags
        author
      }
    }
  }
`;
