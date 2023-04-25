export const newTransactionQuery = `
    subscription NewTransaction {
        newDataAvailabilityTransaction {
            ... on DataAvailabilityPost {
                ...DAPostFields
                __typename
            }
            ... on DataAvailabilityComment {
                ...DACommentFields
                __typename
            }
            ... on DataAvailabilityMirror {
                ...DAMirrorFields
                __typename
            }
            __typename
        }
    }
    
    fragment DAPostFields on DataAvailabilityPost {
        transactionId
        submitter
        createdAt
        appId
        profile {
            ...ProfileFields
            __typename
        }
        publicationId
        __typename
    }
    
    fragment DACommentFields on DataAvailabilityComment {
        transactionId
        submitter
        createdAt
        appId
        profile {
            ...ProfileFields
            __typename
        }
        publicationId
        commentedOnProfile {
            ...ProfileFields
            __typename
        }
        commentedOnPublicationId
        __typename
    }
    
    fragment DAMirrorFields on DataAvailabilityMirror {
        transactionId
        submitter
        createdAt
        appId
        profile {
            ...ProfileFields
            __typename
        }
        publicationId
        mirrorOfProfile {
            ...ProfileFields
            __typename
        }
        mirrorOfPublicationId
        __typename
    }

    fragment ProfileFields on Profile {
        id
        name
        handle
        bio
        ownedBy
        stats {
            totalFollowers
            totalFollowing
            totalPosts
            totalComments
            totalMirrors
            __typename
        }
        picture {
            ... on MediaSet {
                original {
                    url
                    __typename
                }
                __typename
            }
            ... on NftImage {
                uri
                __typename
            }
            __typename
        }
        __typename
    }
`;
