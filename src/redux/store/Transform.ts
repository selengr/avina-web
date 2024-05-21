import { createTransform } from 'redux-persist';
import CryptoJS from 'crypto-js';

const secretKey = 'DQoNCnNhbHRlZCBieSDOnEphdmFkU0Ygz4gNCg0K';

const encryptor: any = createTransform(
  (inboundState: any) => {
    if (!inboundState) return inboundState;
    const encryptedText = CryptoJS.Rabbit.encrypt(JSON.stringify(inboundState), secretKey);
    return encryptedText.toString();
  },
  (outboundState: string) => {
    if (!outboundState) return outboundState;
    const bytes = CryptoJS.Rabbit.decrypt(outboundState, secretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decrypted);
  },
);

export default encryptor;
