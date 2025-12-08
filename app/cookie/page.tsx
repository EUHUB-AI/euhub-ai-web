import React from 'react';

export default function CookiePage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="p-8 md:p-12 glass-panel rounded-2xl prose prose-invert max-w-none">
                    <h1>Cookie Policy</h1>
                    <p className="lead">Effective Date: September 23, 2025</p>

                    <h2>1. What Are Cookies?</h2>
                    <p>
                        Cookies are small text files that are placed on your device (computer, tablet, smartphone) when you visit a website.
                        They are widely used to make websites work more efficiently, as well as to provide information to the site owners.
                    </p>

                    <h2>2. How We Use Cookies</h2>
                    <p>
                        Our website uses cookies to distinguish you from other users, to provide a good experience when you browse,
                        and to help us improve our site. By using our site, you consent to the use of Strictly Necessary cookies.
                        For all other cookies, we require your explicit consent.
                    </p>

                    <h2>3. Types of Cookies We Use</h2>

                    <h3>Strictly Necessary Cookies</h3>
                    <p>
                        These cookies are essential for you to move around the website and use its features. They do not require your consent.<br />
                        <strong>Example:</strong> <code>sessionid</code> – Used to maintain your session while browsing.
                    </p>

                    <h3>Performance and Analytics Cookies</h3>
                    <p>
                        These cookies collect anonymous information about how visitors use our website, such as which pages are visited most often.
                        This helps us improve how our website works. We will only use these cookies if you give us your consent.<br />
                        <strong>Example:</strong> <code>Google Analytics (_ga, _gid)</code> – Used to gather statistical data on how visitors use the site. All data is anonymized.
                    </p>

                    <h3>Marketing Cookies</h3>
                    <p>
                        These cookies are used to track visitors across websites. The intention is to display ads that are relevant and
                        engaging for the individual user. We will only use these cookies if you give us your consent.<br />
                        <strong>Example:</strong> <code>Meta (Facebook) Pixel (_fbp)</code> – Used to deliver targeted advertisements on Meta platforms after you have visited our site.
                    </p>

                    <h2>4. Your Choices and Managing Cookies</h2>
                    <p>
                        You can manage your cookie preferences at any time through our Cookie Consent Banner. You can also set your browser
                        to refuse all or some browser cookies, or to alert you when websites set or access cookies. Please note that if you
                        disable or refuse Strictly Necessary cookies, some parts of this website may become inaccessible or not function properly.
                    </p>

                    <h2>5. Contact Us</h2>
                    <p>
                        If you have any questions about our use of cookies, please contact us at <a href="mailto:hello@ehub.sk" className="text-blue-400 hover:text-blue-300">hello@ehub.sk</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
