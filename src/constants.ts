export enum LensterUrl {
  STAGING = 'https://staging.lenster.xyz',
  TESTNET = 'https://testnet.lenster.xyz',
  PRODUCTION = 'https://lenster.xyz'
}

export enum LensEndpoint {
  STAGING = 'https://staging-api-social-mumbai.lens.crtlkey.com',
  TESTNET = 'https://api-mumbai.lens.dev',
  PRODUCTION = 'https://api.lens.dev'
}

export enum VerifierNetwork {
  POLYGON = 'POLYGON',
  MUMBAI = 'MUMBAI',
  SANDBOX = 'SANDBOX'
}

export enum FEATURE_FLAGS {
  STAGING_ENVIRONMENT = 'STAGING_ENVIRONMENT'
}

type FeatureFlag = {
  flag: string;
  enabledFor: string[];
};

export const featureFlags: FeatureFlag[] = [
  {
    flag: FEATURE_FLAGS.STAGING_ENVIRONMENT,
    enabledFor: [
      '0x4A1a2197f307222cD67A1762D9A352F64558d9Be', // josh
      '0x01d79BcEaEaaDfb8fD2F2f53005289CFcF483464', // sasi
      '0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3', // yogi
      '0x7241DDDec3A6aF367882eAF9651b87E1C7549Dff', // stani
      '0xcA1F6d7d8E902617f8Bdd87866e00f9844C40a77' // jouni
    ]
  }
];
