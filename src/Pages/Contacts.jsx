import ContactForm from '../componants/ContactForm';

function Contacts() {
  return (
    <>
      <div className="justify-centerbg-white z-10 flex h-auto flex-col items-center bg-white bg-opacity-10 pt-10 text-[#fff] max-sm:block max-sm:h-[68vh]">
        <div className="mb-6 border-l-4 px-16 py-8 shadow-xl max-sm:border-0 max-sm:px-5 max-sm:shadow-none lg:w-[80%]">
          <div className="border-b-2 border-black pb-3">
            <div className="flex items-center justify-between gap-60 max-md:gap-10 max-sm:gap-0">
              <span className="text-4xl max-sm:text-3xl">Say hello</span>
            </div>
          </div>
          {/* form */}
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contacts;
