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
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.email }),
      });
      const result = await response.json();
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || 'error');
      }
      setStatus('done');
      setMessage(result.message || 'ایمیل ذخیره شد.');
      reset();
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error && error.message !== 'error'
          ? error.message
          : 'ثبت‌نام انجام نشد. لطفاً دوباره تلاش کنید.'
      );
    }
  });

  return (
    <Section>
      <Form
        onSubmit={onSubmit}
        className="p-4 xs:p-6 md:p-8 bg-white rounded-[32px] relative overflow-hidden"
        customClasses={{
          fieldsetWrapper:
            'flex flex-col md:flex-row gap-6 md:gap-10 md:items-center md:justify-between',
        }}
      >
        <Wrapper className="md:max-w-[40%]">
          <Title>اشتراک در خبرنامه</Title>
          <Description>
            ایمیل‌تان را بگذارید تا خبرهای جدید آوینا را برایتان بفرستیم.
          </Description>
        </Wrapper>

        <div className="relative w-full md:w-[55%] md:max-w-[420px]">
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
                  required: 'آدرس ایمیل ضروری است',
                  pattern: {
                    value: emailPattern,
                    message: 'ایمیل معتبر نیست',
                  },
                }}
                placeholder="info@avina.com"
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

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full pt-5">
            {message ? (
              <p
                className={`text-m-body2 ${
                  status === 'error' ? 'text-error' : 'text-primary'
                }`}
              >
                {message}
              </p>
            ) : (
              <span />
            )}
            <StylizedButton
              className="min-w-44 self-end"
              text={status === 'loading' ? 'در حال ذخیره...' : 'عضویت'}
              type="submit"
            />
          </div>
        </div>

        <VerticalImage
          className="hidden md:block w-12 h-full bottom-0 -left-12"
          src="newsletter"
        />
      </Form>
    </Section>
  );
};

export default SubscribeToNewsletter;
