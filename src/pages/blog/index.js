import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image margin-top-0"
          style={{
            // backgroundImage: `url('../../../../static/img/jumbotron.webp')`,
            backgroundImage: `url('../img/IMG_6656.webp')`,
            // backgroundImage: `url('../img/ashirani-murata-rQgqf6ynkP8-unsplash.webp')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #134d72, -0.5rem 0 0 #134d72",
              backgroundColor: "#134d72",
              color: "white",
              padding: "1rem",
            }}
          >
            Events
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
