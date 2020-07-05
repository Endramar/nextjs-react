import React from 'react';
import Link from 'next/link';

import User from '../../components/User';

const authPage = (props) => {
    return <div>
        <h1>The auth index page of {props.appName}</h1>
        <User name="Ali" age="31"></User>
        <p>Go back to <Link href="/"><a>Main Page</a></Link></p>
    </div>;
}

authPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'Super App {AUTH}' });
        }, 1000)
    });

    return promise;
}

export default authPage;