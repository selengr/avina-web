'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormRow,
  Section,
  InputGroup,
  InputLabel,
  InputController,
  TextareaController,
  Description,
  Title,
} from '../../common/field';

import { IconPhone } from '../../icons/icons';
import { VerticalImage } from '../../common/vertical-image/vertical-image';
import SelectBoxController from '../../common/field/select-box/select-box-controller';
import StylizedButton from '../../common/field/button/stylized-button';
import { phonePattern } from '@/lib/validation/forms';
import { postFormJson } from '@/lib/form-submit';

type ConsultingFormValues = {
  education: string;
  lastName: string;
  name: string;
  phone: string;
  description: string;
};

const RequestConsulting = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>(
    'idle'
  );
  const [message, setMessage] = useState('');
  const { control, handleSubmit, reset } = useForm<ConsultingFormValues>({
    defaultValues: {
      education: '',
      lastName: '',
      name: '',
      phone: '',
      description: '',
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus('loading');
    setMessage('');

    const result = await postFormJson('/api/consulting', values, {
      fallbackSuccessMessage: 'درخواست شما ذخیره شد.',
      fallbackErrorMessage: 'ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید.',
    });

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
    <Section
      id="consulting"
      className="flex flex-col lg:flex-row lg:justify-center lg:items-center xs:pt-24 lg:pt-24 lg:pb-4 scroll-mt-24"
    >
      <div className="w-full lg:w-[50%] mb-6 lg:mb-0 lg:ml-20">
        <div
          className={`h-28 lg:h-40 w-[70%]  max-w-[600px] rounded-t-[2rem] p-4 pt-4 font-medium relative`}
          style={{
            backgroundColor: '#687BF2',
            boxShadow: `0 1rem 0 #687BF2, 0 0 0 1rem transparent`,
          }}
        >
          <div
            className="absolute w-20 aspect-square -rotate-180 -left-8 -bottom-12"
            style={{
              background: ` radial-gradient(circle at 100% 100%, transparent 2rem, #687BF2 calc(1px + 2rem))`,
            }}
          ></div>

          <div className=" absolute right-0 top-2 p-4 lg:p-6 z-50">
            <Title className="lg:text-d-h2 text-m-h4 text-white">
              مشاوره تخصصی
            </Title>
            <Description className="text-white lg:pl-3">
              جهت دریافت مشاوره تخصصی و رایگان اطلاعات و پروژه و شماره تماس خود
              را ثبت کنید تا کارشناسان در اسرع وقت با شما تماس بگیرند.
            </Description>
          </div>
        </div>
        <div
          className={`h-[100px] relative text-white text-[1.25rem] leading-[1.8] pt-4 rounded-[2rem_0rem_2rem_2rem]`}
          style={{ backgroundColor: '#687BF2' }}
        >
          <Image
            src={`/robot/bot-think.svg`}
            height={226}
            width={216}
            alt="robot"
            className="w-[186px] h-[176px] lg:w-[226px] lg:h-[216px] -mt-28 lg:-mt-40 absolute -left-2 lg:left-0 -top-[93px]"
          />

          <Image
            src={`/images/arrow-left-long.svg`}
            height={21}
            width={37}
            alt="robot"
            className="w-[40px] absolute left-6 bottom-8"
          />
        </div>
      </div>

      <Form
        onSubmit={onSubmit}
        className="relative p-4 xs:p-6 lg:p-8 bg-white rounded-[32px] lg:w-[50%] w-full "
      >
        <h3 className="text-primary-text text-m-h5 lg:text-d-h3 font-bold pb-6 lg:pb-10 lg:font-kalameh">
          درخواست مشاوره
        </h3>
        <FormRow>
          <InputGroup>
            <InputLabel name="education">سطح تحصیلات</InputLabel>
            <SelectBoxController
              id="education"
              name="education"
              control={control}
              rules={{ required: 'سطح تحصیلات ضروری است' }}
              placeholder=" انتخاب نمایید"
              options={[
                { label: 'دیپلم', value: 'diploma' },
                { label: 'کارشناسی', value: 'bachelor' },
                { label: 'کارشناسی ارشد', value: 'master' },
                { label: 'دکتری', value: 'phd' },
              ]}
              isLoading={false}
              isSearchable={false}
              isDisabled={status === 'loading'}
            />
          </InputGroup>
        </FormRow>
        <FormRow>
          <InputGroup>
            <InputLabel name="lastName">نام خانوادگی </InputLabel>
            <InputController
              id="lastName"
              name="lastName"
              control={control}
              rules={{
                required: 'نام خانوادگی   ضروری است',
              }}
              placeholder="نام خانوادگی  را وارد کنید"
            />
          </InputGroup>

          <InputGroup>
            <InputLabel name="name">نام </InputLabel>
            <InputController
              id="name"
              name="name"
              control={control}
              rules={{
                required: 'نام  ضروری است',
              }}
              placeholder="نام خود را وارد کنید"
            />
          </InputGroup>
        </FormRow>

        <FormRow>
          <InputGroup>
            <InputLabel name="phone">شماره همراه</InputLabel>
            <InputController
              id="phone"
              name="phone"
              control={control}
              rules={{
                required: 'شماره همراه  ضروری است',
                pattern: {
                  value: phonePattern,
                  message: 'شماره همراه معتبر نیست',
                },
              }}
              placeholder="0913..."
              direction="ltr"
              type="tel"
              addonBefore={
                <IconPhone
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

        <FormRow>
          <InputGroup>
            <InputLabel>توضیحات</InputLabel>
            <TextareaController
              id="description"
              name="description"
              control={control}
              rules={{
                required: 'توضیحات ضروری است',
              }}
              placeholder="توضیحات را وارد کنید..."
              rows={5}
            />
          </InputGroup>
        </FormRow>

        {message ? (
          <p
            className={`text-m-body2 pt-2 ${
              status === 'error' ? 'text-error' : 'text-primary'
            }`}
          >
            {message}
          </p>
        ) : null}

        <div className="flex justify-end w-full pt-7">
          <StylizedButton
            text={status === 'loading' ? 'در حال ارسال...' : ' ثبت درخواست'}
            className="my-2 md:my-0 md:mt-4 py-2 min-w-52"
            type="submit"
          />
        </div>
        <VerticalImage
          className="w-12 h-full bottom-0 -left-10"
          src="consulting"
        />
      </Form>
    </Section>
  );
};

export default RequestConsulting;
