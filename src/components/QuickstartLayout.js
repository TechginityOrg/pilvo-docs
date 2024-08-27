// src/components/QuickstartLayout.js
import React from 'react';
import Layout from '@theme/Layout';
import Navbar from '@theme/Navbar';

export default function QuickstartLayout({ children }) {
    return (
        <div>
            {/* Main Layout */}
            <Layout>
                {children}
            </Layout>

            {/* Secondary Navbar */}
            <Navbar />
        </div>
    );
}
