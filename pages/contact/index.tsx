import {sendForm} from '@emailjs/browser';
import {FormEvent} from 'react';

const inputClass =
  'w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring focus:ring-queen-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-sky-500';

export default function ContactPage() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Way1: https://www.emailjs.com/docs/examples/reactjs. Can define templates
    sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      '#form',
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
    ).then(
      (res) => {},
      (err) => {},
    );

    // Way2: https://formsubmit.co/ajax-documentation. No registration
    // const formData: any = {};
    // (Array.from(event.currentTarget.elements) as HTMLFormElement[]).forEach((e) => {
    //   if (e.name) {
    //     formData[e.name] = e.value;
    //   }
    // });
    // fetch('https://formsubmit.co/ajax/wghglory89@gmail.com', {
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
    <main className="container mx-auto my-10 max-w-2xl rounded-md p-5 shadow-sm">
      <div className="text-center">
        <h2 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact me</h2>
      </div>
      <div className="m-7">
        <form id="form" onSubmit={submit}>
          <input type="hidden" name="_subject" value="New submission from guanghui website" />
          <input type="hidden" name="_cc" value="wghglory89@gmail.com,guanghui-wang@foxmail.com" />
          <input type="hidden" name="_captcha" value="true" />

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
          <div className="mb-6 text-center">
            <button className="btn-primary inline" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
