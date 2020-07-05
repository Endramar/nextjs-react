import React from 'react';
import Link from 'next/link';

const authPage = () => {
    return <div>
        <h1>The auth index page.</h1>
        <p>Go back to <Link href="/"><a>Main Page</a></Link></p>
    </div>;
}

export default authPage;