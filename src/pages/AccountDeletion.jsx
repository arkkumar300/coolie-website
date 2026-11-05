
import { useState } from 'react';
import {AlertTriangle,CheckCircle2,ClipboardList,LockKeyhole,Phone,ShieldCheck,Smartphone,ArrowLeft,RefreshCw,LoaderCircle,Mail,AlertCircle} from 'lucide-react';

const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '');
const SUPPORT_EMAIL =
  import.meta.env.VITE_SUPPORT_EMAIL || 'support@coolieglobal.com';

const inputClass =
  'w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#FD9A00] disabled:opacity-60';

export default function AccountDeletion() {
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [reason, setReason] = useState('');
  const [otp, setOtp] = useState('');
  const [requestId, setRequestId] = useState('');
  const [verificationToken, setVerificationToken] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState({ kind: '', message: '' });
  const [loading, setLoading] = useState(false);

  const notify = (kind, message) => setStatus({ kind, message });

  const clearStatus = () => setStatus({ kind: '', message: '' });

  const fullPhoneNumber = () => {
    const digits = phone.replace(/\D/g, '');
    return `${countryCode}${digits}`;
  };

  // API helper: all API calls remain in this component.
  async function apiPost(endpoint, body) {
    if (!API_BASE) {
      throw new Error(
        'API URL is not configured. Add VITE_API_BASE_URL to your .env file.'
      );
    }

    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.success === false) {
      throw new Error(data.message || `Request failed (${response.status}).`);
    }

    return data;
  }

  // STEP 1: Send OTP.
  async function sendOtp(e) {
    e.preventDefault();
    clearStatus();

    const digits = phone.replace(/\D/g, '');

    if (!/^\d{7,15}$/.test(digits)) {
      notify('error', 'Enter a valid registered phone number.');
      return;
    }

    if (!countryCode.startsWith('+')) {
      notify('error', 'Select a valid country calling code.');
      return;
    }

    setLoading(true);

    try {
      const data = await apiPost('/account/delete/send-otp', {
        phoneNumber: fullPhoneNumber(),
      });

      if (!data.requestId) {
        throw new Error('The API response must include requestId.');
      }

      setRequestId(data.requestId);
      setOtp('');
      setVerificationToken('');
      setStep('otp');

      notify(
        'success',
        data.message || 'OTP sent to your registered mobile number.'
      );
    } catch (error) {
      notify('error', error.message || 'Unable to send OTP.');
    } finally {
      setLoading(false);
    }
  }

  // STEP 2: Verify OTP.
  async function verifyOtp(e) {
    e.preventDefault();
    clearStatus();

    if (!/^\d{6}$/.test(otp)) {
      notify('error', 'Enter the valid 6-digit OTP.');
      return;
    }

    setLoading(true);

    try {
      const data = await apiPost('/account/delete/verify-otp', {
        phoneNumber: fullPhoneNumber(),
        requestId,
        otp,
      });

      if (!data.verificationToken) {
        throw new Error('The API response must include verificationToken.');
      }

      setVerificationToken(data.verificationToken);
      setStep('confirm');

      notify(
        'success',
        data.message || 'Your phone number has been verified.'
      );
    } catch (error) {
      notify('error', error.message || 'OTP verification failed.');
    } finally {
      setLoading(false);
    }
  }

  // Resend OTP.
  async function resendOtp() {
    clearStatus();
    setLoading(true);

    try {
      const data = await apiPost('/account/delete/send-otp', {
        phoneNumber: fullPhoneNumber(),
      });

      if (!data.requestId) {
        throw new Error('The API response must include requestId.');
      }

      setRequestId(data.requestId);
      setOtp('');

      notify('success', data.message || 'A new OTP has been sent.');
    } catch (error) {
      notify('error', error.message || 'Unable to resend OTP.');
    } finally {
      setLoading(false);
    }
  }

  // STEP 3: Confirm deletion.
  async function deleteAccount(e) {
    e.preventDefault();
    clearStatus();

    if (!confirmed) {
      notify('error', 'Please confirm your account deletion request.');
      return;
    }

    if (!verificationToken) {
      notify('error', 'Please verify your phone number first.');
      return;
    }

    setLoading(true);

    try {
      const data = await apiPost('/account/delete/confirm', {
        phoneNumber: fullPhoneNumber(),
        verificationToken,
        reason: reason.trim(),
        confirmed: true,
      });

      setStep('success');
      setOtp('');
      setRequestId('');
      setVerificationToken('');
      setReason('');
      setConfirmed(false);

      notify(
        'success',
        data.message || 'Your account deletion has been processed.'
      );
    } catch (error) {
      notify('error', error.message || 'Unable to process deletion.');
    } finally {
      setLoading(false);
    }
  }

  function goBack() {
    clearStatus();

    if (step === 'otp') {
      setStep('phone');
      setOtp('');
      setRequestId('');
    } else if (step === 'confirm') {
      setStep('otp');
      setVerificationToken('');
      setConfirmed(false);
    }
  }

  const steps = [
    { key: 'phone', label: 'Phone number' },
    { key: 'otp', label: 'Verify OTP' },
    { key: 'confirm', label: 'Delete account' },
  ];

  const activeIndex = steps.findIndex((item) => item.key === step);

  return (
    <main className="min-h-screen bg-[#FAFAF9] px-4 py-10 text-neutral-900 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition hover:text-[#B96D00]"
          >
            <ArrowLeft size={17} />
            Back to Home
          </a>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF3DC] text-[#A96500]">
              {step === 'success' ? (
                <CheckCircle2 size={24} />
              ) : (
                <LockKeyhole size={24} />
              )}
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#A96500]">
                Your account, your choice
              </p>
              <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {step === 'success'
                  ? 'Account deletion complete'
                  : 'Request account deletion'}
              </h1>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {step === 'success'
                  ? 'The server has responded to your deletion request.'
                  : 'Request deletion of your Coolie account using your registered phone number. Verify your phone before confirming deletion.'}
              </p>
            </div>
          </div>

          {step !== 'success' && (
            <>
              <div className="mt-7 rounded-2xl border border-[#F0D8AD] bg-[#FFF8EC] p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    className="mt-0.5 shrink-0 text-[#A96500]"
                    size={20}
                  />
                  <div>
                    <h2 className="font-bold">Before you continue</h2>
                    <p className="mt-2 text-sm leading-6 text-neutral-700">
                      Account deletion may be irreversible. Certain records
                      may need to be retained for legal, security, accounting
                      or dispute-related reasons. Never share your OTP or
                      password with support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    Icon: Phone,
                    title: '1. Identify your account',
                    desc: 'Enter your registered phone number.',
                  },
                  {
                    Icon: ClipboardList,
                    title: '2. Verify ownership',
                    desc: 'Receive and verify your OTP.',
                  },
                  {
                    Icon: ShieldCheck,
                    title: '3. Confirm deletion',
                    desc: 'Confirm your account deletion request.',
                  },
                ].map(({ Icon, title, desc }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-neutral-200 p-4"
                  >
                    <Icon size={22} className="text-[#B96D00]" />
                    <h2 className="mt-3 text-sm font-extrabold">{title}</h2>
                    <p className="mt-2 text-xs leading-6 text-neutral-600">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2">
                {steps.map((item, index) => (
                  <div
                    key={item.key}
                    className={`rounded-lg border p-3 text-center text-xs font-semibold sm:text-sm ${
                      activeIndex >= index
                        ? 'border-[#FD9A00] bg-[#FFF8EC] text-neutral-900'
                        : 'border-neutral-200 bg-white text-neutral-400'
                    }`}
                  >
                    <span
                      className={`mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full ${
                        activeIndex >= index
                          ? 'bg-[#FD9A00] text-neutral-950'
                          : 'bg-neutral-100 text-neutral-500'
                      }`}
                    >
                      {index + 1}
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 'phone' && (
            <form onSubmit={sendOtp} className="mt-8 max-w-xl space-y-5">
              <div>
                <label
                  htmlFor="countryCode"
                  className="mb-2 block text-sm font-bold"
                >
                  Country calling code
                </label>
                <select
                  id="countryCode"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  disabled={loading}
                  className={inputClass}
                >
                  <option value="+91">India (+91)</option>
                  <option value="+1">United States / Canada (+1)</option>
                  <option value="+44">United Kingdom (+44)</option>
                  <option value="+971">United Arab Emirates (+971)</option>
                  <option value="+61">Australia (+61)</option>
                  <option value="+65">Singapore (+65)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold"
                >
                  Registered phone number
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-neutral-200 px-4 focus-within:border-[#FD9A00]">
                  <Smartphone size={18} className="shrink-0 text-[#A96500]" />
                  <span className="text-sm text-neutral-500">{countryCode}</span>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel-national"
                    inputMode="numeric"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 15))}
                    placeholder="Registered mobile number"
                    disabled={loading}
                    className="min-w-0 flex-1 py-4 text-sm outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-4 text-sm font-extrabold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <LoaderCircle size={17} className="animate-spin" />
                ) : (
                  <Phone size={17} />
                )}
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={verifyOtp} className="mt-8 max-w-xl space-y-5">
              <div>
                <label
                  htmlFor="otp"
                  className="mb-2 block text-sm font-bold"
                >
                  Enter 6-digit OTP
                </label>
                <p className="mb-4 text-sm leading-6 text-neutral-600">
                  Enter the code sent to your registered number ending in{' '}
                  <strong>{phone.slice(-4)}</strong>.
                </p>
                <input
                  id="otp"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  maxLength={6}
                  pattern="[0-9]{6}"
                  required
                  disabled={loading}
                  placeholder="Enter OTP"
                  className={`${inputClass} text-center text-xl tracking-[0.4em]`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-4 text-sm font-extrabold text-white hover:bg-neutral-800 disabled:opacity-60"
              >
                {loading ? (
                  <LoaderCircle size={17} className="animate-spin" />
                ) : (
                  <ShieldCheck size={17} />
                )}
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>

              <button
                type="button"
                onClick={resendOtp}
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 px-5 py-3 text-sm font-bold hover:border-[#FD9A00] disabled:opacity-60"
              >
                <RefreshCw size={16} />
                Resend OTP
              </button>

              <button
                type="button"
                onClick={goBack}
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 py-2 text-sm text-neutral-600 hover:text-neutral-950"
              >
                <ArrowLeft size={16} />
                Change phone number
              </button>
            </form>
          )}

          {step === 'confirm' && (
            <form onSubmit={deleteAccount} className="mt-8 max-w-xl space-y-5">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 text-green-700" />
                  <div>
                    <p className="font-bold text-green-900">
                      Phone number verified
                    </p>
                    <p className="mt-1 text-sm text-green-800">
                      {fullPhoneNumber()}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="mb-2 block text-sm font-bold"
                >
                  Reason for deletion (optional)
                </label>
                <textarea
                  id="reason"
                  rows={3}
                  maxLength={500}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  disabled={loading}
                  placeholder="Tell us why you want to delete your account"
                  className={`${inputClass} resize-y`}
                />
              </div>

              <label className="flex items-start gap-3 text-xs leading-6 text-neutral-600">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  required
                  disabled={loading}
                  className="mt-1 h-4 w-4 accent-[#FD9A00]"
                />
                <span>
                  I request deletion of the Coolie account associated with this
                  phone number. I understand that certain information may be
                  retained where required or permitted by law.
                </span>
              </label>

              <button
                type="submit"
                disabled={loading || !confirmed || !verificationToken}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-4 text-sm font-extrabold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <LoaderCircle size={17} className="animate-spin" />
                ) : (
                  <LockKeyhole size={17} />
                )}
                {loading ? 'Processing deletion...' : 'Confirm Account Deletion'}
              </button>

              <button
                type="button"
                onClick={goBack}
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 py-2 text-sm text-neutral-600 hover:text-neutral-950"
              >
                <ArrowLeft size={16} />
                Back to OTP
              </button>
            </form>
          )}

          {step === 'success' && (
            <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={21} className="mt-0.5 text-green-700" />
                <div>
                  <h2 className="font-bold text-green-900">
                    Request processed
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-green-800">
                    {status.message}
                  </p>
                </div>
              </div>
              <a
                href="/"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-neutral-950 px-5 py-4 text-sm font-bold text-white hover:bg-neutral-800"
              >
                Back to Home
              </a>
            </div>
          )}

          {status.message && step !== 'success' && (
            <div
              role="status"
              aria-live="polite"
              className={`mt-5 flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                status.kind === 'success'
                  ? 'border-green-200 bg-green-50 text-green-900'
                  : 'border-red-200 bg-red-50 text-red-800'
              }`}
            >
              {status.kind === 'success' ? (
                <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
              ) : (
                <AlertCircle size={19} className="mt-0.5 shrink-0" />
              )}
              <span>{status.message}</span>
            </div>
          )}
        </div>

        {step !== 'success' && (
          <>
            <section className="mt-8">
              <h2 className="text-xl font-extrabold">
                What happens after deletion?
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-neutral-600">
                <li>
                  Your phone number must be verified before the backend
                  processes the deletion.
                </li>
                <li>
                  Eligible personal data will be deleted or anonymised
                  according to applicable law and your published policy.
                </li>
                <li>
                  Certain transaction, accounting, security or legally required
                  records may need to be retained.
                </li>
              </ul>
            </section>

            <section className="mt-8 border-t border-neutral-200 pt-7">
              <h2 className="text-xl font-extrabold">Need help?</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                If you cannot access your registered phone number, contact
                support for an alternative verification process.
              </p>

              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
                  'Coolie account deletion request'
                )}`}
                className="mt-4 inline-flex items-center gap-3 break-all text-sm font-semibold text-neutral-800 hover:text-[#A96500]"
              >
                <Mail size={18} className="shrink-0 text-[#A96500]" />
                {SUPPORT_EMAIL}
              </a>
            </section>
          </>
        )}

        <p className="mt-8 text-xs leading-6 text-neutral-500">
          Never send your password or OTP to support. This page relies on
          backend verification before account deletion.
        </p>
      </div>
    </main>
  );
}
