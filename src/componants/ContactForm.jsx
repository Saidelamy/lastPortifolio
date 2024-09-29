import { IoSendSharp } from 'react-icons/io5';
import { FormProvider } from 'react-hook-form';

import Input from '../Ui/Input';
import Label from '../Ui/Label';
import useForms from '../hooks/useForms';

const ContactForm = () => {
  const { sendEmail, isLoading, methods, form } = useForms();
  return (
    <>
      <FormProvider {...methods}>
        <form
          className="grid grid-rows-2 gap-12 pt-16"
          ref={form}
          onSubmit={methods.handleSubmit(sendEmail)}
        >
          <div className="relative flex flex-col">
            <Input
              rules={{
                required: 'Please fill out this field.',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please provide a valid email address',
                },
              }}
              type="email"
              name="user_email"
              id="email"
              placeholder="Email"
            />
            <Label htmlFor="email">Your Email</Label>
          </div>

          <div className="relative flex flex-col">
            <Input
              rules={{ required: 'Please fill out this field.' }}
              id="message"
              name="message"
              type="text"
              placeholder="Email"
            />
            <Label htmlFor="message">Message</Label>
          </div>

          <div>
            <button
              className="flex items-center gap-2 rounded-br-2xl bg-white px-6 py-4 text-lg text-black"
              type="submit"
            >
              {!isLoading && <IoSendSharp />}
              {isLoading ? 'loading...' : 'Send message'}
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default ContactForm;
