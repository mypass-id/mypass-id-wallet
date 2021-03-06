export enum SchemaNames {
    ADDRESS = 'Address',
    PERSONAL_DATA = 'PersonalData',
    COLLEGE_DEGREE = "CollegeDegree",
    EMPLOYMENT_HISTORY = "EmploymentHistory",
    JOB_OFFER = 'JobOffer',
    TEST_RESULT = 'TestResult',
    VISA_APPLICATION = 'VisaApplication',
    BANK_ACCOUNT = 'BankAccount',
    COMPANY = 'Company',
    CONTACT_DETAILS = 'ContactDetails',
    INSURANCE = 'Insurance',
    FUTURE_COMMITMENTS = 'FutureCommitments',
    PRESENT_COMMITMENTS = 'PresentCommitments'
}

export const AddressSchema = {
    type: 'object',
    required: ['did'],
    properties: {
        DID: {
            type: 'string'
        },
        Language: {
            type: 'string'
        },
        Locale: {
            type: 'string'
        },
        UserAddress: {
            type: 'object',
            properties: {
                City: {
                    type: 'string'
                },
                State: {
                    type: 'string'
                },
                Country: {
                    type: 'string'
                },
                Postcode: {
                    type: 'string'
                },
                Street: {
                    type: 'string'
                },
                AdditionalAddress: {
                    type: 'string'
                },
                House: {
                    type: 'string'
                }
            }
        }
    }
};

export const PersonalDataSchema = {
    type: 'object',
    required: ['DID'],
    properties: {
        DID: {
            type: 'string'
        },
        Language: {
            type: 'string'
        },
        Locale: {
            type: 'string'
        },
        TimezoneOffset: {
            type: 'string'
        },
        UserPersonalData: {
            type: 'object',
            properties: {
                UserName: {
                    type: 'object',
                    properties: {
                        Title: {
                            type: 'string'
                        },
                        FirstName: {
                            type: 'string'
                        },
                        LastName: {
                            type: 'string'
                        }
                    }
                },
                UserDOB: {
                    type: 'object',
                    properties: {
                        Date: {
                            type: 'string'
                        },
                        Age: {
                            type: 'number'
                        }
                    }
                },
                Birthplace: {
                    type: 'string'
                },
                Nationality: {
                    type: 'string'
                },
                Gender: {
                    type: 'string'
                },
                IdentityCardNumber: {
                    type: 'string'
                },
                PassportNumber: {
                    type: 'string'
                }
            }
        }
    }
};

export const CollegeDegreeSchema = {
    type: 'object',
    required: ['DID'],
    properties: {
        DID: {
            type: 'string'
        },
        Language: {
            type: 'string'
        },
        Locale: {
            type: 'string'
        },
        CollegeDegree: {
            type: 'object',
            properties: {
                CollegeName: {
                    type: 'string'
                },
                RegistrationNumber: {
                    type: 'string'
                },
                Program: {
                    type: 'string'
                },
                Branch: {
                    type: 'string'
                },
                EnrollingYear: {
                    type: 'string'
                },
                GraduationYear: {
                    type: 'string'
                }
            }
        }
    }
};

export const EmploymentHistorySchema = {
    type: 'object',
    required: ['DID'],
    properties: {
        DID: {
            type: 'string'
        },
        Language: {
            type: 'string'
        },
        Locale: {
            type: 'string'
        },
        Employer: {
            type: 'object',
            properties: {
                CompanyName: {
                    type: 'string'
                },
                CompanyAddress: {
                    type: 'string'
                },
                EmployeeID: {
                    type: 'string'
                },
                LastDesignation: {
                    type: 'string'
                },
                StartDate: {
                    type: 'string'
                },
                EndDate: {
                    type: 'string'
                }
            }
        }
    }
};

export const JobOfferSchema = {
    type: 'object',
    required: ['DID'],
    properties: {
        DID: {
            type: 'string'
        },
        Language: {
            type: 'string'
        },
        Locale: {
            type: 'string'
        },
        Offer: {
            type: 'object',
            properties: {
                CompanyName: {
                    type: 'string'
                },
                CompanyAddress: {
                    type: 'string'
                },
                Designation: {
                    type: 'string'
                },
                StartDate: {
                    type: 'string'
                },
                CTC: {
                    type: 'string'
                }
            }
        }
    }
};

export const TestResultSchema = {
    type: 'object',
    required: [] as string[],
    properties: {
        TestID: {
            type: 'string'
        },
        TestBy: {
            type: 'string'
        },
        TestTimestamp: {
            type: 'string'
        },
        TestKit: {
            type: 'string'
        },
        TestResult: {
            type: 'string'
        }
    }
};

export const VisaApplicationSchema = {
    type: 'object',
    required: [] as string[],
    properties: {
        VisaApplicationNumber: {
            type: 'string'
        },
        VisaCountry: {
            type: 'string'
        }
    }
};

