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
import SelectBoxController from '../../common/field/select-box/select-box-controller';
import StylizedButton from '../../common/field/button/stylized-button';

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
    try {
      const response = await fetch('/api/consulting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || 'error');
      }
      setStatus('done');
      setMessage(result.message || 'درخواست شما ذخیره شد.');
      reset();
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error && error.message !== 'error'
          ? error.message
          : 'ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید.'
      );
    }
  });

  return (
    <Section
      id="consulting"
      className="scroll-mt-24 pt-10 md:pt-16 lg:pt-20 pb-6 lg:pb-8 overflow-x-hidden"
    >
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-10 w-full max-w-full">
        {/* Intro panel — compact on mobile */}
        <div className="w-full lg:w-[42%] shrink-0">
          <div className="relative overflow-hidden rounded-[28px] bg-primary text-white p-5 sm:p-6 lg:p-8 min-h-[160px] lg:min-h-full">
            <Title className="text-white text-m-h4 lg:text-d-h2 mb-2">
              مشاوره تخصصی
            </Title>
            <Description className="text-white/95 text-m-body2 lg:text-d-body1">
              اطلاعات و شماره تماس‌تان را ثبت کنید تا کارشناس‌ها در اسرع وقت با
              شما تماس بگیرند.
            </Description>

            <Image
              src="/robot/bot-think.svg"
              height={180}
              width={170}
              alt=""
              className="hidden sm:block absolute -left-2 bottom-0 w-[120px] lg:w-[180px] opacity-90 pointer-events-none"
            />
          </div>
        </div>

        {/* Form */}
        <Form
          onSubmit={onSubmit}
          className="relative p-4 sm:p-6 lg:p-8 bg-white rounded-[28px] lg:rounded-[32px] w-full lg:flex-1 shadow-sm border border-divider/40 overflow-hidden"
        >
          <h3 className="text-primary-text text-m-h5 lg:text-d-h3 font-bold pb-5 lg:pb-8 lg:font-kalameh">
            درخواست مشاوره
          </h3>

          <FormRow className="gap-4 md:gap-6">
            <InputGroup>
              <InputLabel name="education">سطح تحصیلات</InputLabel>
              <SelectBoxController
                id="education"
                name="education"
                control={control}
                rules={{ required: 'سطح تحصیلات ضروری است' }}
                placeholder="انتخاب نمایید"
                options={[
                  { label: 'دیپلم', value: 'diploma' },
                  { label: 'کارشناسی', value: 'bachelor' },
                  { label: 'کارشناسی ارشد', value: 'master' },
                  { label: 'دکتری', value: 'phd' },
                ]}
                isLoading={false}
                isSearchable={false}
                isDisabled={false}
              />
            </InputGroup>
          </FormRow>

          <FormRow className="gap-4 md:gap-6">
            <InputGroup>
              <InputLabel name="name">نام</InputLabel>
              <InputController
                id="name"
                name="name"
                control={control}
                rules={{ required: 'نام ضروری است' }}
                placeholder="نام خود را وارد کنید"
              />
            </InputGroup>

            <InputGroup>
              <InputLabel name="lastName">نام خانوادگی</InputLabel>
              <InputController
                id="lastName"
                name="lastName"
                control={control}
                rules={{ required: 'نام خانوادگی ضروری است' }}
                placeholder="نام خانوادگی را وارد کنید"
              />
            </InputGroup>
          </FormRow>

          <FormRow className="gap-4 md:gap-6">
            <InputGroup>
              <InputLabel name="phone">شماره همراه</InputLabel>
              <InputController
                id="phone"
                name="phone"
                control={control}
                rules={{
                  required: 'شماره همراه ضروری است',
                  pattern: {
                    value: /^09\d{9}$/,
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

          <FormRow className="gap-4 md:gap-6">
            <InputGroup>
              <InputLabel>توضیحات</InputLabel>
              <TextareaController
                id="description"
                name="description"
                control={control}
                rules={{ required: 'توضیحات ضروری است' }}
                placeholder="توضیحات را وارد کنید..."
                rows={4}
              />
            </InputGroup>
          </FormRow>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full pt-5">
            {message ? (
              <p
                className={`text-m-body2 order-2 sm:order-1 ${
                  status === 'error' ? 'text-error' : 'text-primary'
                }`}
              >
                {message}
              </p>
            ) : (
              <span className="order-2 sm:order-1" />
            )}
            <div className="order-1 sm:order-2 self-stretch sm:self-end flex justify-end">
              <StylizedButton
                text={status === 'loading' ? 'در حال ارسال...' : 'ثبت درخواست'}
                className="my-0 py-2 min-w-44 max-w-full"
                type="submit"
              />
            </div>
          </div>
        </Form>
      </div>
    </Section>
  );
};

export default RequestConsulting;
