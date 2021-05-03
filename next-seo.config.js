const title = 'Learn Next.js Auth Redirect';
const description =
    'Attempt to learn how to redirect Next.js protected page without flashing content';

const SEO = {
    title,
    description,
    // canonical: 'https://theodorusclarence.com',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://theodorusclarence.com',
        title,
        description,
        images: [
            {
                url:
                    'https://theodorusclarence.com/favicon/ms-icon-144x144.png',
                alt: title,
                width: 144,
                height: 144,
            },
        ],
    },
};

export default SEO;

// EXAMPLES
{
    /* 
    const title = 'Next.js Tailwind Starter';
    const description = 'your description';
    const url = 'https://theodorusclarence.com';

    <NextSeo
    title={title}
    description={description}
    canonical={url}
    openGraph={{
        url,
        title,
        description,
    }}
/>;  */
}
