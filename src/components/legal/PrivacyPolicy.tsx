import { useTranslate } from '../../i18n/index';

function PrivacyPolicy() {
  const t = useTranslate();
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('footer.legal.privacy')}
          </h1>
          <p className="text-gray-500 text-sm md:text-base mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-blue max-w-none">
            <p>
              Cat Kat Inter Co., Ltd. ("CatKat", "we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website, communicate with us, or use our services.
            </p>

            <h2 className="font-bold py-2">1. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <ul>
              <li>
                <strong>Contact details:</strong> name, company, email address, phone number, and any information you provide via our forms or communications.
              </li>
              <li>
                <strong>Business information:</strong> product categories of interest, expected quantities, delivery preferences, and related requirements.
              </li>
              <li>
                <strong>Technical data:</strong> IP address, device and browser type, pages visited, referring/exit pages, and timestamps (collected via standard web logs and analytics tools).
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> used to improve site functionality and analyze usage. See “Cookies” below.
              </li>
            </ul>

            <h2 className="font-bold py-2">2. How We Use Your Information</h2>
            <p>We use information to:</p>
            <ul>
              <li>Provide and improve our import, logistics, and related services.</li>
              <li>Respond to inquiries, provide quotes, and manage client relationships.</li>
              <li>Operate, maintain, and enhance our website performance and user experience.</li>
              <li>Comply with legal, regulatory, and compliance obligations.</li>
              <li>Protect against, identify, and investigate fraud and security incidents.</li>
            </ul>

            <h2 className="font-bold py-2">3. Legal Bases</h2>
            <p>
              Where required by law, we process your information on the basis of legitimate interests, contract performance, legal obligations,
              and, where applicable, your consent. You may withdraw consent at any time where consent is the lawful basis.
            </p>

            <h2 className="font-bold py-2">4. Sharing Your Information</h2>
            <p>We may share information with:</p>
            <ul>
              <li>
                <strong>Service providers and partners</strong> involved in product sourcing, logistics coordination, customs support, and IT/analytics services under appropriate safeguards.
              </li>
              <li>
                <strong>Regulators or authorities</strong> when required by law or to protect rights, property, or safety.
              </li>
              <li>
                <strong>Business transfers:</strong> in connection with a merger, acquisition, or asset sale, subject to standard protections.
              </li>
            </ul>

            <h2 className="font-bold py-2">5. International Transfers</h2>
            <p>
              We operate in Thailand and coordinate cross-border trade with partners in other countries (including China). Your information may be
              transferred and processed outside of your jurisdiction. We take steps to ensure appropriate protections consistent with applicable laws.
            </p>

            <h2 className="font-bold py-2">6. Data Retention</h2>
            <p>
              We retain information only as long as necessary for the purposes outlined in this Policy, to comply with legal obligations, resolve disputes,
              and enforce agreements. Retention periods vary depending on the nature of the data and our legal requirements.
            </p>

            <h2 className="font-bold py-2">7. Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect information against unauthorized access, disclosure, alteration,
              or destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-bold py-2">8. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data, and to object to
              certain processing or request data portability. To exercise these rights, please contact us using the details below.
            </p>

            <h2 className="font-bold py-2">9. Cookies</h2>
            <p>
              We use cookies and similar technologies to operate our site and understand usage. You can control cookies through your browser settings.
              Disabling certain cookies may impact site functionality.
            </p>

            <h2 className="font-bold py-2">10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites. We encourage you to
              review their privacy policies.
            </p>

            <h2 className="font-bold py-2">11. Children’s Privacy</h2>
            <p>
              Our services are intended for business use and are not directed to children. We do not knowingly collect personal information from children.
            </p>

            <h2 className="font-bold py-2">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by a “Last updated” date at the top of this page.
            </p>

            <h2 className="font-bold py-2">13. Contact Us</h2>
            <p>
              If you have any questions or requests regarding this Policy or your personal data, please contact us at: <a href="mailto:info@catkat.co">info@catkat.co</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
