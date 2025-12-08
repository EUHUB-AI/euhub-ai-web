import React from 'react';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="p-8 md:p-12 glass-panel rounded-2xl prose prose-invert max-w-none">
                    <h1>Privacy Policy</h1>
                    <p className="italic text-gray-400 text-sm mb-8">
                        Disclaimer: This document is a comprehensive template generated based on EU and Slovak data protection laws.
                        It is not a substitute for professional legal advice. You must consult with a qualified legal professional to
                        ensure this policy is complete, accurate, and fully compliant with your specific business operations.
                    </p>

                    <h2>Article 1: Introduction and Scope</h2>
                    <p>
                        Engineers-incubator s.r.o. ("we," "us," or "our") is dedicated to upholding the highest standards of privacy
                        and data protection. This Privacy Policy outlines our obligations and your rights concerning the collection,
                        processing, and protection of your personal data when you interact with our website, https://euhub.sk (the "Service").
                    </p>
                    <p>
                        This policy is drafted in strict accordance with Regulation (EU) 2016/679 (the General Data Protection Regulation
                        or "GDPR") and the Slovak Act No. 18/2018 Coll. on Personal Data Protection (the "Act").
                    </p>

                    <h2>Article 2: Data Controller</h2>
                    <p>
                        <strong>Company Name:</strong> Engineers-incubator s.r.o.<br />
                        <strong>Company ID (IČO):</strong> 53 741 200<br />
                        <strong>Registered Address:</strong> Horná 67, 974 01 Banská Bystrica, Slovenská republika<br />
                        <strong>Contact Email for Privacy Inquiries:</strong> <a href="mailto:hello@ehub.sk" className="text-blue-400 hover:text-blue-300">hello@ehub.sk</a>
                    </p>

                    <h2>Article 3: Data Collection and Purpose of Processing</h2>
                    <p>
                        We adhere to the principle of data minimization and collect personal data only for specified, explicit,
                        and legitimate purposes.
                    </p>

                    <h3>3.1. Information You Provide Directly:</h3>
                    <ul>
                        <li>
                            <strong>Account and Profile Information:</strong> Full Name, Email Address, Username, and Hashed Password.
                            Optional data: LinkedIn URL, Telegram username.<br />
                            <em>Purpose:</em> To create and manage your account, provide our services, and facilitate user interaction.
                        </li>
                        <li>
                            <strong>Communications:</strong> Name, contact details, and message content.<br />
                            <em>Purpose:</em> To respond to inquiries and maintain a record of correspondence.
                        </li>
                        <li>
                            <strong>Marketing Subscriptions:</strong> Email Address.<br />
                            <em>Purpose:</em> To send marketing communications to which you consented.
                        </li>
                    </ul>

                    <h3>3.2. Information Collected Automatically:</h3>
                    <ul>
                        <li>
                            <strong>Log and Device Data:</strong> IP, browser type, device info, OS, referring URLs.<br />
                            <em>Purpose:</em> Security, analysis, improved functionality.
                        </li>
                        <li>
                            <strong>Usage Data & Cookies:</strong> Data from cookies and similar tech.<br />
                            <em>Purpose:</em> Website operation, preferences, analytics, marketing. Detailed in Cookie Policy.
                        </li>
                    </ul>

                    <h2>Article 4: Legal Basis for Processing</h2>
                    <ul>
                        <li><strong>Contractual Necessity:</strong> Article 6(1)(b) GDPR</li>
                        <li><strong>Consent:</strong> Article 6(1)(a) GDPR</li>
                        <li><strong>Legitimate Interests:</strong> Article 6(1)(f) GDPR</li>
                        <li><strong>Legal Obligation:</strong> Article 6(1)(c) GDPR</li>
                    </ul>

                    <h2>Article 5: Data Disclosure and Transfers</h2>
                    <ul>
                        <li><strong>Third-Party Service Providers:</strong> Hosting, payments, analytics.</li>
                        <li><strong>Legal Compliance:</strong> Disclosure if required by law or authority.</li>
                        <li><strong>International Transfers:</strong> Protected via Standard Contractual Clauses.</li>
                    </ul>

                    <h2>Article 6: Data Retention</h2>
                    <p>We retain data only as long as necessary unless law requires longer retention.</p>

                    <h2>Article 7: Your Data Protection Rights</h2>
                    <ul>
                        <li>Right to Access</li>
                        <li>Right to Rectification</li>
                        <li>Right to Erasure ("Right to be Forgotten")</li>
                        <li>Right to Restrict Processing</li>
                        <li>Right to Data Portability</li>
                        <li>Right to Object</li>
                        <li>Right to Withdraw Consent</li>
                        <li>
                            Right to Lodge a Complaint – Supervisory Authority:<br />
                            Úrad na ochranu osobných údajov Slovenskej republiky,<br />
                            Hraničná 12, 820 07 Bratislava 27, Slovenská republika,<br />
                            <a href="https://dataprotection.gov.sk/uoou/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">dataprotection.gov.sk/uoou</a>
                        </li>
                    </ul>

                    <h2>Article 8: Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your data from loss, alteration,
                        unauthorized disclosure, or access.
                    </p>

                    <h2>Article 9: Children's Privacy</h2>
                    <p>
                        Our Service is not directed to children under 16. We do not knowingly collect their data. If we become aware,
                        we delete it promptly.
                    </p>

                    <h2>Article 10: Amendments to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. The updated version will show a revised "Effective Date"
                        and will apply immediately.
                    </p>
                </div>
            </div>
        </div>
    );
}
