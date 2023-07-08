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

    console.log(current)
    const links = [];
    pages.forEach(page => {
        links.push(
            <a href={page.href} className={'nav-tab' + (page.id && current.pageName === page.id ? ' active' : '')}>
                <div>{page.title}</div>
                <div><i class={'fas ' + page.icon}></i></div>
            </a>
        );
    });
    return links;
}

export default function (current) {
    const links = generateLinks(current);
    return (
        <div class="nav-wrap">
            <div class="nav-links">
                {links}
            </div>
            
        </div>
    );
};