import { CONTACT } from '../constants';
import Contacts from '../Pages/Contacts';

const Contact = () => {
  return (
    <section className="container m-auto" id="contact">
      <div className="mx-auto max-w-6xl">
        <p className="my-10 text-center text-3xl lg:text-6xl">
          Interested In Working Together?
        </p>
        <Contacts />
        <p className="z-10 p-4 text-center text-xl">{CONTACT.text}</p>
        <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pb-6 lg:text-3xl">
          {CONTACT.email}
        </p>
        <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pb-6 lg:text-3xl">
          {CONTACT.phone1}
        </p>
        <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pb-6 lg:text-3xl">
          {CONTACT.phone2}
        </p>
      </div>
    </section>
  );
};

export default Contact;
