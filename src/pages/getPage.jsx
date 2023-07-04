import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import FAQ from './FAQ';
import Forms from './Forms';
import Home from './Home';
import Updates from './Updates';

export default function (name) {
    switch (name) {
        case 'aboutus':
            return <AboutUs />
        case 'contactus':
            return <ContactUs />;
        case 'faq':
            return <FAQ />
        case 'forms':
            return <Forms />
        case 'updates':
            return <Updates />
    }
    return <Home />;
};