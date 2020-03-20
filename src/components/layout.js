import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "../styles/index.sass";

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            title
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          >

        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/flickr.js"></script>
        <script src="/js/flexslider.min.js"></script>
        <script src="/js/lightbox.min.js"></script>
        <script src="/js/masonry.min.js"></script>
        <script src="/js/twitterfetcher.min.js"></script>
        <script src="/js/spectragram.min.js"></script>
        <script src="/js/ytplayer.min.js"></script>
        <script src="/js/countdown.min.js"></script>
        <script src="/js/smooth-scroll.min.js"></script>
        <script src="/js/parallax.js"></script>
        <script src="/js/scripts.js"></script>
          </HelmetDatoCms>
          <div className="nav-container">
            <a id="top"></a>
            <nav>
                <div className="nav-bar">
                    <div className="module left">
                        <Link to={"/"}>
                            <span>DAVE<strong>LUKE</strong></span>
                        </Link>
                    </div>
                    <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="module-group right">
                        <div className="module left">
                            <ul className="menu">
                                <li>
                                    <Link to={'/'}>
                                        Home
                                    </Link>
                                    
                                </li>
                                <li className="has-dropdown">
                                    <a href="#">
                                        Portfolio
                                    </a>
                                    <ul className="mega-menu">
                                        <li>
                                            <ul>
                                                <li>
                                                    <Link to={'/watercolor'}>Watercolor</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/photography'}>Photography</Link>
                                                </li>
                                                <li>

                                                    <Link to={'/technology'}>Tech</Link>
                                                </li>
                                                
                                            </ul>
                                            </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to={'/about'}>
                                        About
                                    </Link>

                                </li>
                                <li>
                                    <Link to={'/about'}>
                                        Contact
                                    </Link>

                                </li>

                                </ul>
                        </div>
                        {/* end of menu module */}
                        
                        </div>
                </div> 
            </nav>
        </div>
        <div className="main-container">
            {children}
          </div>
        </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
