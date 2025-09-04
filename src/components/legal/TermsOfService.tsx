import { useTranslate } from '../../i18n/index';

function TermsOfService() {
  const t = useTranslate();
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('footer.legal.terms')}
          </h1>
          <p className="text-gray-500 text-sm md:text-base mb-8">Effective date: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-blue max-w-none">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the website and services provided by Cat Kat Inter Co., Ltd.
              ("CatKat", "we", "our"). By accessing our website or engaging our services, you agree to be bound by these Terms.
            </p>

            <h2 className="font-bold py-2">1. Services</h2>
            <p>
              We provide cross-border product sourcing, logistics coordination, and customs support between China and Thailand. Service scope,
              timelines, and pricing may vary based on market conditions and written agreements between you and CatKat.
            </p>

            <h2 className="font-bold py-2">2. Quotes and Orders</h2>
            <ul>
              <li>All quotes are non-binding estimates unless expressly stated otherwise in writing.</li>
              <li>Orders are confirmed only upon written acceptance by CatKat and, where applicable, receipt of required deposits.</li>
              <li>Changes or cancellations may incur additional costs depending on the order status.</li>
            </ul>

            <h2 className="font-bold py-2">3. Compliance and Documentation</h2>
            <p>
              You are responsible for providing accurate and complete information necessary for import/export compliance. We may assist with
              permits, certifications, and customs clearance as agreed in writing. You agree to comply with all applicable laws, including
              export controls, sanctions, and safety regulations.
            </p>

            <h2 className="font-bold py-2">4. Pricing and Payment</h2>
            <ul>
              <li>Prices may change due to currency fluctuations, carrier capacity, regulatory changes, or supplier updates.</li>
              <li>Payment terms will be specified in the invoice or written agreement. Late payments may accrue interest at the lawful rate.</li>
              <li>All taxes, duties, and government charges are your responsibility unless otherwise agreed in writing.</li>
            </ul>

            <h2 className="font-bold py-2">5. Shipping and Delivery</h2>
            <ul>
              <li>Delivery timelines are estimates and may vary due to factors beyond our control (e.g., customs, weather, carrier delays).</li>
              <li>Risk of loss transfers as defined in the applicable Incoterms or the written agreement between parties.</li>
              <li>You must inspect goods upon receipt and notify us promptly of any issues as specified in your agreement.</li>
            </ul>

            <h2 className="font-bold py-2">6. Warranties and Disclaimers</h2>
            <p>
              Except as expressly set forth in a written agreement, services are provided on an "as is" and "as available" basis without warranties
              of any kind, whether express or implied. To the fullest extent permitted by law, we disclaim implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>

            <h2 className="font-bold py-2">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, CatKat shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits or revenues, arising out of or related to your use of the services, even if advised of the possibility
              of such damages. Our total liability shall not exceed the amounts you have paid to CatKat for the specific services giving rise to the claim.
            </p>

            <h2 className="font-bold py-2">8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless CatKat and its officers, directors, employees, and agents from and against any claims,
              liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising from your breach of these Terms or
              violation of any law or third-party rights.
            </p>

            <h2 className="font-bold py-2">9. Intellectual Property</h2>
            <p>
              All trademarks, logos, and content on our website are the property of CatKat or its licensors. You may not use, reproduce, or
              distribute any content without our prior written consent.
            </p>

            <h2 className="font-bold py-2">10. Termination</h2>
            <p>
              We may suspend or terminate access to our website or services at any time for conduct that we believe violates these Terms
              or is otherwise harmful to CatKat or third parties.
            </p>

            <h2 className="font-bold py-2">11. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of Thailand, without regard to conflict of laws principles. Disputes shall be resolved through
              good-faith negotiations, and if unresolved, submitted to the courts of competent jurisdiction in Thailand.
            </p>

            <h2 className="font-bold py-2">12. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. The updated version will be indicated by an effective date at the top of this page.
            </p>

            <h2 className="font-bold py-2">13. Contact</h2>
            <p>
              For questions regarding these Terms, please contact us at: <a href="mailto:info@catkat.co">info@catkat.co</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsOfService;
