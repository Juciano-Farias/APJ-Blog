import React, { useContext } from 'react';

import Link from 'next/link'

const categories = [{name: 'React', slug: 'React' }, {name: 'Web-development', slug: 'web-dev'}]

const Header = () => {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-gray-300 py-8'>
                <div className='md:float-left block'>
                    <Link href="/">
                        <span className='cursor-pointer font-bold text-4xl text-pink-900'>
                            APJ - LOGO
                        </span>
                    </Link>
                </div>
                <div className='hiden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-pink-900 ml-4 fonts-semibold cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
