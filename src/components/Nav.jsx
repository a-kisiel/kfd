import '../css/nav.css';

function generateLinks(current) {
    const pages = [
        {
            title: 'Home',
            href: '/',
            icon: 'fa-home'
        },
        {
            id: 'aboutus',
            title: 'About Us',
            href: '/about-us',
            icon: 'fa-user-md'
        },
        {
            id: 'faq',
            title: 'FAQ',
            href: '/faq',
            icon: 'fa-question-circle'
        },
        {
            id: 'forms',
            title: 'Online Forms',
            href: '/forms',
            icon: 'fa-file-alt'
        },
        {
            id: 'updates',
            title: 'Latest Updates',
            href: '/updates',
            icon: 'fa-newspaper'
        },
        {
            id: 'contactus',
            title: 'Contact Us',
            href: '/contact-us',
            icon: 'fa-tooth'
        }
    ];

    const links = [];
    pages.forEach(page => {
        const isCurrent = current.pageName === page.id || !page.id && !current.pageName;
        links.push(
            <a href={page.href} className={'nav-tab' + (isCurrent ? ' active' : '')}>
                <div>{page.title}</div>
                <div><i className={'fas ' + page.icon}></i></div>
            </a>
        );
    });
    return links;
}

export default function (current) {
    const links = generateLinks(current);
    return (
        <div className="nav-wrap">
            <div className="nav-links">
                {links}
            </div>
        </div>
    );
};