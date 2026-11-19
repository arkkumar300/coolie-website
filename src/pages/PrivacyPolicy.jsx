
import LegalLayout from '../../components/LegalLayout';

const email =
  import.meta.env.VITE_SUPPORT_EMAIL || 'support@coolieglobal.com';

const companyName = 'Shahills Enterprises';
const appName = 'Coolie';
const packageName = 'com.esoteric.coolie';

const privacyPolicyUrl =
  'https://coolieglobal.com/cooliePartner/privacy-policy';

const accountDeletionUrl =
  'https://coolieglobal.com/cooliePartner/account-deletion';

export default function PrivacyPolicy() {
  const updatedDate = '19 November 2026';

  return (
    <LegalLayout
      eyebrow="Your privacy matters"
      title="Privacy Policy"
      updated={updatedDate}
      summary={`This Privacy Policy explains how ${companyName} collects, uses, stores, shares and protects information when you use the ${appName} mobile application or website.`}
    >
      <h2>1. About Us</h2>

      <p>
        <strong>{appName}</strong> is a worker-booking and
        work-management application operated by{' '}
        <strong>{companyName}</strong> ("we", "us" or "our").
      </p>

      <p>
        This Privacy Policy applies to the CooliePartner mobile
        application and related services.
      </p>

      <p>
        <strong>Application Name:</strong> {appName}
        <br />
        <strong>Developer / Company:</strong> {companyName}
        <br />
        <strong>Website:</strong>{' '}
        <a href="https://coolieglobal.com">
          https://coolieglobal.com
        </a>
      </p>

      <h2>2. Information We Collect</h2>

      <p>
        Depending on how you use our application, we may collect
        the following categories of information:
      </p>

      <ul>
        <li>
          <strong>Phone Number:</strong> Your registered mobile
          number and verification information used for account
          registration, login and security.
        </li>

        <li>
          <strong>Account Information:</strong> Your name,
          profile details and customer or worker account type.
        </li>

        <li>
          <strong>Booking Information:</strong> Service requests,
          work descriptions, booking details, booking status and
          related transaction references.
        </li>

        <li>
          <strong>Location Information:</strong> Location
          information, if you grant location permission and use
          features that require it.
        </li>

        <li>
          <strong>Device and Technical Information:</strong>
          Device details, application version, diagnostics,
          crash reports and technical information where collected
          by the application or integrated services.
        </li>

        <li>
          <strong>Support Information:</strong> Information you
          provide when contacting our customer support team.
        </li>
      </ul>

      <p>
        We collect only information necessary for the purposes
        described in this policy and according to the permissions
        and features you use.
      </p>

      <h2>3. How We Use Your Information</h2>

      <p>
        Information collected through CooliePartner may be used
        for the following purposes:
      </p>

      <ul>
        <li>Creating and managing user accounts.</li>
        <li>Verifying mobile numbers and securing accounts.</li>
        <li>Providing worker-booking and management services.</li>
        <li>Managing bookings and service requests.</li>
        <li>Sending important account and booking notifications.</li>
        <li>Responding to customer support requests.</li>
        <li>Preventing fraudulent or unauthorized activities.</li>
        <li>Maintaining application security and reliability.</li>
        <li>Complying with applicable legal obligations.</li>
      </ul>

      <h2>4. Permissions and Consent</h2>

      <p>
        CooliePartner may request access to certain device
        permissions when required for application functionality.
      </p>

      <p>
        For example, location permission may be requested if
        location-related services are provided.
      </p>

      <p>
        You can manage applicable permissions through your
        device settings. Disabling certain permissions may
        affect related application features.
      </p>

      <h2>5. Information Sharing</h2>

      <p>
        We do not sell users' personal information.
      </p>

      <p>
        Where necessary to operate our services, information
        may be shared with:
      </p>

      <ul>
        <li>
          <strong>Service Providers:</strong> Third-party
          providers supporting hosting, authentication,
          notifications, analytics or other services actually
          integrated into our application.
        </li>

        <li>
          <strong>Service Participants:</strong> Relevant
          customer or worker information needed to fulfil
          booking and service requests.
        </li>

        <li>
          <strong>Legal Authorities:</strong> Where disclosure
          is required by applicable law or valid legal process.
        </li>
      </ul>

      <p>
        Information is shared only as necessary for the
        applicable purpose and subject to relevant safeguards.
      </p>

      <h2>6. Data Retention</h2>

      <p>
        We retain personal information only for as long as
        necessary to provide our services, maintain account
        security, resolve disputes and comply with applicable
        legal obligations.
      </p>

      <p>
        When an account deletion request is completed, we
        delete associated personal information unless certain
        records must be retained for legal, regulatory,
        accounting or security purposes.
      </p>

      <h2>7. Data Security</h2>

      <p>
        We use reasonable technical and organizational measures
        designed to protect personal information against
        unauthorized access, alteration, disclosure or
        destruction.
      </p>

      <p>
        However, no electronic transmission or storage system
        can be guaranteed to be completely secure.
      </p>

      <h2>8. Account and Data Deletion</h2>

      <p>
        Users can request deletion of their CooliePartner
        account and associated personal information.
      </p>

      <p>
        To request account deletion, visit our official
        Account Deletion page:
      </p>

      <p>
        <a href={accountDeletionUrl}>
          Delete Your CooliePartner Account
        </a>
      </p>

      <p>
        You can also contact our support team at{' '}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <p>
        Certain information may be retained where required
        or permitted by applicable law.
      </p>

      <h2>9. Children's Privacy</h2>

      <p>
        CooliePartner is not intended for children who are
        below the minimum age permitted to use the service
        under applicable law.
      </p>

      <p>
        If we become aware that personal information has
        been collected from a child in violation of applicable
        requirements, we will take appropriate steps to
        address the information.
      </p>

      <h2>10. International Data Transfers</h2>

      <p>
        Where information is processed or stored outside
        your country, we will take appropriate measures
        required by applicable data protection laws.
      </p>

      <h2>11. Changes to This Privacy Policy</h2>

      <p>
        We may update this Privacy Policy from time to time
        to reflect changes in our application, services,
        legal requirements or data practices.
      </p>

      <p>
        Updated policies will be published on this page
        with a revised effective date.
      </p>

      <h2>12. Contact Information</h2>

      <p>
        If you have questions about this Privacy Policy,
        your personal information or account deletion,
        please contact us:
      </p>

      <p>
        <strong>Developer / Company:</strong> {companyName}
        <br />
        <strong>Application:</strong> {appName}
        <br />
        <strong>Email:</strong>{' '}
        <a href={`mailto:${email}`}>{email}</a>
        <br />
        <strong>Website:</strong>{' '}
        <a href="https://coolieglobal.com">
          https://coolieglobal.com
        </a>
      </p>

      <p>
        <strong>Effective Date:</strong> {updatedDate}
      </p>
    </LegalLayout>
  );
}
