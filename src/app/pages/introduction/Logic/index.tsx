import { Service } from 'utils';
import * as Types from 'redux/action/types';

export const getAssessmentShowOnePackage = async (id) => {
  await Service.Request(Types.ASSESSMENT_SHOWONEPACKAGE_REQUEST, id);
};
