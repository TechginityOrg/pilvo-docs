// src/components/MarkdownLayout.js
import React from 'react';
import Layout from '@theme/Layout';

const CustomNavbar = () => (
    <nav style={{
        backgroundColor: '#444',
        padding: '10px',
        borderRadius: '5px',
        marginTop: '10px',
    }}>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-around',
            margin: '0',
            padding: '0',
        }}>
            <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/docs/intro" style={{ color: 'white', textDecoration: 'none' }}>Docs</a></li>
            <li><a href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</a></li>
            <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        </ul>
    </nav>
);

const CustomLayout = ({ children, title }) => (
    <Layout title={title}>
        <CustomNavbar />
        <main style={{ padding: '20px' }}>
            {children}
        </main>
    </Layout>
);

export default CustomLayout;
