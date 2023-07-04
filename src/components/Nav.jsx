function generateLinks() {
    const pages = [
        {
            title: 'Home',
            href: '/',
            icon: 'fa-home'
        },
        {
            title: 'About Us',
            href: '/about-us',
            icon: 'fa-user-md'
        },
        {
            title: 'FAQ',
            href: '/faq',
            icon: 'fa-question-circle'
        },
        {
            title: 'Online Forms',
            href: '/forms',
            icon: 'fa-file-alt'
        },
        {
            title: 'Latest Updates',
            href: '/updates',
            icon: 'fa-newspaper'
        },
        {
            title: 'Contact Us',
            href: '/contact-us',
            icon: 'fa-tooth'
        }
    ];

    const links = [];
    pages.forEach(page => {
        links.push(
            <a href={page.href} class="nav-tab">
                <div>{page.title}</div>
                <div><i class={'fas ' + page.icon}></i></div>
            </a>
        );
    });
    return links;
}

export default function () {
    const links = generateLinks();
    return (
        <div class="nav-wrap">
            {links}
        </div>
    );
};