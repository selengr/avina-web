import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducer/index';
import encryptor from './Transform';
import { configureStore } from '@reduxjs/toolkit';
import { batchedSubscribe } from 'redux-batched-subscribe';
import _ from 'lodash';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'reduxjs-toolkit-persist/';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';
import autoMergeLevel2 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig: any = {
  key: 'psya',
  serialize: true,
  storage: storageSession,
  debug: process.env.NODE_ENV !== 'production',
  stateReconciler: autoMergeLevel2,
  blacklist: [
    'persist',
    '_persist',
    'isHydrated',
    'backDrop',
    'alert',
    'prompt',
    'authEnterPhone',
    'authEnterCode',
    'assessmentStore',
    'assessmentEdit',
    'assessmentDelete',
    'assessmentActivation',
    'assessmentShowOne',
    'assessmentShowList',
    'assessmentShowOnePackage',
    'assessmentSystemsList',
    'assessmentOrder',
    'assessmentPackages',
    'assessmentUserList',
    'allUserShowList',
    'userShowList',
    'userDelete',
    'userEdit',
    'userAddGroup',
    'userRegister',
    'userCancelAssign',
    'userShowOne',
    'userAssign',
    'questionnaireShowList',
    'questionnaireShowOne',
    'groupDelete',
    'groupEdit',
    'groupCreate',
    'groupShowOne',
    'groupShowList',
    'assessmentUsersByQuestionnaire',
    'testResult',
    'paymentDiscountCode',
    'profileDashboard',
    'mHesamIssueRequest',
    'mHesamUserCreditList',
    'mHesamPurchaseUpdate',
    'mHesamOTPSend',
    'ShowNotification',
  ],
  transforms: [encryptor],
  migrate: (state) => {
    // console.log('Migration Running!')
    return Promise.resolve(state);
  },
};

const persistedReducer = persistReducer(persistConfig, reducers);
const logger = createLogger({
  level: 'info',
  predicate: true,
  collapsed: true,
  duration: true,
  diff: true,
});
let middleware = [ReduxThunk];
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger];
}
const debounceNotify = _.debounce((notify) => notify());

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
  enhancers: [batchedSubscribe(debounceNotify)],
});
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
