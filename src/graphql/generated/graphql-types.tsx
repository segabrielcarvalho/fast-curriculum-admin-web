import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AvatarObject = {
  __typename?: 'AvatarObject';
  User: UserObject;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  mimetype: Scalars['String']['output'];
  path: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type CompanyExperienceObject = {
  __typename?: 'CompanyExperienceObject';
  ProfessionalInfo: ProfessionalInfoObject;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  professionalInfoId: Scalars['String']['output'];
  role: Scalars['String']['output'];
  startAt: Scalars['DateTime']['output'];
  type: CompanyExperienceTypeEnum;
  updatedAt: Scalars['DateTime']['output'];
};

export enum CompanyExperienceTypeEnum {
  Contractor = 'CONTRACTOR',
  Freelancer = 'FREELANCER',
  FullTime = 'FULL_TIME',
  Internship = 'INTERNSHIP',
  Outsourced = 'OUTSOURCED',
  PartTime = 'PART_TIME',
  Temporary = 'TEMPORARY',
  Trainee = 'TRAINEE',
  Volunteer = 'VOLUNTEER'
}

export type ContactInfoObject = {
  __typename?: 'ContactInfoObject';
  ProfessionalInfo: ProfessionalInfoObject;
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  github?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  linkedin?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  professionalInfoId: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  website?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type CreateCompanyExperienceInput = {
  ProfessionalInfo: GenericConnectIdInput;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  role: Scalars['String']['input'];
  startAt: Scalars['DateTime']['input'];
  type: CompanyExperienceTypeEnum;
};

export type CreateCurriculumInput = {
  isPublic: Scalars['Boolean']['input'];
  jobDescription?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateEducationInput = {
  ProfessionalInfo: GenericConnectIdInput;
  degree: Scalars['String']['input'];
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  institution: Scalars['String']['input'];
  startAt: Scalars['DateTime']['input'];
  studyArea: Scalars['String']['input'];
};

export type CreateSkillInput = {
  ProfessionalInfo: GenericConnectIdInput;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  avatarInBase64?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role: RoleEnum;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DefaultWhereInput = {
  id: Scalars['ID']['input'];
};

export type EducationObject = {
  __typename?: 'EducationObject';
  ProfessionalInfo: ProfessionalInfoObject;
  createdAt: Scalars['DateTime']['output'];
  degree: Scalars['String']['output'];
  endAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  institution: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  professionalInfoId: Scalars['String']['output'];
  startAt: Scalars['DateTime']['output'];
  studyArea: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GenericConnectIdInput = {
  connect: UniqueFieldIdInput;
};

export type ListCompaniesExperienceInput = {
  AND?: InputMaybe<Array<ListCompaniesExperienceInput>>;
  NOT?: InputMaybe<Array<ListCompaniesExperienceInput>>;
  OR?: InputMaybe<Array<ListCompaniesExperienceInput>>;
  ProfessionalInfo?: InputMaybe<ListCompaniesExperienceRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  professionalInfoId?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringFilter>;
  startAt?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ListCompaniesExperienceRelationFilter = {
  is?: InputMaybe<ListProfessionalInfoInput>;
  isNot?: InputMaybe<ListProfessionalInfoInput>;
};

export type ListEducationsInput = {
  AND?: InputMaybe<Array<ListEducationsInput>>;
  NOT?: InputMaybe<Array<ListEducationsInput>>;
  OR?: InputMaybe<Array<ListEducationsInput>>;
  ProfessionalInfo?: InputMaybe<ListEducationsRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  degree?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  institution?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  professionalInfoId?: InputMaybe<StringFilter>;
  startAt?: InputMaybe<DateTimeFilter>;
  studyArea?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ListEducationsRelationFilter = {
  is?: InputMaybe<ListProfessionalInfoInput>;
  isNot?: InputMaybe<ListProfessionalInfoInput>;
};

export type ListProfessionalInfoInput = {
  AND?: InputMaybe<Array<ListProfessionalInfoInput>>;
  NOT?: InputMaybe<Array<ListProfessionalInfoInput>>;
  OR?: InputMaybe<Array<ListProfessionalInfoInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type LoginObject = {
  __typename?: 'LoginObject';
  /** The token of the user */
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompanyExperience: CompanyExperienceObject;
  createCurriculum: Scalars['String']['output'];
  createEducation: EducationObject;
  createSkill: SkillObject;
  createUser: UserObject;
  deleteCompanyExperience: CompanyExperienceObject;
  deleteEducation: EducationObject;
  deleteSkill: SkillObject;
  login: LoginObject;
  updateContactInfo: ContactInfoObject;
};


export type MutationCreateCompanyExperienceArgs = {
  data: CreateCompanyExperienceInput;
};


export type MutationCreateCurriculumArgs = {
  data: CreateCurriculumInput;
};


export type MutationCreateEducationArgs = {
  data: CreateEducationInput;
};


export type MutationCreateSkillArgs = {
  data: CreateSkillInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteCompanyExperienceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteEducationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSkillArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateContactInfoArgs = {
  data: UpdateContactInfoInput;
  where: DefaultWhereInput;
};

export type NestedBoolFilter = {
  equals: Scalars['Boolean']['input'];
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type ProfessionalInfoObject = {
  __typename?: 'ProfessionalInfoObject';
  Companies?: Maybe<Array<CompanyExperienceObject>>;
  ContactInfo?: Maybe<ContactInfoObject>;
  Educations?: Maybe<Array<EducationObject>>;
  Skills?: Maybe<Array<SkillObject>>;
  User: UserObject;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getContactInfoByUserId: ContactInfoObject;
  getProfessionalInfo: ProfessionalInfoObject;
  getProfessionalInfoByUserId: ProfessionalInfoObject;
  hello: Scalars['String']['output'];
  listCompanyExperience: Array<CompanyExperienceObject>;
  listEducations: Array<EducationObject>;
  me: UserObject;
};


export type QueryGetContactInfoByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetProfessionalInfoArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProfessionalInfoByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryListCompanyExperienceArgs = {
  where?: InputMaybe<ListCompaniesExperienceInput>;
};


export type QueryListEducationsArgs = {
  where?: InputMaybe<ListEducationsInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum RoleEnum {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SkillObject = {
  __typename?: 'SkillObject';
  ProfessionalInfo: ProfessionalInfoObject;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  professionalInfoId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UniqueFieldIdInput = {
  id: Scalars['ID']['input'];
};

export type UpdateContactInfoInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UserObject = {
  __typename?: 'UserObject';
  Avatar?: Maybe<AvatarObject>;
  ProfessionalInfo?: Maybe<ProfessionalInfoObject>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role: RoleEnum;
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateCurriculumMutationVariables = Exact<{
  data: CreateCurriculumInput;
}>;


export type CreateCurriculumMutation = { __typename?: 'Mutation', createCurriculum: string };

export type CreateCompanyExperienceMutationVariables = Exact<{
  data: CreateCompanyExperienceInput;
}>;


export type CreateCompanyExperienceMutation = { __typename?: 'Mutation', createCompanyExperience: { __typename?: 'CompanyExperienceObject', id: string } };

export type CreateEducationMutationVariables = Exact<{
  data: CreateEducationInput;
}>;


export type CreateEducationMutation = { __typename?: 'Mutation', createEducation: { __typename?: 'EducationObject', id: string } };

export type CreateSkillMutationVariables = Exact<{
  data: CreateSkillInput;
}>;


export type CreateSkillMutation = { __typename?: 'Mutation', createSkill: { __typename?: 'SkillObject', id: string } };

export type DeleteCompanyExperienceMutationVariables = Exact<{
  deleteCompanyExperienceId: Scalars['String']['input'];
}>;


export type DeleteCompanyExperienceMutation = { __typename?: 'Mutation', deleteCompanyExperience: { __typename?: 'CompanyExperienceObject', id: string } };

export type DeleteEducationMutationVariables = Exact<{
  deleteEducationId: Scalars['String']['input'];
}>;


export type DeleteEducationMutation = { __typename?: 'Mutation', deleteEducation: { __typename?: 'EducationObject', id: string } };

export type DeleteSkillMutationVariables = Exact<{
  deleteSkillId: Scalars['String']['input'];
}>;


export type DeleteSkillMutation = { __typename?: 'Mutation', deleteSkill: { __typename?: 'SkillObject', id: string } };

export type GetProfessionalInfoByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetProfessionalInfoByUserIdQuery = { __typename?: 'Query', getProfessionalInfoByUserId: { __typename?: 'ProfessionalInfoObject', id: string, ContactInfo?: { __typename?: 'ContactInfoObject', id: string, address?: string | null, city?: string | null, country?: string | null, github?: string | null, linkedin?: string | null, phone?: string | null, state?: string | null, website?: string | null, zipCode?: string | null } | null, Companies?: Array<{ __typename?: 'CompanyExperienceObject', id: string, name: string, role: string, startAt: any, endAt?: any | null, type: CompanyExperienceTypeEnum, description?: string | null }> | null, Educations?: Array<{ __typename?: 'EducationObject', id: string, institution: string, startAt: any, studyArea: string, endAt?: any | null, degree: string }> | null, Skills?: Array<{ __typename?: 'SkillObject', id: string, name: string }> | null } };

export type UpdateContactInfoMutationVariables = Exact<{
  data: UpdateContactInfoInput;
  where: DefaultWhereInput;
}>;


export type UpdateContactInfoMutation = { __typename?: 'Mutation', updateContactInfo: { __typename?: 'ContactInfoObject', id: string } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginObject', token: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'UserObject', id: string, name?: string | null, email: string, role: RoleEnum } };


export const CreateCurriculumDocument = gql`
    mutation CreateCurriculum($data: CreateCurriculumInput!) {
  createCurriculum(data: $data)
}
    `;
export type CreateCurriculumMutationFn = Apollo.MutationFunction<CreateCurriculumMutation, CreateCurriculumMutationVariables>;

/**
 * __useCreateCurriculumMutation__
 *
 * To run a mutation, you first call `useCreateCurriculumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCurriculumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCurriculumMutation, { data, loading, error }] = useCreateCurriculumMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCurriculumMutation(baseOptions?: Apollo.MutationHookOptions<CreateCurriculumMutation, CreateCurriculumMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCurriculumMutation, CreateCurriculumMutationVariables>(CreateCurriculumDocument, options);
      }
export type CreateCurriculumMutationHookResult = ReturnType<typeof useCreateCurriculumMutation>;
export type CreateCurriculumMutationResult = Apollo.MutationResult<CreateCurriculumMutation>;
export type CreateCurriculumMutationOptions = Apollo.BaseMutationOptions<CreateCurriculumMutation, CreateCurriculumMutationVariables>;
export const CreateCompanyExperienceDocument = gql`
    mutation CreateCompanyExperience($data: CreateCompanyExperienceInput!) {
  createCompanyExperience(data: $data) {
    id
  }
}
    `;
export type CreateCompanyExperienceMutationFn = Apollo.MutationFunction<CreateCompanyExperienceMutation, CreateCompanyExperienceMutationVariables>;

/**
 * __useCreateCompanyExperienceMutation__
 *
 * To run a mutation, you first call `useCreateCompanyExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyExperienceMutation, { data, loading, error }] = useCreateCompanyExperienceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCompanyExperienceMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompanyExperienceMutation, CreateCompanyExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompanyExperienceMutation, CreateCompanyExperienceMutationVariables>(CreateCompanyExperienceDocument, options);
      }
export type CreateCompanyExperienceMutationHookResult = ReturnType<typeof useCreateCompanyExperienceMutation>;
export type CreateCompanyExperienceMutationResult = Apollo.MutationResult<CreateCompanyExperienceMutation>;
export type CreateCompanyExperienceMutationOptions = Apollo.BaseMutationOptions<CreateCompanyExperienceMutation, CreateCompanyExperienceMutationVariables>;
export const CreateEducationDocument = gql`
    mutation CreateEducation($data: CreateEducationInput!) {
  createEducation(data: $data) {
    id
  }
}
    `;
export type CreateEducationMutationFn = Apollo.MutationFunction<CreateEducationMutation, CreateEducationMutationVariables>;

/**
 * __useCreateEducationMutation__
 *
 * To run a mutation, you first call `useCreateEducationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEducationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEducationMutation, { data, loading, error }] = useCreateEducationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateEducationMutation(baseOptions?: Apollo.MutationHookOptions<CreateEducationMutation, CreateEducationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEducationMutation, CreateEducationMutationVariables>(CreateEducationDocument, options);
      }
export type CreateEducationMutationHookResult = ReturnType<typeof useCreateEducationMutation>;
export type CreateEducationMutationResult = Apollo.MutationResult<CreateEducationMutation>;
export type CreateEducationMutationOptions = Apollo.BaseMutationOptions<CreateEducationMutation, CreateEducationMutationVariables>;
export const CreateSkillDocument = gql`
    mutation CreateSkill($data: CreateSkillInput!) {
  createSkill(data: $data) {
    id
  }
}
    `;
export type CreateSkillMutationFn = Apollo.MutationFunction<CreateSkillMutation, CreateSkillMutationVariables>;

/**
 * __useCreateSkillMutation__
 *
 * To run a mutation, you first call `useCreateSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSkillMutation, { data, loading, error }] = useCreateSkillMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSkillMutation(baseOptions?: Apollo.MutationHookOptions<CreateSkillMutation, CreateSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSkillMutation, CreateSkillMutationVariables>(CreateSkillDocument, options);
      }
export type CreateSkillMutationHookResult = ReturnType<typeof useCreateSkillMutation>;
export type CreateSkillMutationResult = Apollo.MutationResult<CreateSkillMutation>;
export type CreateSkillMutationOptions = Apollo.BaseMutationOptions<CreateSkillMutation, CreateSkillMutationVariables>;
export const DeleteCompanyExperienceDocument = gql`
    mutation DeleteCompanyExperience($deleteCompanyExperienceId: String!) {
  deleteCompanyExperience(id: $deleteCompanyExperienceId) {
    id
  }
}
    `;
export type DeleteCompanyExperienceMutationFn = Apollo.MutationFunction<DeleteCompanyExperienceMutation, DeleteCompanyExperienceMutationVariables>;

/**
 * __useDeleteCompanyExperienceMutation__
 *
 * To run a mutation, you first call `useDeleteCompanyExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompanyExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCompanyExperienceMutation, { data, loading, error }] = useDeleteCompanyExperienceMutation({
 *   variables: {
 *      deleteCompanyExperienceId: // value for 'deleteCompanyExperienceId'
 *   },
 * });
 */
export function useDeleteCompanyExperienceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCompanyExperienceMutation, DeleteCompanyExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCompanyExperienceMutation, DeleteCompanyExperienceMutationVariables>(DeleteCompanyExperienceDocument, options);
      }
export type DeleteCompanyExperienceMutationHookResult = ReturnType<typeof useDeleteCompanyExperienceMutation>;
export type DeleteCompanyExperienceMutationResult = Apollo.MutationResult<DeleteCompanyExperienceMutation>;
export type DeleteCompanyExperienceMutationOptions = Apollo.BaseMutationOptions<DeleteCompanyExperienceMutation, DeleteCompanyExperienceMutationVariables>;
export const DeleteEducationDocument = gql`
    mutation DeleteEducation($deleteEducationId: String!) {
  deleteEducation(id: $deleteEducationId) {
    id
  }
}
    `;
export type DeleteEducationMutationFn = Apollo.MutationFunction<DeleteEducationMutation, DeleteEducationMutationVariables>;

/**
 * __useDeleteEducationMutation__
 *
 * To run a mutation, you first call `useDeleteEducationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEducationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEducationMutation, { data, loading, error }] = useDeleteEducationMutation({
 *   variables: {
 *      deleteEducationId: // value for 'deleteEducationId'
 *   },
 * });
 */
export function useDeleteEducationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEducationMutation, DeleteEducationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEducationMutation, DeleteEducationMutationVariables>(DeleteEducationDocument, options);
      }
export type DeleteEducationMutationHookResult = ReturnType<typeof useDeleteEducationMutation>;
export type DeleteEducationMutationResult = Apollo.MutationResult<DeleteEducationMutation>;
export type DeleteEducationMutationOptions = Apollo.BaseMutationOptions<DeleteEducationMutation, DeleteEducationMutationVariables>;
export const DeleteSkillDocument = gql`
    mutation DeleteSkill($deleteSkillId: String!) {
  deleteSkill(id: $deleteSkillId) {
    id
  }
}
    `;
export type DeleteSkillMutationFn = Apollo.MutationFunction<DeleteSkillMutation, DeleteSkillMutationVariables>;

/**
 * __useDeleteSkillMutation__
 *
 * To run a mutation, you first call `useDeleteSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSkillMutation, { data, loading, error }] = useDeleteSkillMutation({
 *   variables: {
 *      deleteSkillId: // value for 'deleteSkillId'
 *   },
 * });
 */
export function useDeleteSkillMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSkillMutation, DeleteSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSkillMutation, DeleteSkillMutationVariables>(DeleteSkillDocument, options);
      }
export type DeleteSkillMutationHookResult = ReturnType<typeof useDeleteSkillMutation>;
export type DeleteSkillMutationResult = Apollo.MutationResult<DeleteSkillMutation>;
export type DeleteSkillMutationOptions = Apollo.BaseMutationOptions<DeleteSkillMutation, DeleteSkillMutationVariables>;
export const GetProfessionalInfoByUserIdDocument = gql`
    query GetProfessionalInfoByUserId($userId: String!) {
  getProfessionalInfoByUserId(userId: $userId) {
    id
    ContactInfo {
      id
      address
      city
      country
      github
      linkedin
      phone
      state
      website
      zipCode
    }
    Companies {
      id
      name
      role
      startAt
      endAt
      type
      description
    }
    Educations {
      id
      institution
      startAt
      studyArea
      endAt
      degree
    }
    Skills {
      id
      name
    }
  }
}
    `;

/**
 * __useGetProfessionalInfoByUserIdQuery__
 *
 * To run a query within a React component, call `useGetProfessionalInfoByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfessionalInfoByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfessionalInfoByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetProfessionalInfoByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetProfessionalInfoByUserIdQuery, GetProfessionalInfoByUserIdQueryVariables> & ({ variables: GetProfessionalInfoByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfessionalInfoByUserIdQuery, GetProfessionalInfoByUserIdQueryVariables>(GetProfessionalInfoByUserIdDocument, options);
      }
export function useGetProfessionalInfoByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfessionalInfoByUserIdQuery, GetProfessionalInfoByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfessionalInfoByUserIdQuery, GetProfessionalInfoByUserIdQueryVariables>(GetProfessionalInfoByUserIdDocument, options);
        }
export function useGetProfessionalInfoByUserIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProfessionalInfoByUserIdQuery, GetProfessionalInfoByUserIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfessionalInfoByUserIdQuery, GetProfessionalInfoByUserIdQueryVariables>(GetProfessionalInfoByUserIdDocument, options);
        }
export type GetProfessionalInfoByUserIdQueryHookResult = ReturnType<typeof useGetProfessionalInfoByUserIdQuery>;
export type GetProfessionalInfoByUserIdLazyQueryHookResult = ReturnType<typeof useGetProfessionalInfoByUserIdLazyQuery>;
export type GetProfessionalInfoByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetProfessionalInfoByUserIdSuspenseQuery>;
export type GetProfessionalInfoByUserIdQueryResult = Apollo.QueryResult<GetProfessionalInfoByUserIdQuery, GetProfessionalInfoByUserIdQueryVariables>;
export const UpdateContactInfoDocument = gql`
    mutation UpdateContactInfo($data: UpdateContactInfoInput!, $where: DefaultWhereInput!) {
  updateContactInfo(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateContactInfoMutationFn = Apollo.MutationFunction<UpdateContactInfoMutation, UpdateContactInfoMutationVariables>;

/**
 * __useUpdateContactInfoMutation__
 *
 * To run a mutation, you first call `useUpdateContactInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContactInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContactInfoMutation, { data, loading, error }] = useUpdateContactInfoMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateContactInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContactInfoMutation, UpdateContactInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContactInfoMutation, UpdateContactInfoMutationVariables>(UpdateContactInfoDocument, options);
      }
export type UpdateContactInfoMutationHookResult = ReturnType<typeof useUpdateContactInfoMutation>;
export type UpdateContactInfoMutationResult = Apollo.MutationResult<UpdateContactInfoMutation>;
export type UpdateContactInfoMutationOptions = Apollo.BaseMutationOptions<UpdateContactInfoMutation, UpdateContactInfoMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    name
    email
    role
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;