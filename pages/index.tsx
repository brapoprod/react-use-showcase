import Layout from '../components/Layout'
import Link from 'next/link'
import { Container } from '../components/Layout.styles'

const IndexPage = () => (
    <Layout title="React Use Showcase">
        <Container>
            <section>
                <h2>Intro</h2>
                <p>
                    This small app showcases some neat community driven hooks
                    that are integrated in the{' '}
                    <Link href="https://github.com/streamich/react-use">
                        <a target="_blank">react-use</a>
                    </Link>{' '}
                    package.
                </p>
            </section>
        </Container>
    </Layout>
)

export default IndexPage
