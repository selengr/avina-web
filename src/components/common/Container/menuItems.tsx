import { Icons } from 'components';
import { messages } from 'components/messages';
import { useTranslation } from 'react-i18next';
import { Util } from 'utils';

export default function Menuitem() {
  const { t } = useTranslation();
  const iconSize = Util.ScreenSize();
  return {
    agent: [
      {
        path: '/Dashboard',
        icon: <Icons name='Home' size={iconSize} />,
        iconOver: <Icons name='Home' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_HomePage())}`,
        badge: false,
      },
      {
        path: '/assessments',
        icon: <Icons name='Test' size={iconSize} />,
        iconOver: <Icons name='Test' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_MyAssessment())}`,
        badge: false,
      },
      {
        path: '/users',
        icon: <Icons name='Participants' size={iconSize} />,
        iconOver: <Icons name='Participants' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Participants())}`,
        badge: false,
      },
      {
        path: '/groups',
        icon: <Icons name='Group' size={iconSize} />,
        iconOver: <Icons name='Group' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Groups())}`,
        badge: false,
      },
      {
        path: '/Report',
        icon: <Icons name='Report' size={iconSize} />,
        iconOver: <Icons name='Report' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Reports())}`,
        badge: false,
      },
      {
        path: '/introduction',
        icon: <Icons name='Blog' size={iconSize} />,
        iconOver: <Icons name='Blog' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_IntroduceQuestionnaire())}`,
        badge: false,
      },
      {
        path: '/suggestion',
        icon: <Icons name='Suggestion' size={iconSize} />,
        iconOver: <Icons name='Suggestion' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Suggestion())}`,
        badge: false,
      },
      {
        path: '/cart',
        icon: <Icons name='Basket' size={iconSize} />,
        iconOver: <Icons name='Basket' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Cart())}`,
        badge: true,
      },
      {
        path: '/profile',
        icon: <Icons name='User' size={iconSize} />,
        iconOver: <Icons name='User' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Account())}`,
        badge: false,
      },
    ],
    scope: [
      {
        path: '/Dashboard',
        icon: <Icons name='Home' size={iconSize} />,
        iconOver: <Icons name='Home' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_HomePage())}`,
        badge: false,
      },
      {
        path: '/assessments',
        icon: <Icons name='Test' size={iconSize} />,
        iconOver: <Icons name='Test' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_MyAssessment())}`,
        badge: false,
      },
      {
        path: '/profile',
        icon: <Icons name='User' size={iconSize} />,
        iconOver: <Icons name='User' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Account())}`,
        badge: false,
      },
    ],
    user: [
      {
        path: '/Dashboard',
        icon: <Icons name='Home' size={iconSize} />,
        iconOver: <Icons name='Home' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_HomePage())}`,
        badge: false,
      },
      {
        path: '/assessments',
        icon: <Icons name='Test' size={iconSize} />,
        iconOver: <Icons name='Test' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_MyAssessment())}`,
        badge: false,
      },
      {
        path: '/introduction',
        icon: <Icons name='Blog' size={iconSize} />,
        iconOver: <Icons name='Blog' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_IntroduceQuestionnaire())}`,
        badge: false,
      },
      {
        path: '/cart',
        icon: <Icons name='Basket' size={iconSize} />,
        iconOver: <Icons name='Basket' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Cart())}`,
        badge: true,
      },
      {
        path: '/profile',
        icon: <Icons name='User' size={iconSize} />,
        iconOver: <Icons name='User' active={true} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Account())}`,
        badge: false,
      },
    ],
    admin: [
      {
        path: '/admin/users',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Participants())}`,
        badge: false,
      },
      {
        path: '/admin/assessments',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Assessments())}`,
        badge: false,
      },
      {
        path: '/admin/questionnaires',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: `${t(messages.Input_Global_Questionnaires())}`,
        badge: false,
      },
      {
        path: '/admin/owners',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Companies())}`,
        badge: false,
      },
      {
        path: '/admin/orders',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Purchase())}`,
        badge: false,
      },
      {
        path: '/admin/logs',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Reports())}`,
        badge: false,
      },
      {
        path: '/admin/commands',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Commands())}`,
        badge: false,
      },
      {
        path: '/admin/config',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: `${t(messages.Input_ComponentsCommonContainer_Config())}`,
        badge: false,
      },
      {
        path: '/admin/frontversion',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: 'front version',
        badge: false,
      },
      {
        path: '/admin/loginactivities',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: 'login activities',
        badge: false,
      },
      {
        path: '/admin/setconfig',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: 'set config',
        badge: false,
      },
      {
        path: '/admin/updateserver',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: 'update server',
        badge: false,
      },
      {
        path: '/admin/updateFront',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: 'update front',
        badge: false,
      },
      {
        path: '/admin/notification',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: 'ارسال اعلان',
        badge: false,
      },
      {
        path: '/admin/importExcel',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: 'import excel',
        badge: false,
      },

      {
        path: '/admin/sendsms',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: 'ارسال پیامک',
        badge: false,
      },
      {
        path: '/admin/backup',
        icon: <Icons name='Burger-Menu' size={iconSize} />,
        iconOver: <Icons name='Burger-Menu' active={false} size={iconSize} />,
        primaryName: 'پشتیبان گیری',
        badge: false,
      },
    ],
  };
}
export { Menuitem as Menus };
