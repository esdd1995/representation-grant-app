//This is for state.
interface PotentialApplicant {
    applicantRole: string;
    applicantName: string;
    key: string;
}

interface Applicant {
    applicantRole: string;
    applicantName: string;
    key: string;
}

interface Recipient {
    recipientRole: string;
    recipientName: string;
    key: string;
}

interface P1Stat {
    generated: boolean;
    date: Date;
}

interface P9Stat {
    generated: boolean;
    date: Date;
    count: number;
}

//Used by codegen:
interface AddressAndContact {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    postcode?: string;
    fax?: string;
    phone?: string;
    email?: string;
}

interface PersonName {
    first?: string;
    middle?: string;
    last?: string;
}

interface ContactInfo {
    fax?: string;
    phone?: string;
    email?: string;
}