#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkPipelineDemoStack } from '../lib/cdk-pipeline-demo-stack';
import { PipelineStack } from '../lib/pipeline-stack';
import { LambdaStack } from '../lib/lambda-stack';

const GITHUB_REPO_NAME = 'cdk-pipeline-demo';
const GITHUB_REPO_OWNER = 'justdatguymat';
const GITHUB_REPO_BRANCH = 'master';

const app = new cdk.App();

const lambdaStack = new LambdaStack(app, 'LambdaStack');
new PipelineStack(app, 'PipelineDeployingLambdaStack', {
  lambdaCode: lambdaStack.lambdaCode,
  repoOwner: GITHUB_REPO_OWNER,
  repoName: GITHUB_REPO_NAME,
  branch: GITHUB_REPO_BRANCH,
});

new CdkPipelineDemoStack(app, 'CdkPipelineDemoStack');

app.synth();
