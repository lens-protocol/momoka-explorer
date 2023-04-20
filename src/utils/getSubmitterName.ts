import formatAddress from './formatAddress';

const getSubmitterName = (submitter: string) => {
  return submitter === '0x886Bb211aC324dAF3744b2AB0eF20C0aCf73eA59'
    ? `Lens Submitter - ${formatAddress(submitter)}`
    : submitter;
};

export default getSubmitterName;
