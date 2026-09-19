import { Section, Title } from '@/app/_components/common/field';
import AccordionMenu from '@/app/ali/_components/accordion-menu/accordion-menu';

const accordionData = [
  {
    id: 1,
    title:
      'فرآیند همکاری با آوینا برای پیاده‌سازی یک راهکار فناوری اطلاعات چگونه است؟',
    content:
      'این محتوا برای آیتم ۱ است. این شامل اطلاعات دقیق درباره آیتم اول می‌باشد.',
  },
  {
    id: 2,
    title:
      'چگونه می‌توانم برای گزارش مشکلات یا درخواست پشتیبانی با آوینا تماس بگیرم؟',
    content:
      'این محتوا برای آیتم ۲ است. این شامل مرور و نکات کلیدی برای آیتم دوم می‌باشد.',
  },
  {
    id: 3,
    title:
      'آیا آوینا می‌تواند نرم‌افزار سفارشی برای نیازهای خاص کسب‌وکار ما توسعه دهد؟',
    content:
      'این محتوا برای آیتم ۳ است. این شامل جزئیات و توضیحات مختلف مرتبط با آیتم سوم می‌باشد.',
  },
  {
    id: 4,
    title: 'آیا آوینا خدمات پشتیبانی و نگهداری برای راهکارهای ارائه شده دارد؟',
    content:
      'این محتوا برای آیتم ۴ است. این شامل اطلاعات جذاب و کاربردی درباره آیتم چهارم می‌باشد.',
  },
];

const FAQ = () => {
  return (
    <Section>
      <Title>سوالات متداول</Title>
      <AccordionMenu accordionData={accordionData} />
    </Section>
  );
};

export default FAQ;
