import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useStaticQuery, graphql } from 'gatsby'
import Blog from '../../../components/blog/layout-one'
import Swiper from '../../../components/shared/swiper'
import SectionTitle from '../../../components/shared/section-title'
import { truncateString } from '../../../utils/utilFunctions'
import { FeaturePostWrapper, FeaturePostSlideWrap } from './feature-post-area.stc'

const FeaturePostArea = (props) => {
	const featurePostData = useStaticQuery(graphql`
        query FeaturePostQuery {
            allMarkdownRemark(
                filter: {frontmatter: {is_featured: {eq: true}}}, 
                sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                    node {
                        fields {
                            slug
                            dateSlug
                        }
                        frontmatter {
                            title
                            format
                            date(formatString: "LL")
                            video_link
                            quote_text
                            quote_author
                            link
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 510, maxHeight: 560, quality: 100, srcSetBreakpoints: 6) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                            images {
                                childImageSharp {
                                    fluid(maxWidth: 510, maxHeight: 560, quality: 100, srcSetBreakpoints: 6) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                    }
                }
            } 
            homeJson(id: {eq: "home-feature-contnet"}) {
                title
            }
        }
    `)
	const blogs = featurePostData.allMarkdownRemark.edges;
	const { sliderSettings, sliderStyle, sectionTitleCSS } = props
	const { title } = featurePostData.homeJson
	return (
		<FeaturePostWrapper id="feature-post">
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							{...sectionTitleCSS}
							title={title}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<FeaturePostSlideWrap>
							<Swiper {...sliderStyle} settings={sliderSettings}>
								{blogs.map(blog => (
									<div className="item" key={blog.node.fields.slug}>
										<Blog
											content={{
												...blog.node.fields,
												...blog.node.frontmatter,
												title: truncateString(blog.node.frontmatter.title, 35)
											}}
										/>
									</div>
								))}
							</Swiper>
						</FeaturePostSlideWrap>
					</Col>
				</Row>
			</Container>
		</FeaturePostWrapper>
	)
}

FeaturePostArea.defaultProps = {
	sectionTitleCSS: {
		mb: '46px'
	},
	sliderSettings: {
		slidesPerView: 1,
		spaceBetween: 30,
		customArrows: true,
		autoplay: {
			delay: 3000
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1
			}
		}
	},
	sliderStyle: {
		navStyle: 2
	}
}

export default FeaturePostArea
