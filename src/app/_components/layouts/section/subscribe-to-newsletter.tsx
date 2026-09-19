'use client';
import { useForm } from 'react-hook-form';

import {
  Form,
  Title,
  Button,
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

const SubscribeToNewsletter = () => {
  const { control } = useForm<any>({});

  return (
    <Section>
      <Form
        // disabled={isFormDisabled}
        // loading={isFormDisabled}
        className="p-4 xs:p-8 bg-white rounded-[32px] md:h-[345px] relative"
        customClasses={{
          fieldsetWrapper:
            'flex flex-col md:flex-row h-full md:justify-around md:items-center',
        }}
      >
        <Wrapper className="md:max-w-[30%]">
          <Title>اشتراک در خبرنامه</Title>
          <Description>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </Description>
        </Wrapper>

        <div className="relative w-full md:w-[50%] md:max-w-[40%]">
          <FormRow>
            <InputGroup>
              <InputLabel
                name="lastName"
                className="text-secondary"
              >
                آدرس ایمیل
              </InputLabel>
              <InputController
                id="lastName"
                name="lastName"
                control={control}
                rules={{
                  required: 'آدرس ایمیل  ضروری است',
                }}
                placeholder="info@Avina.com"
                direction="ltr"
                type="number"
                addonBefore={
                  <IconEmail
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="#212B36"
                    stroke="none"
                  />
                }
                //   disabled={isFormDisabled}
              />
            </InputGroup>
          </FormRow>

          <div className="flex justify-end w-full pt-7 md:absolute md:1bottom-20">
            <StylizedButton
              className="py-7 px-[6px]  min-w-52"
              text={'عضویت'}
            />{' '}
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
