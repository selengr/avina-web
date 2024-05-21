import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  Input_Global_Questionnaires: () => _t(translations.global.input.questionnaires),
  Input_Global_AddToCart: () => _t(translations.global.input.addToCart),
  Input_Global_QuestionNumber: () => _t(translations.global.input.questionNumber),
  Input_Global_Iّّtem: () => _t(translations.global.input.item),
  Input_Global_SearchAssessment: () => _t(translations.global.input.searchAssessment),
  Text_Global_Cost: () => _t(translations.global.text.cost),
  Text_Global_Price: () => _t(translations.global.text.price),
  Text_Global_RequireTime: () => _t(translations.global.input.requireTime),
  Text_Global_ClickQuestionnaire: () => _t(translations.global.text.clickQuestionnaire),
  Alert_Global_Success_AddToCart: () => _t(translations.global.alert.success.addToCart),
  Alert_Global_Error_AddToCart: () => _t(translations.global.alert.error.addToCart),
  Text_Global_NoResult: () => _t(translations.global.text.noResult),

  Text_IntroductionInfo_ItemNumber: () => _t(translations.introduction.info.index.text.itemNumber),
  Alert_IntroductionInfo_Error_AddToCart: () => _t(translations.introduction.info.user.alert.error.addToCart),
  Input_IntroductionList_PsyaQuestionnaires: () => _t(translations.introduction.list.input.psyaQuestionnaires),
};
