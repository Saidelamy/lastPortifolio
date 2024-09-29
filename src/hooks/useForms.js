import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const useForms = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm();

  function sendEmail() {
    setIsLoading(true);
    emailjs
      .sendForm(
        'service_ab8wh6n',
        'template_zl0nxaf',
        form.current,
        'vRG-L1-oKaucK4aFU',
      )
      .then(
        () => {
          setIsLoading(true);
          toast.success('messege sent to me successfully!');
          methods.reset();
          setIsLoading(false);
        },
        () => {
          toast.error('somthing not good!');
        },
      );
  }
  return { sendEmail, isLoading, methods, form };
};

export default useForms;
