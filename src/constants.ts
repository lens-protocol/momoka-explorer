export const IS_STAGING_ENVIRONMENT = process.env.NEXT_PUBLIC_IS_STAGING === 'true';

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
