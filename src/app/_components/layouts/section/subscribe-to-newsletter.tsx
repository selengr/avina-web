'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Form,
  Title,
  Wrapper,
  FormRow,
  Section,
  InputGroup,
  InputLabel,
  Description,
  InputController,
} from '../../common/field';
import { IconEmail } from '../../icons/icons';
import { VerticalImage } from '../../common/vertical-image/vertical-image';
import StylizedButton from '../../common/field/button/stylized-button';
import { emailPattern } from '@/lib/validation/forms';
import { postFormJson } from '@/lib/form-submit';

type NewsletterFormValues = {
  email: string;
};

const SubscribeToNewsletter = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>(
    'idle'
  );
  const [message, setMessage] = useState('');
  const { control, handleSubmit, reset } = useForm<NewsletterFormValues>({
    defaultValues: { email: '' },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus('loading');
    setMessage('');

    const result = await postFormJson(
      '/api/newsletter',
      { email: values.email },
      {
        fallbackSuccessMessage: 'ایمیل ذخیره شد.',
        fallbackErrorMessage: 'ثبت‌نام انجام نشد. لطفاً دوباره تلاش کنید.',
      }
    );

    if (result.ok) {
      setStatus('done');
      setMessage(result.message);
      reset();
      return;
    }

    setStatus('error');
    setMessage(result.message);
  });

  return (
    <Section>
      <Form
        onSubmit={onSubmit}
        className="p-4 xs:p-8 bg-white rounded-[32px] md:h-[345px] relative"
        customClasses={{
          fieldsetWrapper:
            'flex flex-col md:flex-row h-full md:justify-around md:items-center',
        }}
      >
        <Wrapper className="md:max-w-[30%]">
          <Title>اشتراک در خبرنامه</Title>
          <Description>
            با عضویت در خبرنامه آوینا، از اخبار خدمات و به‌روزرسانی‌های فنی
            باخبر شوید.
          </Description>
        </Wrapper>

        <div className="relative w-full md:w-[50%] md:max-w-[40%]">
          <FormRow>
            <InputGroup>
              <InputLabel
                name="email"
                className="text-secondary"
              >
                آدرس ایمیل
              </InputLabel>
              <InputController
                id="email"
                name="email"
                control={control}
                rules={{
                  required: 'آدرس ایمیل  ضروری است',
                  pattern: {
                    value: emailPattern,
                    message: 'ایمیل معتبر نیست',
                  },
                }}
                placeholder="info@Avina.com"
                direction="ltr"
                type="email"
                addonBefore={
                  <IconEmail
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="#212B36"
                    stroke="none"
                  />
                }
              />
            </InputGroup>
          </FormRow>

          {message ? (
            <p
              className={`text-m-body2 pt-3 ${
                status === 'error' ? 'text-error' : 'text-primary'
              }`}
            >
              {message}
            </p>
          ) : null}

          <div className="flex justify-end w-full pt-7 md:absolute md:bottom-20">
            <StylizedButton
              className="py-7 px-[6px]  min-w-52"
              text={status === 'loading' ? 'در حال ارسال...' : 'عضویت'}
              type="submit"
            />
          </div>
        </div>

        <VerticalImage
          className="w-12 h-full bottom-0 -left-12 "
          src="newsletter"
        />
      </Form>
    </Section>
  );
};

export default SubscribeToNewsletter;
