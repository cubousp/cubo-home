import gql from "graphql-tag";

export const SEND_EMAIL = gql`
    mutation sendEmailToStaff($input: SendEmailToStaffInput!) {
        sendEmailToStaff(input: $input)
    }
`;