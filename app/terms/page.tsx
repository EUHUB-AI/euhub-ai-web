import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="p-8 md:p-12 glass-panel rounded-2xl prose prose-invert max-w-none">
                    <h1>Terms and Conditions for euhub.sk</h1>
                    <p className="lead">Effective Date: September 23, 2025</p>

                    <h2>1. Introduction and Agreement</h2>
                    <p>
                        Welcome to euhub.sk (the "Site"), operated by Engineers-incubator s.r.o. ("we," "us," or "our").
                        These Terms and Conditions ("Terms") govern your access to and use of our Site. By accessing or using the Site,
                        you agree to be bound by these Terms in their entirety. If you do not agree with any part of these Terms,
                        you must not use this Site.
                    </p>

                    <h2>2. Intellectual Property Rights</h2>
                    <p>
                        All content present on this Site, including but not limited to text, graphics, logos, images, and software,
                        is the property of Engineers-incubator s.r.o. or its content suppliers and is protected by Slovak and
                        international copyright laws. You are granted a limited, non-exclusive license to access and view the content
                        for personal, non-commercial use only.
                    </p>

                    <h2>3. User Obligations and Acceptable Use</h2>
                    <p>You agree to use the Site only for lawful purposes. You are prohibited from:</p>
                    <ul>
                        <li>Using the Site in any way that could damage, disable, or impair the Site.</li>
                        <li>Attempting to gain unauthorized access to any part of the Site or its related systems.</li>
                        <li>Introducing any viruses, trojans, or other material that is malicious or technologically harmful.</li>
                    </ul>

                    <h2>4. Disclaimers and Limitation of Liability</h2>
                    <p>
                        The Site is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied,
                        regarding the accuracy, reliability, or completeness of the Site's content.
                    </p>
                    <p>
                        To the fullest extent permitted by Slovak law, Engineers-incubator s.r.o. shall not be liable for any indirect,
                        incidental, or consequential damages, including loss of profits or data, arising from your use of, or inability
                        to use, this Site. This limitation does not apply to damages caused by gross negligence or willful misconduct.
                    </p>

                    <h2>5. Links to Third-Party Websites</h2>
                    <p>
                        Our Site may contain links to third-party websites. These links are provided for your convenience only.
                        We have no control over the content of these sites and accept no responsibility for them or for any loss
                        or damage that may arise from your use of them.
                    </p>

                    <h2>6. Governing Law and Jurisdiction</h2>
                    <p>
                        These Terms and any dispute arising out of or in connection with them shall be governed by and construed
                        in accordance with the laws of the Slovak Republic.
                    </p>
                    <p>
                        You agree that the competent courts located in Banská Bystrica, Slovak Republic, shall have exclusive
                        jurisdiction to settle any dispute which may arise out of or in connection with these Terms.
                    </p>

                    <h2>7. Amendments</h2>
                    <p>
                        We reserve the right to amend these Terms at any time. We will notify users of any changes by posting the
                        new Terms on this Site. Your continued use of the Site after such changes constitutes your acceptance of the new Terms.
                    </p>

                    <h2>8. Contact Information</h2>
                    <p>
                        <strong>Company:</strong> Engineers-incubator s.r.o.<br />
                        <strong>Address:</strong> Horná 67, 974 01 Banská Bystrica, Slovenská republika<br />
                        <strong>Email:</strong> <a href="mailto:hello@ehub.sk" className="text-blue-400 hover:text-blue-300">hello@ehub.sk</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
