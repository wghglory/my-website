import {EmailJSResponseStatus, sendForm} from '@emailjs/browser';
import dynamic from 'next/dynamic';
import {FormEvent, useState} from 'react';
import {BsCheckCircle} from 'react-icons/bs';
import {CgSpinner} from 'react-icons/cg';
import {RiErrorWarningLine} from 'react-icons/ri';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player) as Promise<React.ComponentType<any>>,
  {ssr: false},
);

const inputClass =
  'w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring focus:ring-queen-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-king-500';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');

  const btnStatusClass =
    status === 'pending' ? 'btn-loading' : status === 'success' ? 'btn-success' : status === 'error' ? 'btn-error' : '';

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    // Validate environment variables
    if (!serviceId || !templateId || !userId) {
      console.error('EmailJS environment variables are not set');
      setStatus('error');
      return;
    }

    setStatus('pending');

    try {
      // Way1: https://www.emailjs.com/docs/examples/reactjs. Can define templates
      // Use form element directly instead of selector for better reliability
      const response = await sendForm(serviceId, templateId, form, userId);

      console.log('EmailJS response:', response);

      // Check for successful response (status 200-299)
      if (response.status >= 200 && response.status < 300) {
        setStatus('success');
        form.reset(); // Reset form after successful submission
      } else {
        throw new EmailJSResponseStatus(response.status, response.text || 'Unknown error');
      }
    } catch (err) {
      console.error('EmailJS error:', err);

      // Handle EmailJSResponseStatus errors
      if (err instanceof EmailJSResponseStatus) {
        console.error(`EmailJS error: ${err.status} - ${err.text}`);
      }

      setStatus('error');
    }

    // Way2: https://formsubmit.co/ajax-documentation. No registration
    // const formData: any = {};
    // (Array.from(event.currentTarget.elements) as HTMLFormElement[]).forEach((e) => {
    //   if (e.name) {
    //     formData[e.name] = e.value;
    //   }
    // });
    // fetch('https://formsubmit.co/ajax/guanghui-wang@foxmail.com', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
  }

  return (
    <div className="container mx-auto my-10 max-w-2xl rounded-md p-5">
      <div className="mx-7 flex items-center justify-center gap-2 text-center">
        <h2 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact me</h2>
        <Player autoplay loop src="/lottie/envelop.json" className="w-32"></Player>
      </div>

      <div className="m-7">
        <form id="form" onSubmit={submit}>
          {/* EmailJS template variables - these should match your EmailJS template */}
          {/* Note: _subject, _cc, _captcha are formsubmit.co fields, not EmailJS fields */}
          {/* If you need these, configure them in your EmailJS template instead */}

          <div className="mb-6">
            <label htmlFor="name" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">
              Full Name
            </label>
            <input type="text" name="name" required className={inputClass} />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">
              Email Address
            </label>
            <input type="email" name="email" required className={inputClass} />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">
              Phone Number
            </label>
            <input type="text" name="phone" placeholder="Optional" className={inputClass} />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">
              Subject
            </label>
            <input type="text" name="subject" required className={inputClass} />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-sm text-gray-600 dark:text-gray-400">
              Your Message
            </label>
            <textarea rows={5} name="message" placeholder="Your Message" className={inputClass} required></textarea>
          </div>
          <div className="mb-6 flex justify-center">
            <button className={`btn-primary ${btnStatusClass}`} type="submit" disabled={status === 'pending'}>
              Send Message
              {status === 'pending' && <CgSpinner className="animate-spin" size={24} />}
              {status === 'success' && <BsCheckCircle size={24} />}
              {status === 'error' && <RiErrorWarningLine size={24} />}
            </button>
          </div>
          <div
            className={`min-h-[1.5rem] text-center opacity-0 duration-200 ${
              status === 'success' && 'text-green-600 opacity-100 dark:text-green-400'
            } ${status === 'error' && 'text-red-600 opacity-100 dark:text-red-400'}`}
          >
            {status === 'success' && <>Your email was sent successfully! I will reply you soon. Thank you!</>}
            {status === 'error' && (
              <>
                Something went wrong. Please send email to{' '}
                <a href="mailto:guanghui-wang@foxmail.com" className="text-king-600 dark:text-king-400">
                  guanghui-wang@foxmail.com
                </a>{' '}
                manually.
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
