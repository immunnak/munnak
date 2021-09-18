import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {useStaticQuery, graphql} from 'gatsby'
import Image from '../../../components/image'
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import Social from '../../../components/socials/layout-two'
import {AuthorSection, AuthorImg, AuthorInfo} from './author-area.stc'

const AuthorArea = (props) => {
    const authorData = useStaticQuery(graphql `
        query HomeAuthorQuery {
            allAuthorsJson {
                edges {
                    node {
                        name
                        tagline
                        bio
                        social {
                            facebook
                            instagram
                            linkedin
                            twitter
                            youtube
                        }
                        image {
                            childImageSharp {
                                fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                    presentationHeight
                                    presentationWidth
                                }
                            }
                        }
                    }
                }
            }
        }      
    `);
    const {image, name, tagline, bio, social} = authorData.allAuthorsJson.edges[0].node;
    const {nameHeadingCSS, nameTextCSS, taglineCSS, bioCSS, socialCSS} = props
    return (
        <AuthorSection>
            <Container>
                <Row className="align-items-center">
                    <Col sm={4}>
                        {image && (
                            <AuthorImg>
                                <Image fluid={image.childImageSharp.fluid} alt={name}/>
                            </AuthorImg>
                        )}
                    </Col>
                    <Col sm={8} lg={7}>
                        <AuthorInfo>
                            {name && <Heading {...nameHeadingCSS}><Text {...nameTextCSS}>I'm </Text>{name}</Heading>}
                            {tagline && <Heading {...taglineCSS}>{tagline}</Heading>}
                            {bio && <Text {...bioCSS}>{bio}</Text>}
                            {social && <Social {...socialCSS} social={social}/>}
                        </AuthorInfo>
                    </Col>
                </Row>
            </Container>
        </AuthorSection>
    )
}

AuthorArea.defaultProps = {
    nameHeadingCSS: {
        as: "h2",
        fontSize: ["28px", "32px", "36px"],
        fontWeight: 700,
        color: "#fff",
        lineHeight: 1.1
    },
    nameTextCSS: {
        as: 'span',
        fontWeight: 300
    },
    taglineCSS: {
        as: 'h5',
        color: "#fff",
        mb: ['15px', null, '24px']
    },
    bioCSS: {
        fontSize: '16px',
        color: '#fff',
        fontWeight: 300,
        mb: ['23px', null, '33px']
    },
    socialCSS: {
        color: '#fff',
        borderColor: '#fff'
    }
}

export default AuthorArea
