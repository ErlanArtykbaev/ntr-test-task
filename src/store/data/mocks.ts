import { ICategory, IReport, ISubCategory, ITransactionsDetail, TDataResponse } from 'store/data/types';



// For Task 3

// * Endpoint Name: transactions/{subCategoryId}
// * Request Method: GET
// * Request Params: TGetTransactionsRequestParams
// * Expected Response: TransactionsResponse


// * Mocks
// * Banks
const bankSubCategory1Reports: IReport[] = [
  { id: '1', date: 'Oct 2022', value: 23.234 },
  { id: '2', date: 'Nov 2022', value: 23.234 },
  { id: '3', date: 'Dec 2022', value: 23.234 },
  { id: '4', date: 'Jan 2023', value: 23.234 },
  { id: '5', date: 'Feb 2023', value: 23.234 },
  { id: '6', date: 'Oct 2022', value: 23.234 },
  { id: '7', date: 'Nov 2022', value: 23.234 },
  { id: '8', date: 'Dec 2022', value: 23.234 },
  { id: '9', date: 'Jan 2023', value: 23.234 },
  { id: '10', date: 'Feb 2023', value: 23.234 },
  { id: '11', date: 'Feb 2023', value: 23.234 },
  { id: '12', date: 'Feb 2023', value: 23.234 },
];

const bankSubCategory2Reports: IReport[] = [
  { id: '13', date: 'Oct 2022', value: 23.234 },
  { id: '14', date: 'Nov 2022', value: 23.234 },
  { id: '15', date: 'Dec 2022', value: 23.234 },
  { id: '16', date: 'Jan 2023', value: 23.234 },
  { id: '17', date: 'Feb 2023', value: 23.234 },
  { id: '18', date: 'Oct 2022', value: 23.234 },
  { id: '19', date: 'Nov 2022', value: 23.234 },
  { id: '20', date: 'Dec 2022', value: 23.234 },
  { id: '21', date: 'Jan 2023', value: 23.234 },
  { id: '22', date: 'Feb 2023', value: 23.234 },
  { id: '23', date: 'Feb 2023', value: 23.234 },
  { id: '24', date: 'Feb 2023', value: 23.234 },
];

const banksSubCategory1: ISubCategory = {
  id: '9b8f97a4-11b0-11ee-be56-0242ac120002',
  name: 'banksSubCategory1',
  reports: bankSubCategory1Reports
};

const banksSubCategory2: ISubCategory = {
  id: 'da23026c-11b0-11ee-be56-0242ac120002',
  name: 'banksSubCategory2',
  reports: bankSubCategory2Reports
};

const bankReports: IReport[] = [
  { id: '25', date: 'Oct 2022', value: 46.468 },
  { id: '26', date: 'Nov 2022', value: 46.468 },
  { id: '27', date: 'Dec 2022', value: 46.468 },
  { id: '28', date: 'Jan 2023', value: 46.468 },
  { id: '29', date: 'Feb 2023', value: 46.468 },
  { id: '30', date: 'Oct 2022', value: 46.468 },
  { id: '31', date: 'Nov 2022', value: 46.468 },
  { id: '32', date: 'Dec 2022', value: 46.468 },
  { id: '33', date: 'Jan 2023', value: 46.468 },
  { id: '34', date: 'Feb 2023', value: 46.468 },
  { id: '35', date: 'Feb 2023', value: 46.468 },
  { id: '36', date: 'Feb 2023', value: 46.468 },
];

const banks: ICategory = {
  id: 'a8db104a-11b1-11ee-be56-0242ac120002',
  name: 'Banks',
  subCategories: [banksSubCategory1, banksSubCategory2],
  reports: bankReports
};

// * Income
const incomeSubCategory1Reports: IReport[] = [
  { id: '37', date: 'Oct 2022', value: 23.234 },
  { id: '38', date: 'Nov 2022', value: 23.234 },
  { id: '39', date: 'Dec 2022', value: 23.234 },
  { id: '40', date: 'Jan 2023', value: 23.234 },
  { id: '41', date: 'Feb 2023', value: 23.234 },
  { id: '42', date: 'Oct 2022', value: 23.234 },
  { id: '43', date: 'Nov 2022', value: 23.234 },
  { id: '44', date: 'Dec 2022', value: 23.234 },
  { id: '45', date: 'Jan 2023', value: 23.234 },
  { id: '46', date: 'Feb 2023', value: 23.234 },
  { id: '47', date: 'Feb 2023', value: 23.234 },
  { id: '48', date: 'Feb 2023', value: 23.234 },
];

