import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { LayoutContainer, Footer, Header } from './Layout.styles'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Header>
            <LayoutContainer>
                <h1>
                    <Link href="/">
                        <a>React-Use Showcase</a>
                    </Link>{' '}
                    👀
                </h1>
            </LayoutContainer>
        </Header>
        {children}
        <Footer>
            <span>© Brian Roels - 2021</span>
        </Footer>
    </div>
)

export default Layout
