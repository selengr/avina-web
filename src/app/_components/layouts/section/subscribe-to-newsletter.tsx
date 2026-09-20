'use client';

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
import httpService from '@/services/api/http-service';
import { HOST_API_KEY } from '../../../../../config-global';

type NewsletterFormValues = {
  email: string;
};

const SubscribeToNewsletter = () => {
  const { control, handleSubmit, reset } = useForm<NewsletterFormValues>({
    defaultValues: { email: '' },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      if (HOST_API_KEY) {
        await httpService.post('/api/v1/public/newsletter', {
          email: values.email,
        });
      }
      window.alert(`عضویت با ایمیل ${values.email} ثبت شد.`);
      reset();
    } catch {
      window.alert('ثبت‌نام انجام نشد. لطفاً دوباره تلاش کنید.');
    }
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
            ایمیل‌تان را بگذارید تا خبرهای جدید آوینا را برایتان بفرستیم.
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
                  required: 'آدرس ایمیل ضروری است',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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

          <div className="flex justify-end w-full pt-7 md:absolute md:bottom-0">
            <StylizedButton
              className="py-7 px-[6px] min-w-52"
              text="عضویت"
              type="submit"
            />
          </div>
        </div>

        <VerticalImage
          className="w-12 h-full bottom-0 -left-12"
          src="newsletter"
        />
      </Form>
    </Section>
  );
};

export default SubscribeToNewsletter;
