# Getting Started with TEST TASK


## Versions

### `node >= v16.14.2`

## Project setup

### `yarn install` 
to install all dependencies
### `yarn run dev`
to start project

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Task 1 & 2

 * Endpoint Name: report/categories
 * Request Method: GET
 * Request Params: IDataRequest
 * Expected Response: TDataResponse

types you can find in `src/store/data/types.ts`

## Task 3

 * Endpoint Name: report/{reportId}
 * Request Method: GET
 * Request Params: TGetTransactionsRequestParams
 * Expected Response: TTransactionsResponse

types you can also find in `src/store/data/types.ts`

all mock data in `src/store/data/mocks.ts`

## Notes

 * redux-saga was chosen because of data flow in this type of project (with huge amount of data) to maintain fast and move logic to sagas. redux-thunk is like a toy if we compare with saga
 * immutable js is chosen because of speed and to maintain huge amount of store
 * eslint, tslint configurations so code style will be same and disable some types like `any`