export const BankAccountSchema = {
    type: 'object',
    required: ['DID'],
    properties: {
        DID: {
            type: 'string'
        },
        Language: {
            type: 'string'
        },
        Locale: {
            type: 'string'
        },
        Bank: {
            type: 'object',
            properties: {
                AccountType: {
                    type: 'string'
                },
                AccountNumber: {
                    type: 'string'
                },
                AccountIBAN: {
                    type: 'string'
                },
                BankName: {
                    type: 'string'
                }
            }
        }
    }
};

export const CompanySchema = {
    type: 'object',
    required: ['DID'],
    properties: {
        DID: {
            type: 'string'
        },
        Language: {
            type: 'string'
        },
        Locale: {
            type: 'string'
        },
        Company: {
            type: 'object',
            properties: {
                CompanyName: {
                    type: 'string'
                },
                CompanyAddress: {
                    type: 'string'
                },
                CompanyType: {
                    type: 'string'
                },
                CompanyOwner: {
                    type: 'string'
                },
                CompanyCapital: {
                    type: 'number'
                },
                CompanyBusiness: {
                    type: 'string'
                },
                CompanyCreationDate: {
                    type: 'string'
                },
                CompanyStatus: {
                    type: 'string'
                },
                CompanyNumber: {
                    type: 'number'
                },
                CompanyOwners: {
                    type: 'array',
                    CompanyOwner: {
                        type: 'string'
                    }
                }
            }
        }
    }
};

export const ContactDetailsSchema = {
    type: 'object',
    required: ['DID'],
    properties: {
        DID: {
            type: 'string'
        },
        Language: {
            type: 'string'
        },
        Locale: {
            type: 'string'
        },
        TimezoneOffset: {
            type: 'string'
        },
        UserContacts: {
            type: 'object',
            properties: {
                Email: {
                    type: 'string'
                },
                Phone: {
                    type: 'string'
                },
                Cell: {
                    type: 'string'
                }
            }
        }
    }
};

export const InsuranceSchema = {
    type: 'object',
    required: ['DID'],
    properties: {
        DID: {
            type: 'string'
        },
        Language: {
            type: 'string'
        },
        Locale: {
            type: 'string'
        },
        TimezoneOffset: {
            type: 'string'
        },
        Insurance: {
            type: 'object',
            properties: {
                Name: {
                    type: 'string'
                },
                Address: {
                    type: 'string'
                },
                AccountNumber: {
                    type: 'string'
                },
                InsuranceType: {
                    type: 'string'
                },
                StartDate: {
                    type: 'string'
                },
                EndDate: {
                    type: 'string'
                }
            }
        }
    }
};

export const FutureCommitmentsSchema = {
    type: 'object',
    required: ['DID', 'Commitments'],
    properties: {
        DID: { type: 'string' },
        Commitments: {
            type: 'array',
            Commitment: {
                type: 'object',
                properties: {
                    CommitmentId: { type: 'string' },
                    CommitmentTitle: { type: 'string' },
                    CommitmentPercentage: { type: 'number' },
                    CommitmentSupport: { type: 'string' },
                    CommitmentWalletPercentage: { type: 'number' }
                }
            }
        }
    }
};

export const PresentCommitmentsSchema = {
    type: 'object',
    required: ['DID', 'Commitments'],
    properties: {
        DID: { type: 'string' },
        Commitments: {
            type: 'array',
            Commitment: {
                type: 'object',
                properties: {
                    CommitmentId: { type: 'string' },
                    CommitmentTitle: { type: 'string' },
                    CommitmentPercentage: { type: 'number' },
                    CommitmentSupport: { type: 'string' },
                    CommitmentWalletPercentage: { type: 'number' }
                }
            }
        }
    }
};

export const Schemas = {
    [SchemaNames.ADDRESS]: AddressSchema,
    [SchemaNames.PERSONAL_DATA]: PersonalDataSchema,
    [SchemaNames.COLLEGE_DEGREE]: CollegeDegreeSchema,
    [SchemaNames.EMPLOYMENT_HISTORY]: EmploymentHistorySchema,
    [SchemaNames.JOB_OFFER]: JobOfferSchema,
    [SchemaNames.TEST_RESULT]: TestResultSchema,
    [SchemaNames.VISA_APPLICATION]: VisaApplicationSchema,
    [SchemaNames.BANK_ACCOUNT]: BankAccountSchema,
    [SchemaNames.COMPANY]: CompanySchema,
    [SchemaNames.CONTACT_DETAILS]: ContactDetailsSchema,
    [SchemaNames.INSURANCE]: InsuranceSchema,
    [SchemaNames.FUTURE_COMMITMENTS]: FutureCommitmentsSchema,
    [SchemaNames.PRESENT_COMMITMENTS]: PresentCommitmentsSchema
};
