import { useTranslate } from '../../i18n/index';

function Guidelines() {
  const t = useTranslate();
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('footer.legal.guidelines')}
          </h1>
          <p className="text-gray-500 text-sm md:text-base mb-8">Version: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-blue max-w-none">
            <p>
              These Guidelines set out best practices for engaging with Cat Kat Inter Co., Ltd. ("CatKat") for cross-border sourcing, logistics,
              and customs support. They are intended to help ensure smooth collaboration, compliance, and safety across our operations.
            </p>

            <h2 className="font-bold py-2">1. Communication and Responsiveness</h2>
            <ul>
              <li>Designate a primary point of contact for each project or shipment.</li>
              <li>Respond to critical inquiries (e.g., customs, compliance, carrier changes) within agreed timeframes.</li>
              <li>Share relevant updates promptly, including product specs, labeling, and packaging requirements.</li>
            </ul>

            <h2 className="font-bold py-2">2. Product Specifications</h2>
            <ul>
              <li>Provide complete and accurate specifications, including HS codes when available.</li>
              <li>Confirm quality standards and acceptable tolerances in writing before ordering.</li>
              <li>Ensure product labeling complies with destination market regulations (language, safety marks, etc.).</li>
            </ul>

            <h2 className="font-bold py-2">3. Compliance and Documentation</h2>
            <ul>
              <li>Work with CatKat to identify required permits, certificates, and test reports.</li>
              <li>Submit documentation in advance to avoid delays (invoices, packing lists, MSDS, certificates).</li>
              <li>Follow applicable export controls, sanctions, and safety regulations.</li>
            </ul>

            <h2 className="font-bold py-2">4. Packaging and Logistics</h2>
            <ul>
              <li>Use packaging suitable for the mode of transport and product type.</li>
              <li>Clearly mark cartons and pallets with shipment identifiers and handling instructions.</li>
              <li>Notify CatKat of any special handling requirements (temperature, hazardous materials, fragile goods).</li>
            </ul>

            <h2 className="font-bold py-2">5. Timelines and Changes</h2>
            <ul>
              <li>Align on lead times and cutoff dates for production, inspection, and shipping.</li>
              <li>Communicate changes or disruptions immediately to assess impact on schedules and costs.</li>
              <li>Understand that force majeure or carrier capacity may affect delivery windows.</li>
            </ul>

            <h2 className="font-bold py-2">6. Inspections and Quality Control</h2>
            <ul>
              <li>Arrange pre-shipment inspections as appropriate for order value and risk.</li>
              <li>Document defects and non-conformities with photos and detailed notes.</li>
              <li>Work in good faith to remedy issues per the agreed contract terms.</li>
            </ul>

            <h2 className="font-bold py-2">7. Data Privacy and Confidentiality</h2>
            <ul>
              <li>Protect confidential information and use it solely for the project.</li>
              <li>Comply with applicable data protection laws when sharing personal data.</li>
              <li>Use secure channels for sensitive files where appropriate.</li>
            </ul>

            <h2 className="font-bold py-2">8. Ethical Conduct</h2>
            <ul>
              <li>Follow anti-bribery and anti-corruption laws and policies.</li>
              <li>Maintain humane working conditions and respect labor rights in the supply chain.</li>
              <li>Report any suspected violations or unethical conduct to CatKat.</li>
            </ul>

            <h2 className="font-bold py-2">9. Feedback and Continuous Improvement</h2>
            <ul>
              <li>Provide constructive feedback on service quality and process efficiency.</li>
              <li>Participate in post-shipment reviews to capture lessons learned.</li>
              <li>Collaborate on improvements that benefit both parties.</li>
            </ul>

            <h2 className="font-bold py-2">10. Contact</h2>
            <p>
              For questions about these Guidelines, please contact your CatKat representative or email <a href="mailto:info@catkat.co">info@catkat.co</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guidelines;
