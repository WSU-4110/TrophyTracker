import React from 'react';

const createInputField = (label: string | number | boolean |
  React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined, name: string | undefined, type: string | undefined, placeholder: string | undefined) => {
  return (
    <div className="mb-[22px]">
      <label htmlFor={name} className="text-body-color dark:text-dark-6 mb-4 block text-sm">
        {label}*
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="text-dark placeholder:text-body-color/60 focus:border-primary dark:border-dark-3 w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 focus:outline-none dark:text-white"
      />
    </div>
  );
};

const createMessageArea = () => {
  return (
    <div className="mb-[30px]">
      <label htmlFor="message" className="text-body-color dark:text-dark-6 mb-4 block text-sm">
        Message*
      </label>
      <textarea
        name="message"
        rows={1}
        placeholder="type your message here"
        className="text-dark placeholder:text-body-color/60 focus:border-primary dark:border-dark-3 w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 focus:outline-none dark:text-white"
      ></textarea>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
     
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
        
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="wow fadeInUp shadow-testimonial dark:bg-dark-2 rounded-lg bg-white px-8 py-10 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
              <h3 className="text-dark mb-8 text-2xl font-semibold dark:text-white md:text-[28px] md:leading-[1.42]">
                Send us a Message
              </h3>
              <form>
                {createInputField('Full Name', 'fullName', 'text', 'Adam Gelius')}
                {createInputField('Email', 'email', 'email', 'example@yourmail.com')}
                {createInputField('Phone', 'phone', 'text', '+885 1254 5211 552')}
                {createMessageArea()}
                <div className="mb-0">
                  <button type="submit" className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
