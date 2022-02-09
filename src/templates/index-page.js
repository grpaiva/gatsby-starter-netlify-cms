import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

// eslint-disable-next-line
export const IndexPageTemplate = ({ intro }) => {
  return (
    <div class="container">
      <div class="posts">
        <div class="row">
          <div class="col-12">
            <h1 class="border-l primary">Posts</h1>
            {/* <div v-for="post in posts" :key="post.id" class="col-12 col-sm-6 col-lg-4">
                <PostCard v-bind:post="post"></PostCard>
              </div> */}
            <div class="row">
              <BlogRoll />
            </div>
            <div class="row">
              <div class="col text-center">
                {/* <load-more-button v-on:load-more-posts="refresh"></load-more-button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
