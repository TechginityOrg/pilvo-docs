import React from 'react';
import SnippetTabs from './snippetBox/SnippetBox'; // Assuming SnippetTabs.js is in the same directory
import styles from './CustomLayout.module.css';

const CustomLayout = ({ children }) => {
    return (
        <div className={styles.customLayout}>
            <div className={styles.content}>{children}</div>
            <div className={styles.snippetBox}>
                <SnippetTabs />
            </div>
        </div>
    );
};

export default CustomLayout;
