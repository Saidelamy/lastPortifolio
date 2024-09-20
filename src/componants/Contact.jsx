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
        <p className="p-4 text-center text-xl">{CONTACT.text}</p>
      </div>
    </section>
  );
};

export default Contact;
