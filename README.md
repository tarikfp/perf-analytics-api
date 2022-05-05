# Performance analytics api

Performance analytics api is REST API which saves, returns data related with performance metrics.

## Available services

The following services are available.

- Create metrics
- Fetch metrics by date
- Fetch latest metrics (Metrics created in last 30 minutes)
- Fetch all metrics

## Technologies used

- NestJS
- Jest
- ts-loader

## Code quality

[Eslint]('https://eslint.org/') is used as linter.
NestJS has a default eslint configuration.

## Run Locally

Install dependencies

```bash
  yarn install
```

Run the server

```bash
  yarn start:dev
```

## Performance

To load tests, run following command

```bash
  loadtest -c 10 --rps 200 https://tarikfp-perf-analytics-api.herokuapp.com/
```

## Running Tests

To run tests, run the following command

```bash
  yarn test
```

## Deployment

This API is deployed to the Heroku.

To dockerize this project, simply run:

In development env:

```bash
  yarn dockerize-dev
```

In production env:

```bash
  yarn dockerize-prod
```

## Deployed URL

https://tarikfp-perf-analytics-api.herokuapp.com/
