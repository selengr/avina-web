import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  Input_Global_Questionnaires: () => _t(translations.global.input.questionnaires),
  Input_Global_AddToMyAssessment: () => _t(translations.global.input.addToMyAssessment),
  Input_Global_Capacity: () => _t(translations.global.input.capacity),
  Input_Global_Item: () => _t(translations.global.input.item),
  Input_Global_RequireTime: () => _t(translations.global.input.requireTime),
  Input_Global_SearchAssessment: () => _t(translations.global.input.searchAssessment),
  Alert_Global_Success_AddToCart: () => _t(translations.global.alert.success.addToCart),
  Alert_Global_Error_AddToCart: () => _t(translations.global.alert.error.addToCart),
  Text_Global_Cost: () => _t(translations.global.text.cost),
  Text_Global_NoResult: () => _t(translations.global.text.noResult),

  Input_SuggestionList_PsyaSuggestion: () => _t(translations.suggestion.list.index.input.psyaSuggestion),
};