const incomeSubCategory2Reports: IReport[] = [
  { id: '49', date: 'Oct 2022', value: 23.234 },
  { id: '50', date: 'Nov 2022', value: 23.234 },
  { id: '51', date: 'Dec 2022', value: 23.234 },
  { id: '52', date: 'Jan 2023', value: 23.234 },
  { id: '53', date: 'Feb 2023', value: 23.234 },
  { id: '54', date: 'Oct 2022', value: 23.234 },
  { id: '55', date: 'Nov 2022', value: 23.234 },
  { id: '56', date: 'Dec 2022', value: 23.234 },
  { id: '57', date: 'Jan 2023', value: 23.234 },
  { id: '58', date: 'Feb 2023', value: 23.234 },
  { id: '59', date: 'Feb 2023', value: 23.234 },
  { id: '60', date: 'Feb 2023', value: 23.234 },
];

const incomeSubCategory1: ISubCategory = {
  id: '98db357a-11b2-11ee-be56-0242ac12000',
  name: 'incomeSubCategory1',
  reports: incomeSubCategory1Reports
};

const incomeSubCategory2: ISubCategory = {
  id: 'b545bc80-11b2-11ee-be56-0242ac120002',
  name: 'incomeSubCategory2',
  reports: incomeSubCategory2Reports
};

const incomeReports: IReport[] = [
  { id: '61', date: 'Oct 2022', value: 46.468 },
  { id: '62', date: 'Nov 2022', value: 46.468 },
  { id: '63', date: 'Dec 2022', value: 46.468 },
  { id: '64', date: 'Jan 2023', value: 46.468 },
  { id: '65', date: 'Feb 2023', value: 46.468 },
  { id: '66', date: 'Oct 2022', value: 46.468 },
  { id: '67', date: 'Nov 2022', value: 46.468 },
  { id: '68', date: 'Dec 2022', value: 46.468 },
  { id: '69', date: 'Jan 2023', value: 46.468 },
  { id: '70', date: 'Feb 2023', value: 46.468 },
  { id: '71', date: 'Feb 2023', value: 46.468 },
  { id: '72', date: 'Feb 2023', value: 46.468 },
];

const income: ICategory = {
  id: 'e91e8d71-78d9-4101-b561-bbdadd3d7395',
  name: 'Income',
  subCategories: [incomeSubCategory1, incomeSubCategory2],
  reports: incomeReports
};

// * COGS (Cost of Goods Sold)
const cogsSubCategory1Reports: IReport[] = [
  { id: '73', date: 'Oct 2022', value: 23.234 },
  { id: '74', date: 'Nov 2022', value: 23.234 },
  { id: '75', date: 'Dec 2022', value: 23.234 },
  { id: '76', date: 'Jan 2023', value: 23.234 },
  { id: '77', date: 'Feb 2023', value: 23.234 },
  { id: '78', date: 'Oct 2022', value: 23.234 },
  { id: '79', date: 'Nov 2022', value: 23.234 },
  { id: '80', date: 'Dec 2022', value: 23.234 },
  { id: '81', date: 'Jan 2023', value: 23.234 },
  { id: '82', date: 'Feb 2023', value: 23.234 },
  { id: '83', date: 'Feb 2023', value: 23.234 },
  { id: '84', date: 'Feb 2023', value: 23.234 },
];

const cogsSubCategory2Reports: IReport[] = [
  { id: '85', date: 'Oct 2022', value: 23.234 },
  { id: '86', date: 'Nov 2022', value: 23.234 },
  { id: '87', date: 'Dec 2022', value: 23.234 },
  { id: '88', date: 'Jan 2023', value: 23.234 },
  { id: '89', date: 'Feb 2023', value: 23.234 },
  { id: '90', date: 'Oct 2022', value: 23.234 },
  { id: '91', date: 'Nov 2022', value: 23.234 },
  { id: '92', date: 'Dec 2022', value: 23.234 },
  { id: '93', date: 'Jan 2023', value: 23.234 },
  { id: '94', date: 'Feb 2023', value: 23.234 },
  { id: '95', date: 'Feb 2023', value: 23.234 },
  { id: '96', date: 'Feb 2023', value: 23.234 },
];

const cogsSubCategory1: ISubCategory = {
  id: '96bd64a8-37d7-47ba-a945-177b864fd3ea',
  name: 'cogsSubCategory1',
  reports: cogsSubCategory1Reports
};

const cogsSubCategory2: ISubCategory = {
  id: '0fdc5d49-f25d-4b52-b4f5-597818fef44a',
  name: 'cogsSubCategory2',
  reports: cogsSubCategory2Reports
};

const cogsReports: IReport[] = [
  { id: '97', date: 'Oct 2022', value: 46.468 },
  { id: '98', date: 'Nov 2022', value: 46.468 },
  { id: '99', date: 'Dec 2022', value: 46.468 },
  { id: '100', date: 'Jan 2023', value: 46.468 },
  { id: '101', date: 'Feb 2023', value: 46.468 },
  { id: '102', date: 'Oct 2022', value: 46.468 },
  { id: '103', date: 'Nov 2022', value: 46.468 },
  { id: '104', date: 'Dec 2022', value: 46.468 },
  { id: '105', date: 'Jan 2023', value: 46.468 },
  { id: '106', date: 'Feb 2023', value: 46.468 },
  { id: '107', date: 'Feb 2023', value: 46.468 },
  { id: '108', date: 'Feb 2023', value: 46.468 },
];

