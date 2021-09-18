import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import {Container, Row, Col} from 'reactstrap'
import SectionTitle from '../../../components/shared/section-title'
import Blog from '../../../components/blog/layout-two'
import Pagination from '../../../components/pagination'
import {RecenPostWrap} from './recent-post-area.stc'
 
const RecentPostArea = (props) => {
    const blogData = useStaticQuery(graphql `
        query RecentPostQuery {
            allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 6) {
                totalCount
                edges {
                    node {
                        fields {
                            slug
                            dateSlug
                            postID
                        }
                        frontmatter {
                            category
                            date(formatString: "LL")
                            format
                            tags
                            title
                            video_link
                            quote_text
                            quote_author
                            link
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 510, maxHeight: 350, quality: 100, srcSetBreakpoints: 6) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                            images {
                                childImageSharp {
                                    fluid(maxWidth: 510, maxHeight: 350, quality: 100, srcSetBreakpoints: 6) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        excerpt(pruneLength: 165, format: PLAIN, truncate: true)
                    }
                }
            }
        }      
    `);
    const blogs = blogData.allMarkdownRemark.edges;
    const {sectionTitleStyle, blogStyle} = props;
    const {totalCount} = blogData.allMarkdownRemark;
    const postsPerPage = 4;
    const numberOfPages = Math.ceil(totalCount/postsPerPage);
    return (
        <RecenPostWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            title="Most Recent Post"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        {blogs.map(blog => (
                            <Blog
                                {...blogStyle}
                                key={blog.node.fields.slug}
                                content={{
                                    ...blog.node.fields, 
                                    ...blog.node.frontmatter,
                                    excerpt: blog.node.excerpt
                                }}
                            />
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Pagination
                            rootPage="/"
                            currentPage={1}
                            numberOfPages={numberOfPages}
                        />
                    </Col>
                </Row>
            </Container>
        </RecenPostWrap>
    )
}

RecentPostArea.propTypes = {
    sectionTitleStyle: PropTypes.object,
    blogStyle: PropTypes.object
}

RecentPostArea.defaultProps = {
    sectionTitleStyle: {
        mb: '46px'
    },
    blogStyle: {
        mb: '50px'
    }
}

export default RecentPostArea
