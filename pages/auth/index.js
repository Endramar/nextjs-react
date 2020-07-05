import React from 'react';
import Link from 'next/link';

import User from '../../components/User';

const authPage = () => {
    return <div>
        <h1>The auth index page.</h1>
        <User name="Ali" age="31"></User>
        <p>Go back to <Link href="/"><a>Main Page</a></Link></p>
    </div>;
}

export default authPage;