const cogs: ICategory = {
  id: 'b72cb311-c2e5-45d9-98c3-60a3e8e922b6',
  name: 'Cost of Goods Sold',
  subCategories: [cogsSubCategory1, cogsSubCategory2],
  reports: cogsReports
};

// * Expenses
const expensesSubCategory1Reports: IReport[] = [
  { id: '109', date: 'Oct 2022', value: 23.234 },
  { id: '110', date: 'Nov 2022', value: 23.234 },
  { id: '111', date: 'Dec 2022', value: 23.234 },
  { id: '112', date: 'Jan 2023', value: 23.234 },
  { id: '113', date: 'Feb 2023', value: 23.234 },
  { id: '114', date: 'Oct 2022', value: 23.234 },
  { id: '115', date: 'Nov 2022', value: 23.234 },
  { id: '116', date: 'Dec 2022', value: 23.234 },
  { id: '117', date: 'Jan 2023', value: 23.234 },
  { id: '118', date: 'Feb 2023', value: 23.234 },
  { id: '119', date: 'Feb 2023', value: 23.234 },
  { id: '120', date: 'Feb 2023', value: 23.234 },
];

const expensesSubCategory2Reports: IReport[] = [
  { id: '121', date: 'Oct 2022', value: 23.234 },
  { id: '122', date: 'Nov 2022', value: 23.234 },
  { id: '123', date: 'Dec 2022', value: 23.234 },
  { id: '124', date: 'Jan 2023', value: 23.234 },
  { id: '125', date: 'Feb 2023', value: 23.234 },
  { id: '126', date: 'Oct 2022', value: 23.234 },
  { id: '127', date: 'Nov 2022', value: 23.234 },
  { id: '128', date: 'Dec 2022', value: 23.234 },
  { id: '129', date: 'Jan 2023', value: 23.234 },
  { id: '130', date: 'Feb 2023', value: 23.234 },
  { id: '131', date: 'Feb 2023', value: 23.234 },
  { id: '132', date: 'Feb 2023', value: 23.234 },
];

const expensesSubCategory1: ISubCategory = {
  id: '7cb1f671-f59f-469a-b2cb-7ab7ee087a28',
  name: 'expensesSubCategory1',
  reports: expensesSubCategory1Reports
};

const expensesSubCategory2: ISubCategory = {
  id: 'c136d794-ccbe-4b73-836c-c112b078f1f9',
  name: 'expensesSubCategory2',
  reports: expensesSubCategory2Reports
};

const expensesReports: IReport[] = [
  { id: '134', date: 'Oct 2022', value: 46.468 },
  { id: '135', date: 'Nov 2022', value: 46.468 },
  { id: '136', date: 'Dec 2022', value: 46.468 },
  { id: '137', date: 'Jan 2023', value: 46.468 },
  { id: '138', date: 'Feb 2023', value: 46.468 },
  { id: '139', date: 'Oct 2022', value: 46.468 },
  { id: '140', date: 'Nov 2022', value: 46.468 },
  { id: '141', date: 'Dec 2022', value: 46.468 },
  { id: '142', date: 'Jan 2023', value: 46.468 },
  { id: '143', date: 'Feb 2023', value: 46.468 },
  { id: '144', date: 'Feb 2023', value: 46.468 },
  { id: '145', date: 'Feb 2023', value: 46.468 },
];

const expenses: ICategory = {
  id: 'b72cb311-c2e5-45d9-98c3-60a3e8e922b6',
  name: 'Expenses',
  subCategories: [expensesSubCategory1, expensesSubCategory2],
  reports: expensesReports
};


export const categoryResponse: TDataResponse = [banks, income, cogs, expenses];

export const transactionsDetail: ITransactionsDetail = {
  subCategoryId: 'c136d794-ccbe-4b73-836c-c112b078f1f9',
  subCategoryName: 'Office Supplies & Software',
  date: 'October 2022',
  totalValue: 212.96,
  transactionsList: [
    {
      id: '557de3c9-66d1-4779-99f8-2ffb8a3e7d2d',
      transactionType: 'Google Ads',
      companyName: 'Google',
      date: '10/01/22',
      value: 118.96,
      subCategoryId: 'c136d794-ccbe-4b73-836c-c112b078f1f9'
    },
    {
      id: 'd20db52e-9a3d-4f13-ad85-c9e766e485fa',
      transactionType: 'Google Workspace',
      companyName: 'Google',
      date: '10/01/22',
      value: 6.00,
      subCategoryId: 'c136d794-ccbe-4b73-836c-c112b078f1f9'
    },
    {
      id: 'e6179f91-7f3f-457b-8eb8-3d9d559d608c',
      transactionType: 'Google Domains',
      companyName: 'Google',
      date: '10/21/22',
      value: 18.00,
      subCategoryId: 'c136d794-ccbe-4b73-836c-c112b078f1f9'
    },
  ]
};
