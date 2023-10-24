export const newTransactionQuery = `
  subscription NewTransaction {
    newMomokaTransaction {
      ... on MomokaPostTransaction {
        ...MomokaPostFields
        __typename
      }
      ... on MomokaCommentTransaction {
        ...MomokaCommentFields
        __typename
      }
      ... on MomokaMirrorTransaction {
        ...MomokaMirrorFields
        __typename
      }
      ... on MomokaQuoteTransaction {
        ...MomokaQuoteFields
        __typename
      }
      __typename
    }
  }

  fragment MomokaPostFields on MomokaPostTransaction {
    transactionId
    submitter
    createdAt
    app {
      id
    }
    publication {
      id
      by {
        ...ProfileFields
      }
    }
    verificationStatus {
      ... on MomokaVerificationStatusSuccess {
        verified
      }
      ... on MomokaVerificationStatusFailure {
        status
      }
    }
  }

  fragment MomokaCommentFields on MomokaCommentTransaction {
    transactionId
    submitter
    createdAt
    app {
      id
    }
    publication {
      id
      by {
        ...ProfileFields
      }
    }
    verificationStatus {
      ... on MomokaVerificationStatusSuccess {
        verified
      }
      ... on MomokaVerificationStatusFailure {
        status
      }
    }
  }

  fragment MomokaMirrorFields on MomokaMirrorTransaction {
    transactionId
    submitter
    createdAt
    app {
      id
    }
    publication {
      id
      by {
        ...ProfileFields
      }
    }
    verificationStatus {
      ... on MomokaVerificationStatusSuccess {
        verified
      }
      ... on MomokaVerificationStatusFailure {
        status
      }
    }
  }

  fragment MomokaQuoteFields on MomokaQuoteTransaction {
    transactionId
    submitter
    createdAt
    app {
      id
    }
    publication {
      id
      by {
        ...ProfileFields
      }
    }
    verificationStatus {
      ... on MomokaVerificationStatusSuccess {
        verified
      }
      ... on MomokaVerificationStatusFailure {
        status
      }
    }
  }

  fragment ProfileFields on Profile {
    id
    handle
    ownedBy {
      address
    }
    operations {
      id
      isBlockedByMe {
        value
      }
      isFollowedByMe {
        value
      }
      isFollowingMe {
        value
      }
      canBlock
      canUnblock
      canFollow
      canUnfollow
    }
    stats {
      id
      followers
      following
      comments
      posts
      mirrors
      quotes
      publications
      reactions
      reacted
      countOpenActions
    }
    metadata {
      displayName
      bio
      rawURI
      appId
      picture {
        ... on ImageSet {
          raw {
            uri
          }
          optimized {
            uri
          }
        }
        ... on NftImage {
          image {
            raw {
              uri
            }
          }
        }
      }
    }
  }
`;
